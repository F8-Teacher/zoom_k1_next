"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState();
  useEffect(() => {
    localStorage.setItem("token", "123");
    const value = Math.random();
    const setRandom = () => {
      setValue(value);
    };
    setRandom();
  }, []);
  //US: 12,000,000
  //VN: 12.000.000
  //number.toLocaleString("vi-VN")

  return (
    <header className="max-w-300 mx-auto py-3 flex justify-between items-center">
      <h1
        className="text-3xl font-semibold"
        onClick={() => setCount(count + 1)}
      >
        Logo: {count} {value}
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
