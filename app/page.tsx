import { Button } from '@/components/ui/button'
import Image from 'next/image'
import type { Metadata } from 'next'
import './home.scss'

export const metadata: Metadata = {
  title: 'TrailMe - Home',
  description: 'Your GoTo Task Manager',
}

export default function Home() {
  return (
    <main className="home-container">
        <div className="task">
          <h1>Recent Task</h1>
        </div>
        <div className="create">
          <Button>Hello</Button>
        </div>
      </main>
  )
}
