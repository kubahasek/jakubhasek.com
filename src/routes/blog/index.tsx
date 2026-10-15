import { BlogPosts } from "@/components/blog-posts";
import { createFileRoute } from "@tanstack/react-router";
import { getAllPosts } from "@/lib/mdx";

export const Route = createFileRoute("/blog/")({
  head: ({ match }) => ({
    meta: [
      { title: "Blog - Jakub Hašek" },
      {
        name: "description",
        content:
          match.context.locale === "cs"
            ? "Články Jakuba Haška o vývoji webu, Reactu a TypeScriptu."
            : "Read Jakub Hašek's latest thoughts on web development, React, TypeScript, and modern development practices.",
      },
    ],
  }),
  loader: async () => {
    const posts = getAllPosts();
    return { posts };
  },
  component: BlogPage,
});

function BlogPage() {
  const { posts } = Route.useLoaderData();
  return <BlogPosts posts={posts} />;
}
