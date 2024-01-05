import Head from "next/head";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Post from "../interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <Layout>
      <Head>
        <title>Przepaśnik</title>
      </Head>
      <MoreStories posts={allPosts} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug"]);

  return {
    props: { allPosts },
  };
};
