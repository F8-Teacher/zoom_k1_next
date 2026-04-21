"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Spinner } from "./ui/spinner";

export default function UserProfile() {
  const { user, isLoading, isAuthenticated, logout } = useAuth();
  return (
    <>
      {isLoading ? (
        <li>
          <Spinner />
        </li>
      ) : isAuthenticated ? (
        <>
          <li>Chào: {user.fullName}</li>
          <li>
            <Button onClick={logout}>Logout</Button>
          </li>
        </>
      ) : (
        <li>
          <Link href={"/auth/login"}>
            <Button>Login</Button>
          </Link>
        </li>
      )}
    </>
  );
}
