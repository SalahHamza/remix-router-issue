import type { MetaFunction } from "@remix-run/node";
import MigratedSPA from "~/spa";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  console.log("Hello from _index.tsx");

  return <MigratedSPA />;
}
