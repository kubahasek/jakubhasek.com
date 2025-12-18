import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Enable standalone output for Docker
  output: "standalone",
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    rehypePlugins: [
      // Use string path instead of importing to make it serializable
      "rehype-highlight",
    ],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
