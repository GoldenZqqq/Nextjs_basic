"use client"
import React from "react"
import { Button, message } from "antd"
import { useRouter } from "next/navigation"

export default function Page() {
  const router = useRouter()
  
  const handleLogout = async () => {
    try {
      const res = await fetch("/api/logout", {
        method: "DELETE"
      })
      const data = await res.json()
      
      if (data.success) {
        message.success("退出成功")
        router.push("/login")
      } else {
        message.error(data.message || "退出失败")
      }
    } catch (error) {
      message.error("退出失败，请稍后重试")
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Button type="primary" onClick={handleLogout}>
        退出
      </Button>
    </div>
  )
}
