"use client";

import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();
  return <button onClick={() => router.push(`/products`)}>Click me</button>;
}

//useNavigate(): React router dom
//useRouter(): Nextjs (next/navigation)
