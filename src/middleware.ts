import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  // 如果不是登录页面，并且没有 token，拦截到登录页
  if (request.nextUrl.pathname !== "/login") {
    const token = request.cookies.get("token")?.value
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}
