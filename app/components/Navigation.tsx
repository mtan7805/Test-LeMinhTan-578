"use client";

import { useState } from "react";
import { CompassIcon, HomeIcon, UserIcon } from "./Icons";

export const Navigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"home" | "explore" | "profile">(
    "home",
  );

  const menuItems = [
    { id: "home", label: "Trang chủ", icon: HomeIcon },
    { id: "explore", label: "Khám phá", icon: CompassIcon },
    { id: "profile", label: "Hồ sơ", icon: UserIcon },
  ] as const;

  return (
    <>
      <div className="hidden md:flex flex-col w-64 h-screen bg-zinc-950 border-r border-r-zinc-900 fixed top-0 left-0 p-4 text-white z-40">
        <div className="text-xl font-bold mb-8 p-2">Le Minh Tan</div>
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all ${activeTab === item.id ? "text-[#fe2c55] bg-[#fe2c55]/20" : "text-zinc-400 hover:bg-zinc-900"}`}
            >
              <item.icon size={24} active={activeTab == item.id} />

              <span className="hidden md:inline font-bold">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <nav className="flex md:hidden fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[450px] items-center justify-around border-t border-t-zinc-900/50 bg-black/60 backdrop-blur-md rounded-b-2xl overflow-hidden z-50">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center gap-1 p-4 transition-all ${activeTab === item.id ? "text-[#fe2c55] " : "text-zinc-400 hover:bg-zinc-900"}`}
          >
            <item.icon size={22} active={activeTab == item.id} />

            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
};
