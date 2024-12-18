"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const linkData = [
  { name: "About", path: "/dashboard/about" },
  { name: "Settings", path: "/dashboard/settings" }
]

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const [count, setCount] = useState(0)
  const pathname = usePathname()
  console.log("pathname", pathname)
  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto">
      <div className="flex gap-4 font-bold text-lg mb-4">
        {linkData.map(link => (
          <Link
            key={link.path}
            className={pathname === link.path ? "text-purple-500" : ""}
            href={link.path}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <h2>Dashboard Layout {count}</h2>
      <button
        className="bg-black text-white p-2 rounded-md my-4"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      {children}
    </div>
  )
}
