"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { label: "Performance", href: "/performance" },
  { label: "Reliability", href: "/reliability" },
  { label: "Scale", href: "/scale" }
]

export default function Header() {
  const pathname = usePathname()
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between items-center container mx-auto text-white p-8">
        <Link className="text-3xl font-bold" href={"/"}>
          Home
        </Link>
        <div className="text-xl space-x-4">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`${pathname === link.href ? "text-purple-500" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
