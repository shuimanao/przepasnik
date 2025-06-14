import { useContext } from 'react';
import Link from 'next/link';
import { Post } from '../interfaces/post';
import { PostsContext } from './layout';

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts: initialPosts }: Props) => {
  const { activeCategory } = useContext(PostsContext);

  const filteredPosts = activeCategory
    ? initialPosts.filter(post => post.category === activeCategory)
    : initialPosts;

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-32">
        {filteredPosts.map(post => (
          <Link href={`/posts/${post.slug}`} className="block h-full" key={post.slug}>
            <article className="border border-neutral-200 rounded-lg p-6 hover:border-neutral-400 transition-colors bg-white shadow-sm hover:shadow-md h-full flex items-center">
              <h3 className="text-xl font-semibold leading-snug">{post.title}</h3>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
