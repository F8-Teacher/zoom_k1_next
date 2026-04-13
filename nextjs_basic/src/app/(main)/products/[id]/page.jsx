import { notFound } from "next/navigation";
import ProductImage from "./ProductImage";

const getProduct = async (id) => {
  const response = await fetch(`${process.env.SERVER_API}/products/${id}`);
  if (response.status === 404) {
    return;
  }
  if (!response.ok) {
    throw new Error("Có lỗi khi lấy product");
  }
  return response.json();
};
export default async function ProductDetailpage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) {
    return notFound();
  }
  return (
    <div>
      <h1 className="text-3xl mb-2">{product.title}</h1>
      <p className="text-lg">Price: {product.price.toLocaleString()}$</p>
      <ProductImage product={product} />
    </div>
  );
}

//[tenfolder] --> dynamic route
