import React from "react"
import { Card } from "antd"
import { data } from "@/app/data"

export default function Page({ params }: { params: { id: string } }) {
  const item = data.find(post => post.id === parseInt(params.id))
  return (
    <Card title={item?.title} bordered={false} style={{ width: 300 }}>
      <p>{item?.body}</p>
    </Card>
  )
}
