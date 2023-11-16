import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Jakub Hašek" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <h1 className="text-3xl font-bold">Coming soon!</h1>
    </div>
  );
}
