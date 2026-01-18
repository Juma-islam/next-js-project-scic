"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const hasAuthCookie = document.cookie
      .split("; ")
      .some((row) => row.startsWith("auth="));

    setIsAuthenticated(hasAuthCookie);
  }, [pathname]);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    toast.success("Logged out");
    router.push("/");
    router.refresh();
  };

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between">
      <Link href="/" className="font-bold text-xl">
        Shopbd
      </Link>

      <div className="flex gap-4 items-center">
        <Link href="/">Home</Link>
        <Link href="/items">Items</Link>

        {isAuthenticated ? (
          <>
            <Link href="/add-item">Add Item</Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="bg-blue-600 px-3 py-1 rounded"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
