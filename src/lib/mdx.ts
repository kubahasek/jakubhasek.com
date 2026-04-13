import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

const postFiles = import.meta.glob("../../content/posts/*.mdx", {
  eager: true,
  import: "default",
  query: "?raw",
}) as Record<string, string>;

export interface PostMeta {
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  slug: string;
  visible: boolean;
}

export interface Post extends PostMeta {
  content: string;
  htmlContent: string;
}

function markdownToHtmlSync(markdown: string): string {
  const result = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .processSync(markdown);
  return result.toString();
}

function getPostEntries() {
  return Object.entries(postFiles).map(([filePath, fileContents]) => {
    const fileName = filePath.split("/").at(-1) ?? "";
    const slug = fileName.replace(/\.mdx$/, "");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "",
      date: data.date || "",
      excerpt: data.excerpt || "",
      readTime: data.readTime || "",
      visible: data.visible !== undefined ? data.visible : true,
      content,
    };
  });
}

export function getAllPosts(): PostMeta[] {
  return getPostEntries()
    .filter((post) => post.visible)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ content, ...post }) => post);
}

export function getPostBySlug(slug: string): Post | null {
  const post = getPostEntries().find((entry) => entry.slug === slug);

  if (!post) {
    return null;
  }

  return {
    ...post,
    htmlContent: markdownToHtmlSync(post.content),
  };
}

export function getAllPostSlugs(): string[] {
  return getPostEntries().map((post) => post.slug);
}
