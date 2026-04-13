"use client";
import Image from "next/image";
import { useState } from "react";
export default function ProductImage({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.thumbnail);

  return (
    <>
      <Image alt={product.title} src={selectedImage} width={400} height={300} />
      <div className="flex gap-2">
        {product.images.map((image, index) => (
          <Image
            onClick={() => setSelectedImage(image)}
            className="cursor-pointer hover:opacity-50"
            key={index}
            alt={product.title}
            src={image}
            width={100}
            height={100}
          />
        ))}
      </div>
    </>
  );
}
