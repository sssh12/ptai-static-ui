import Link from "next/link";
import { User, Activity, FileText, Home } from "lucide-react";

export default function FeatureNav() {
  const routes = [
    { title: "첫 화면", url: "/" },
    { title: "회원가입 - 소셜 로그인", url: "/signup/social" },
    { title: "회원가입 - 이메일", url: "/signup/email" },
    { title: "대시보드", url: "/dashboard" },
    { title: "운동 시작", url: "/workout" },
    { title: "운동 중 (카메라 모드)", url: "/workout/camera" },
    { title: "리포트", url: "/report" },
    { title: "마이페이지", url: "/my" },
  ];

  return (
    <>
      <nav className="flex flex-col gap-2">
        {routes.map((route) => (
          <Link
            key={route.url}
            href={route.url}
            className="p-3 bg-gray-50 rounded-lg hover:bg-black hover:text-white transition-colors text-sm font-medium border border-gray-100"
          >
            {route.title}
          </Link>
        ))}
      </nav>
    </>
  );
}
