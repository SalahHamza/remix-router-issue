import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const slug = params["slug"];
  return json({ slug });
};

export default function Page() {
  const { slug } = useLoaderData<typeof loader>();
  return <>Displaying $slug: {slug}</>;
}
