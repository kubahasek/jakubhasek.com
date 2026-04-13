import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

const postFiles = import.meta.glob("../../content/posts/*.mdx", {
  query: "?raw",
  import: "default",
  eager: true,
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

function getSlugFromPath(filePath: string): string {
  return (
    filePath
      .split("/")
      .pop()
      ?.replace(/\.mdx$/, "") ?? ""
  );
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

export function getAllPosts(): PostMeta[] {
  try {
    const allPostsData = Object.entries(postFiles).map(
      ([filePath, fileContents]) => {
        const slug = getSlugFromPath(filePath);
        const { data } = matter(fileContents);

        return {
          slug,
          title: data.title || "",
          date: data.date || "",
          excerpt: data.excerpt || "",
          readTime: data.readTime || "",
          visible: data.visible || false,
        };
      },
    );

    return allPostsData
      .filter((post) => post.visible)
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error("Error reading posts:", error);
    return [];
  }
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fileEntry = Object.entries(postFiles).find(
      ([filePath]) => getSlugFromPath(filePath) === slug,
    );

    if (!fileEntry) {
      return null;
    }

    const [, fileContents] = fileEntry;
    const { data, content } = matter(fileContents);

    const htmlContent = markdownToHtmlSync(content);

    return {
      slug,
      title: data.title || "",
      date: data.date || "",
      excerpt: data.excerpt || "",
      readTime: data.readTime || "",
      visible: data.visible !== undefined ? data.visible : true,
      content,
      htmlContent,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getAllPostSlugs(): string[] {
  try {
    return Object.keys(postFiles).map((filePath) => getSlugFromPath(filePath));
  } catch (error) {
    console.error("Error reading post slugs:", error);
    return [];
  }
}
