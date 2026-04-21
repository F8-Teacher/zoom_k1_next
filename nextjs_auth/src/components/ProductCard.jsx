import { Button } from "@/components/ui/button";
import Image from "next/image";
import AddToCartButton from "./AddToCart";
export default function ProductCard({ product }) {
  return (
    <div>
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={300}
        className="h-75 object-cover"
      />
      <h2 className="text-xl font-medium my-3">{product.name}</h2>
      <AddToCartButton productId={product._id} />
    </div>
  );
}
