import Link from "next/link";

type Props = {
  title: string;
  date: string;
  slug: string;
};

const PostPreview = ({ title, slug }: Props) => {
  return (
    <div className="border-solid border-2 border-slate-50 p-4 flex items-center md:items-start">
      <h3 className="text-2xl leading-snug">
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
