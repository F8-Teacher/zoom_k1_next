"use client";

export default function Error({ error }) {
  return (
    <div>
      <h1 className="text-3xl">Error: {error.message}</h1>
    </div>
  );
}
