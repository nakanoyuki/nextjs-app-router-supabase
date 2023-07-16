import { Suspense } from 'react'
import NoteList from './components/NoteList'
import Spinner from './components/Spinner'

export default function Home() {
  return (
    <main>
      <div className="m-10 text-center">
        <p>Hello World</p>
        <Suspense fallback={<Spinner color="border-blue-500" />}>
          <NoteList />
        </Suspense>
      </div>
    </main>
  )
}
