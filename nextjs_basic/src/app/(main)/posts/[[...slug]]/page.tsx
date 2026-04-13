export default async function PostsPage({ params, searchParams }) {
  const { slug } = await params;
  const { page } = await searchParams;
  return (
    <div>
      <h1 className="text-3xl">Posts</h1>
      <h2>Page: {page}</h2>
    </div>
  );
}
