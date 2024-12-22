import { NextResponse } from "next/server"

// GET => /api/articles
export async function GET(request: Request) {
}

// POST => /api/articles
export async function POST(request: Request) {
  const data = await request.json()
  return NextResponse.json({
    code: 0,
    message: "success",
    data
  })
}