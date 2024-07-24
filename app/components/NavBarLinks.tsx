"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const navBarLinks = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },
  {
    id: 1,
    name: "Templates",
    href: "#",
  },
  {
    id: 2,
    name: "UI kits",
    href: "#",
  },
  {
    id: 3,
    name: "Icons",
    href: "#",
  },
];
function NavBarLinks() {
  const location = usePathname();

  console.log("location: ", location);

  return (
    <div className="hidden md:flex justify-center items-center col-span-6 gap-x-2">
      {navBarLinks.map((item) => (
        <Link
          href={item.href}
          key={item.id}
          className={cn(
            location == item.href
              ? "bg-muted"
              : "hover:bg-muted hover:bg-opacity-75",
            "group flex items-center px-2 py-2 font-medium rounded-md"
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default NavBarLinks;
