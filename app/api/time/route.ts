import { NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic" // 动态生成
export const revalidate = 10 // 10秒后重新生成

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  return NextResponse.json({
    time: new Date().toLocaleTimeString(),
    searchParams
  })
}

export function POST() {}
