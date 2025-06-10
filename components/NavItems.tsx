"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Companions",
    href: "/companions",
  },
  {
    label: "My Journey",
    href: "/my-journey",
  },
];

export default function NavItems() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-8">
      {navItems.map((item) => (
        <Link
          href={item.href}
          key={item.label}
          className={cn(pathname === item.href && "text-primary font-semibold")}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
