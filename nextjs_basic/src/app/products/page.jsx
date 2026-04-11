import React from "react";

export default async function ProductsPage({ searchParams }) {
  const { page } = await searchParams;
  return (
    <div>
      <h1 className="text-3xl">Products: {page}</h1>
    </div>
  );
}
