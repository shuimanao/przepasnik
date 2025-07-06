import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import PostBody from '../../components/post-body';
import PostHeader from '../../components/post-header';
import PostTitle from '../../components/post-title';
import type { Post } from '../../interfaces/post';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';

type Props = {
  post: Post & { content: string };
  morePosts: Post[];
  preview?: boolean;
};

export default function Post({ post }: Props) {
  const router = useRouter();
  const title = `${post.title} | Przepaśnik`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout titleClickable={true} showSearchAndCategories={false}>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>{title}</title>
            </Head>
            <PostHeader title={post.title} date={post.date} />
            <PostBody content={post.content} />
          </article>
        </>
      )}
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content']);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
