"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  return (
    <header className="max-w-300 mx-auto py-3 flex justify-between items-center">
      <h1
        className="text-3xl font-semibold"
        onClick={() => setCount(count + 1)}
      >
        Logo
      </h1>
      <ul className="flex gap-3 items-center">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/products"}>Products</Link>
        </li>
      </ul>
    </header>
  );
}
