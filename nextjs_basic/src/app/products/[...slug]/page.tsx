export default async function ProductDetailpage({ params }) {
  const { slug } = await params;
  console.log(slug);

  return (
    <div>
      <h1 className="text-3xl">Product Detail</h1>
    </div>
  );
}

//[tenfolder] --> dynamic route
