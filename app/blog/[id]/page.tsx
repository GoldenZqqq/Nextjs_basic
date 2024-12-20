import React from "react"
import { Card } from "antd"
import { data } from "@/app/data"

interface IParams {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: IParams) {
  return {
    title: `博客详情 - ${params.id}`
  }
}

export default function Page({ params }: IParams) {
  const item = data.find(post => post.id === parseInt(params.id))
  return (
    <Card title={item?.title} bordered={false} style={{ width: 300 }}>
      <p>{item?.body}</p>
    </Card>
  )
}
