import Link from "next/link";
import { Camera, CheckCircle2, AlertTriangle, ArrowLeft } from "lucide-react";

export default function CameraWorkoutPage() {
  return (
    <div className="h-full bg-black relative text-white">
      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
        <Link
          href="/workout"
          className="h-9 w-9 rounded-full bg-white/15 border border-white/25 flex items-center justify-center"
        >
          <ArrowLeft size={16} />
        </Link>
        <div className="px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-semibold">
          실시간 자세 분석
        </div>
      </div>

      <div className="h-full flex flex-col justify-between p-5">
        <div className="mt-16 rounded-2xl border border-white/20 bg-white/5 backdrop-blur p-4">
          <div className="aspect-3/4 rounded-xl bg-linear-to-b from-gray-800 to-gray-950 border border-white/10 flex items-center justify-center">
            <div className="text-center space-y-2 text-gray-300">
              <Camera size={28} className="mx-auto" />
              <p className="text-sm">카메라 프리뷰 영역 (Mock)</p>
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-6 mt-2">
          <div className="rounded-xl bg-emerald-500/20 border border-emerald-400/40 px-3 py-2 text-sm flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-300" />
            무릎 각도 안정적입니다.
          </div>
          <div className="rounded-xl bg-amber-400/15 border border-amber-300/35 px-3 py-2 text-sm flex items-center gap-2">
            <AlertTriangle size={16} className="text-amber-200" />
            어깨를 3cm 더 낮춰보세요.
          </div>

          <Link
            href="/workout"
            className="block text-center w-full py-3 rounded-xl bg-white text-gray-900 font-bold mb-2"
          >
            운동 완료
          </Link>
        </div>
      </div>
    </div>
  );
}
