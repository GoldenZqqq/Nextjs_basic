# Next.js 项目说明文档

这是一个使用 [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) 创建的 [Next.js](https://nextjs.org/) 项目。

## 快速开始

运行开发服务器：

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## Next.js 核心特性

### 1. 路由系统
- **App Router**: 基于文件系统的路由
  - `app/page.tsx` -> `/`
  - `app/blog/[slug]/page.tsx` -> `/blog/:slug`
  - `app/shop/[...slug]/page.tsx` -> 捕获所有路由
- **布局系统**：
  - `layout.tsx` 用于共享UI
  - `template.tsx` 用于需要重新挂载的UI
  - `loading.tsx` 用于加载状态
  - `error.tsx` 用于错误处理

### 2. 数据获取
```typescript
// 服务端组件数据获取
async function Page() {
  const data = await fetch('https://api.example.com/data')
  return <main>{/* 使用数据 */}</main>
}

// 静态数据获取
export const revalidate = 3600 // 每小时重新验证
```

### 3. 服务端组件
- 默认所有组件都是服务端组件
- 减少客户端 JavaScript 体积
- 直接访问后端资源
- 保持敏感信息在服务器端

### 4. 客户端组件
```typescript
'use client'

// 用于需要客户端交互的组件
```

### 5. 数据缓存和重新验证
- **缓存策略**：
  - 路由缓存
  - 请求缓存
  - 完整页面缓存
- **重新验证方法**：
  - 基于时间
  - 按需重新验证

## 项目实践案例

### 1. 博客系统
- Markdown 文件解析
- 动态路由生成
- 图片优化处理
- SEO 优化

### 2. 电商应用
- 产品列表和详情页
- 购物车功能
- 用户认证
- 支付集成

### 3. 仪表板应用
- 实时数据更新
- 图表集成
- 用户权限管理
- API 路由实现

## 性能优化

- 图片组件 `next/image`
- 字体优化 `next/font`
- 动态导入 `dynamic import`
- 增量静态再生成 (ISR)

## 部署

推荐使用 [Vercel 平台](https://vercel.com/new) 部署，它是 Next.js 的创建者开发的托管平台。

## 更多资源

- [Next.js 文档](https://nextjs.org/docs)
- [Next.js 学习](https://nextjs.org/learn)
- [Next.js GitHub 仓库](https://github.com/vercel/next.js/)

## 项目结构最佳实践

```
├── app/
│   ├── api/           # API 路由
│   ├── components/    # 共享组件
│   ├── lib/          # 工具函数
│   ├── styles/       # 样式文件
│   └── [route]/      # 页面路由
├── public/           # 静态资源
├── types/           # TypeScript 类型
└── middleware.ts    # 中间件配置
```

## 环境配置

支持多环境变量配置：
- `.env.local`
- `.env.development`
- `.env.production`

## 调试技巧

使用 `console.log` 在服务端组件中调试时，可以在终端中查看输出。使用浏览器开发工具调试客户端组件。
