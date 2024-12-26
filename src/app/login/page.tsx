"use client"

import React from "react"
import type { FormProps } from "antd"
import { Button, Form, Input } from "antd"
import { useRouter } from "next/navigation"

type FieldType = {
  login?: string
  password?: string
  remember?: string
}

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = errorInfo => {
  console.log("Failed:", errorInfo)
}

const Page: React.FC = () => {
  const router = useRouter()

  const onFinish: FormProps<FieldType>["onFinish"] = async values => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })
    const data = await res.json()
    router.push("/dashboard")
  }
  return (
    <div className="container mx-auto flex justify-center items-center pt-48">
      <Form
        className="w-96"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ login: "admin", password: "123123" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="login"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Page
