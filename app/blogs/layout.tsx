import React from 'react'
import BlogListStatic from '../components/BlogListStatic'
import RefreshButton from '../components/RefreshButton'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex">
      <aside className={`h-[calc(100vh-56px)] w-1/4 bg-gray-200 p-2`}>
        <BlogListStatic />
        <div className="flex justfy-center">
          <RefreshButton />
        </div>
      </aside>
      <main className="flex flex-1 justfy-center">{children}</main>
    </section>
  )
}
