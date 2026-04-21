"use client";

import { useCartStore } from "@/store/cart.store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function CartCount() {
  const { count, fetchCount } = useCartStore();
  const pathname = usePathname();
  useEffect(() => {
    fetchCount();
  }, [pathname]);
  return (
    <li>
      <Link href={"/cart"}>Cart ({count})</Link>
    </li>
  );
}
