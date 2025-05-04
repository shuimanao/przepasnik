import { useContext } from "react";
import Link from "next/link";
import { Post } from "../interfaces/post";
import { PostsContext } from "./layout";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts: initialPosts }: Props) => {
  const { activeCategory } = useContext(PostsContext);
  
  const filteredPosts = activeCategory
    ? initialPosts.filter((post) => post.category === activeCategory)
    : initialPosts;

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {filteredPosts.map((post) => (
          <div key={post.slug}>
            <h3 className="text-3xl mb-3 leading-snug">
              <Link href={`/posts/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h3>
            <div className="text-lg mb-4">
              <time dateTime={post.date}>{post.date}</time>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
