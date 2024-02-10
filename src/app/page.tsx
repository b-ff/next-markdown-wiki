import { Layout } from "@/components/Layout";
import { getPageContent } from "@/lib/getPageContent";
import { Metadata } from "next";

export default async function Home() {
  let content: { html: string };

  try {
    content = await getPageContent("index");
  } catch (error: any) {
    console.error(error);
    content = await getPageContent("404");
  }

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </Layout>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  const { meta } = await getPageContent("index");
  return meta;
}
