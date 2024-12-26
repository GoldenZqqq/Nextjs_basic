import { NextRequest, NextResponse } from "next/server"
import db from "@/db"

// GET => /api/articles
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const pageNum = Number(searchParams.get("pageNum")) || 1
  const pageSize = Number(searchParams.get("pageSize")) || 1
  const query = searchParams.get("query") || ""

  const data = db.data.posts

  let filteredData = query
    ? data.filter(item => {
        const { id, ...rest } = item
        return Object.values(rest).some(value =>
          value.toString().toLowerCase().includes(query.toLowerCase())
        )
      })
    : data

  const total = filteredData.length

  const startIndex = (pageNum - 1) * pageSize
  const endIndex = Math.min(startIndex + pageSize, total)
  filteredData =
    startIndex >= total ? [] : filteredData.slice(startIndex, endIndex)

  return NextResponse.json({
    code: 0,
    message: "获取成功",
    data: {
      total,
      list: filteredData
    }
  })
}

// POST => /api/articles
export async function POST(request: Request) {
  const data = await request.json()
  await db.update(({ posts }) =>
    posts.unshift({
      id: Math.random().toString(36).slice(2, 10),
      ...data
    })
  )
  return NextResponse.json({
    code: 0,
    message: "success",
    data
  })
}
