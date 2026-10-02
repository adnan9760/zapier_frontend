'use client'
import { useState } from 'react'
import { Home, Compass, Zap, Table, Bot, Layout, Cpu, Settings } from 'lucide-react'
import { useRouter } from 'next/navigation'
export default function Sidebar() {
    const router = useRouter();
  const [active, setActive] = useState('Home')

  const items = [
    { name: 'Home', icon: <Home size={18} /> ,link:"/Dashboard" },
    { name: 'Discover', icon: <Compass size={18} /> ,link:"/Dashboard"},
    { name: 'Zaps', icon: <Zap size={18} />, link:"/zaps" },
    { name: 'Tables', icon: <Table size={18} />,link:"/Dashboard" },
    { name: 'Interfaces', icon: <Layout size={18} />,link:"/Dashboard" },
    { name: 'Chatbots', icon: <Bot size={18} />,link:"/Dashboard" },
    { name: 'Canvas', icon: <Cpu size={18} />,link:"/Dashboard" },
    { name: 'Agents', icon: <Cpu size={18} />,link:"/Dashboard" },
  ]

  return (
    <aside className="w-60 bg-white border-r flex flex-col">
      <div className="flex items-center justify-between p-4 border-b">
        <span className="font-bold text-xl text-black">_zapier</span>
        <button onClick={()=>router.push("/CreateZap")} className="bg-orange-500 text-white px-3 py-1 rounded text-sm">+ Create</button>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-2">
        {items.map((item) => (
          <button
            key={item.name}
            onClick={() => {setActive(item.name),
              router.push(item.link)
            }}
            className={`flex items-center gap-2 w-full px-3 py-2 rounded-md text-sm font-medium 
              ${active === item.name ? 'bg-orange-100 text-orange-600' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            {item.icon}
            {item.name}
          </button>
        ))}
      </nav>

      <div className="border-t mt-auto px-3 py-3 text-sm text-gray-600">
        <Settings size={18}></Settings> More
      </div>
    </aside>
  )
}
