'use client'
import { useRouter } from 'next/navigation'

export default function RefreshButton() {
  const router = useRouter()
  return (
    <button
      className="rounded bg-indigo-600 py-1 px-3 font-medium text-white hover:bg-indigo-700"
      onClick={() => {
        router.refresh()
      }}
    >
      Refresh Current Route
    </button>
  )
}
