import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      <div className="mt-12 mb-12 border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-lg font-medium mb-2">
              Professional Trading Tools
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Access advanced charting and analysis with TradingView
            </p>
          </div>
          <a
            href="https://www.tradingview.com/?aff_id=153591"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center sm:justify-start px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 border border-blue-200 dark:border-blue-800 rounded-md hover:border-blue-300 dark:hover:border-blue-700"
          >
            Try TradingView
            <svg
              className="w-4 h-4 ml-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>

      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  );
}
