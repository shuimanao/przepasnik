import Link from "next/link";

type Props = {
  title: string;
  date: string;
  slug: string;
};

const PostPreview = ({ title, slug }: Props) => {
  return (
    <div>
      <h3 className="text-2xl mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
    </div>
  );
};

export default PostPreview;
