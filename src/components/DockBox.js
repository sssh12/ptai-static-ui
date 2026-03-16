"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, PlaySquare, FileText, User } from "lucide-react";

export default function DockBox() {
  const pathname = usePathname();

  const navs = [
    { name: "홈", icon: Home, path: "/dashboard" },
    { name: "운동", icon: PlaySquare, path: "/workout" },
    { name: "리포트", icon: FileText, path: "/report" },
    { name: "마이", icon: User, path: "/my" },
  ];

  return (
    <div
      className="z-20 border-t border-gray-300 bg-gray-50/95 backdrop-blur px-2 pt-2"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <div className="grid grid-cols-4 gap-2 rounded-2xl border border-gray-100 bg-gray-50 p-1.5 shadow-sm">
        {navs.map((n) => {
          const Icon = n.icon;
          const isActive =
            pathname === n.path || pathname?.startsWith(n.path + "/");
          return (
            <Link
              key={n.name}
              href={n.path}
              className={`flex flex-col items-center justify-center gap-1 rounded-xl py-2 transition-colors ${
                isActive
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-400 hover:bg-white/80"
              }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[11px] font-semibold">{n.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
