"use client"
import Navbar from "@/components/Navbar"
import SideBar from "@/components/SideBar"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { usePathname } from "next/navigation"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'TrailMe',
//   description: 'Your GoTo Task Manager',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  console.log("Pathname",pathname)
  return (
    <html lang="en">
      <body className={`${inter.className}  con `}>
           {
            pathname != '/login' && pathname != '/register' && (
              <>
                 <Navbar />
                <div className="sidebar">
                  <SideBar />
                </div>
              </>
            )
           }
           <div className={pathname == '/login' || pathname   == '/register' ? "altmain" : "mainPage"}>
              {children}
           </div>
      </body>
    </html>
  )
}
