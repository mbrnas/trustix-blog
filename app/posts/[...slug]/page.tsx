import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";
import { Disclaimer } from "@/components/disclaimer";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const url = `https://trustixo.com/posts/${post.slugAsParams}`;
  const readingTime = Math.ceil(post.body.raw.split(/\s+/).length / 200);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ["Trustixo Team"],
      tags: post.tags || [],
      images: [
        {
          url: `https://trustixo.com/posts/${post.slugAsParams}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [
        `https://trustixo.com/posts/${post.slugAsParams}/twitter-image.jpg`,
      ],
    },
    alternates: {
      canonical: url,
    },
    other: {
      "article:published_time": post.date,
      "article:modified_time": post.date,
      "article:reading_time": `${readingTime} min read`,
      "article:section": post.tags?.[0] || "Finance",
      "article:tag": post.tags?.join(", ") || "finance, investing, money",
    },
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-6 prose dark:prose-invert">
      <Disclaimer className="mb-8" />
      <h1 className="mb-2">{post.title}</h1>
      {post.description && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200 text-justify">
          {post.description}
        </p>
      )}
      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </article>
  );
}
