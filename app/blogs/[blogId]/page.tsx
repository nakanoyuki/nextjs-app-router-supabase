import { Database } from '@/database.types'
import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
import { notFound } from 'next/navigation'

type Blog = Database['public']['Tables']['blogs']['Row']

type PageProps = {
  params: {
    blogId: string
  }
}

async function fetchBlogs(blogId: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await fetch(
    `${process.env.url}/rest/v1/blogs?id=eq.${blogId}&select=*`,
    {
      headers: new Headers({
        apikey: process.env.apikey as string,
      }),
      cache: 'force-cache',
    }
  )
  // if (!res.ok) {
  //   throw new Error('Failed to fetch data in server')
  // }
  const blogs: Blog[] = await res.json()
  return blogs[0]
}

export default async function BlogDetailPage({ params }: PageProps) {
  const blogs = await fetchBlogs(params.blogId)
  if (!blogs) return notFound()
  return (
    <div className="mt-16 border-2 p-8">
      <p>
        <strong>Task ID:</strong>
        {blogs.id}
      </p>
      <p>
        <strong>Title:</strong>
        {blogs.title}
      </p>
      <p>
        <strong>Content:</strong>
        {blogs.content}
      </p>
      <Link href={`/blogs`}>
        <ArrowUturnLeftIcon className='mt-3 h-6 w-6 cursor-pointer text-blue-500'/>
      </Link>
    </div>
  )
}
