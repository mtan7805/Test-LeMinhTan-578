"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CompassIcon, HomeIcon, UserIcon } from "./Icons";

export const Navigation: React.FC = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Trang chủ", icon: HomeIcon, active: pathname === "/" },
    {
      href: "/explore",
      label: "Khám phá",
      icon: CompassIcon,
      active: pathname === "/explore",
    },
    {
      href: "/profile",
      label: "Hồ sơ",
      icon: UserIcon,
      active: pathname === "/profile",
    },
  ] as const;

  return (
    <>
      <div className="hidden md:flex flex-col w-64 h-screen bg-bg-dark border-r border-r-border-dark fixed top-0 left-0 p-4 text-white z-40">
        <div className="flex text-xl font-bold mb-8 p-2 gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
            width="25"
            height="25"
          >
            <rect width="25" height="25" fill="#0d1117" rx="4" />
            <path
              d="M 4,19 L 4,6 L 9,12 L 14,6 L 14,19 M 14,6 L 21,6 M 17.5,6 L 17.5,19"
              fill="none"
              stroke="#00f2fe"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="hidden md:inline">Le Minh Tan</p>
        </div>
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all ${item.active ? "text-primary bg-primary/20" : "text-text-muted hover:bg-surface-hover"}`}
            >
              <item.icon size={24} active={item.active} />

              <span className="hidden md:inline font-bold">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      <nav className="flex md:hidden fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[450px] items-center justify-around border-t border-t-border-dark/50 bg-black/60 backdrop-blur-md rounded-b-2xl overflow-hidden z-50">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 p-4 transition-all ${item.active ? "text-primary " : "text-text-muted hover:bg-surface-hover"}`}
          >
            <item.icon size={22} active={item.active} />

            <span className="text-sm">{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
};
