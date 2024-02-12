import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Layout } from "@/components/Layout";
import { IBreadcrumb, getBreadcrumbs } from "@/lib/getBreadcrumbs";
import { getStaticPaths } from "@/lib/getStaticPaths";
import { getPageContent } from "@/lib/getPageContent";
import { Metadata } from "next";

interface IPageParams {
  path: string[];
}

export default async function Home({ params }: { params: IPageParams }) {
  const { path } = params;

  let content: { html: string };
  let breadcrumbs: IBreadcrumb[] = getBreadcrumbs(path) ?? [];

  try {
    content = await getPageContent(path.join("/"));
  } catch (error: any) {
    console.error(error);
    content = await getPageContent("404");
  }

  return (
    <Layout>
      {breadcrumbs.length ? <Breadcrumbs breadcrumbs={breadcrumbs} /> : null}
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </Layout>
  );
}

export async function generateMetadata({
  params,
}: {
  params: IPageParams;
}): Promise<Metadata> {
  const { path } = params;

  try {
    const { meta } = await getPageContent(path.join("/"));
    return meta;
  } catch (error: any) {
    return {};
  }
}

// used for static pages generation
export async function generateStaticParams() {
  return getStaticPaths().map((path) => ({ path }));
}
