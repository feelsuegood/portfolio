import { getPost } from "@/lib/markdown";

type Props = {
  params: Promise<{ slug: string }>;
};

type Post = {
  title: string;
  date: string;
  contentHtml: string;
  slug: string;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = (await getPost(slug)) as Post;

  return (
    <main className="prose mx-auto p-8">
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </main>
  );
}
