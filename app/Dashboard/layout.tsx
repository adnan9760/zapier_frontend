import '../globals.css'
import Sidebar from '@/component/Sidebar'
import Navbar from '@/component/Navbar'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-row min-h-screen bg-[#f9f8f7]">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <Navbar />
          <div className="p-6 overflow-y-auto">{children}</div>
        </main>
      </body>
    </html>
  )
}
