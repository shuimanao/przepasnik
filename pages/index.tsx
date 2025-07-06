import Head from 'next/head';
import Layout from '../components/layout';
import MoreStories from '../components/more-stories';
import { Post } from '../interfaces/post';
import { getAllPosts } from '../lib/api';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <Layout posts={allPosts} showSearchAndCategories={true} titleClickable={false}>
      <Head>
        <title>Przepaśnik</title>
      </Head>
      <MoreStories posts={allPosts} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'category']);

  return {
    props: { allPosts },
  };
};
