import Link from "next/link";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full bg-white relative p-6">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">
          HealthCare AI
        </h1>

        <h2 className="text-4xl font-bold leading-tight mb-6 mt-8">
          다치지 않고 확실하게,
          <br />
          나만의 AI 트레이너
        </h2>

        <p className="text-gray-600 mb-12 leading-relaxed">
          인바디 분석부터 실시간 자세 교정까지
          <br />
          지금 바로 시작하세요.
        </p>
      </div>

      <div className="flex flex-col gap-3 pb-8">
        <Link
          href="/signup/social"
          className="flex items-center justify-center gap-2 p-4 bg-[#FEE500] text-[#000000] font-semibold rounded-2xl transition hover:opacity-90"
        >
          카카오 로그인
        </Link>
        <Link
          href="/signup/social"
          className="flex items-center justify-center gap-2 p-4 bg-white border border-gray-200 text-gray-800 font-semibold rounded-2xl shadow-sm transition hover:bg-gray-50"
        >
          구글 로그인
        </Link>
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-400">또는</span>
          </div>
        </div>
        <Link
          href="/signup/email"
          className="flex items-center justify-center gap-2 p-4 bg-gray-900 text-white font-semibold rounded-2xl transition hover:bg-gray-800"
        >
          <Mail size={20} />
          이메일로 회원가입
        </Link>
      </div>
    </div>
  );
}
