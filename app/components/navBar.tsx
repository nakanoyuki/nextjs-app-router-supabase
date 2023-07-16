import Link from 'next/link'

export default function navBar() {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="space-x-4">
        <Link
          href="/"
          className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
        >
          HOME
        </Link>
        <Link
          href="/blogs"
          className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
        >
          BLOG
        </Link>
        <Link
          href="/streaming-sr"
          className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
        >
          Streaming SR
        </Link>
        <Link
          href="/auth"
          className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
        >
          Auth
        </Link>
      </nav>
    </header>
  )
}
