import { NextResponse } from "next/server"

export async function DELETE() {
  const response = NextResponse.json({
    success: true,
    message: "退出成功"
  })
  response.cookies.set("token", "", { maxAge: 0 })
  return response
}
