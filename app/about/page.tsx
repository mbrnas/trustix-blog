import { Metadata } from "next";
import { Disclaimer } from "@/components/disclaimer";

export const metadata: Metadata = {
  title: "About Trustixo",
  description:
    "Learn about Trustixo's mission to provide unbiased financial education and insights.",
  openGraph: {
    title: "About Trustixo",
    description:
      "Learn about Trustixo's mission to provide unbiased financial education and insights.",
    type: "website",
    url: "https://trustixo.com/about",
    images: [
      {
        url: "https://trustixo.com/about/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Trustixo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Trustixo",
    description:
      "Learn about Trustixo's mission to provide unbiased financial education and insights.",
    images: ["https://trustixo.com/about/twitter-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            About Trustixo
          </h1>
          <p className="text-xl text-muted-foreground">
            Your trusted source for unbiased financial education and insights.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="prose prose-gray dark:prose-invert">
        <h2>Our Mission</h2>
        <p>
          At Trustixo, we believe that financial education should be accessible,
          unbiased, and practical. Our mission is to empower individuals with
          the knowledge and tools they need to make informed financial
          decisions.
        </p>

        <h2>What We Do</h2>
        <p>
          We provide comprehensive analysis of financial markets, investment
          strategies, and economic trends. Our content is designed to help both
          beginners and experienced investors navigate the complex world of
          finance with confidence.
        </p>

        <h2>Our Approach</h2>
        <p>
          We combine technical analysis with fundamental research to provide a
          well-rounded perspective on market movements. Our team of experienced
          analysts and writers work tirelessly to deliver high-quality,
          actionable insights.
        </p>

        <h2>Why Trust Us</h2>
        <p>
          Transparency and accuracy are at the core of everything we do. We
          maintain strict editorial standards and are committed to providing
          unbiased information. While we may include affiliate links, our
          recommendations are always based on thorough research and analysis.
        </p>
      </div>
      <Disclaimer />
    </div>
  );
}
