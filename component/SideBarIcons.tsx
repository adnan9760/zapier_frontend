"use client";
import { IconHome, IconBolt, IconTable, IconRobot, IconSettings } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

interface DecodedToken {
  name?: string;
  email?: string;
  [key: string]: any;
}

export default function Sidebar() {
  const router = useRouter();
  const [initial, setInitial] = useState<string>("");

  useEffect(() => {
    try {
      const storedToken = localStorage.getItem("token");
      if (!storedToken) return;

      const token = JSON.parse(storedToken);
      const decoded: DecodedToken = jwtDecode(token);

      const userName = decoded.name || decoded.email || "A";
      setInitial(userName.charAt(0).toUpperCase());
    } catch (err) {
      console.error("Error decoding token:", err);
      setInitial("A");
    }
  }, []);

  const icons = [
    { icon: <IconHome size={22} />, label: "Home", link: '/Dashboard' },
    { icon: <IconBolt size={22} />, label: "Zaps", link: "/zaps" },
    { icon: <IconTable size={22} />, label: "Tables", link: "/Dashboard" },
    { icon: <IconRobot size={22} />, label: "Chatbots", link: "/Dashboard" },
    { icon: <IconSettings size={22} />, label: "Settings", link: "/Dashboard" },
  ];

  return (
    <aside className="w-[60px] bg-[#3b2f2f] flex flex-col items-center justify-between py-4 text-neutral-200">
      {/* Top section */}
      <div className="flex flex-col items-center gap-6">
        <div className="bg-[#5b4646] p-2 rounded-lg">
          ⚡
        </div>

        {icons.map((item, i) => (
          <button
            onClick={() => router.push(item.link)}
            key={i}
            className="hover:bg-[#5b4646] p-2 rounded-lg transition"
            title={item.label}
          >
            {item.icon}
          </button>
        ))}
      </div>

      {/* Bottom section: User initial */}
      <div className="p-2">
        <div className="h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-sm">
          {initial || "A"}
        </div>
      </div>
    </aside>
  );
}
