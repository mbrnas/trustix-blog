import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      <div className="mt-12 mb-12">
        <div className="flex justify-center">
          <a
            href="https://www.tradingview.com/chart/?aff_id=153591&utm_source=creative&utm_lang=EN"
            target="_blank"
            rel="noopener noreferrer"
            className="tradingview-banner block w-full max-w-[468px] h-[30px] sm:h-[45px] md:h-[60px]"
          />
        </div>
      </div>

      {allPosts.map((post) => (
        <article key={post._id} className="mb-12">
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && (
            <p className="text-justify">{post.description}</p>
          )}
        </article>
      ))}
    </div>
  );
}
