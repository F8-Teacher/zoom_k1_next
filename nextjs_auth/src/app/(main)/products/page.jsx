import ProductCard from "@/components/ProductCard";
import { getProductList } from "@/services/product.service";

export default async function ProductsPage() {
  const products = await getProductList();
  return (
    <div>
      <h1 className="text-3xl mb-3">Products</h1>
      <div className="flex flex-wrap -mx-3">
        {products.map((product) => (
          <div key={product._id} className="px-3 mb-3 w-1/4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
