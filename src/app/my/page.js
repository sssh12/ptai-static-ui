import {
  UserCircle2,
  ShieldCheck,
  TriangleAlert,
  PencilLine,
  Bell,
  ChevronRight,
} from "lucide-react";
import DockBox from "@/components/DockBox";
import SectionCard from "@/components/SectionCard";

export default function MyPage() {
  return (
    <div className="h-full bg-gray-50 flex flex-col">
      <div className="flex-1 min-h-0 flex flex-col">
        <header className="sticky top-0 z-10 bg-gray-50/95 backdrop-blur px-5 pt-5 pb-4 border-b border-gray-300">
          <h1 className="text-2xl font-extrabold text-gray-900 mt-1">
            내 정보 및 설정
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            온보딩에서 입력한 위험도 분류를 수정할 수 있습니다.
          </p>
        </header>

        <div className="flex-1 overflow-y-auto px-5 pt-4 pb-6 space-y-4">
          <SectionCard title="내 프로필">
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-3">
              <UserCircle2 size={34} className="text-gray-400" />
              <div>
                <p className="text-sm font-bold text-gray-900">김헬스 님</p>
                <p className="text-xs text-gray-500">
                  여성 · 29세 · 165cm · 58kg
                </p>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="위험도 분류 및 건강 정보">
            <div className="space-y-2 text-sm">
              <div className="rounded-xl border border-gray-200 bg-white px-3 py-2 flex items-center justify-between">
                <span className="flex items-center gap-2 text-gray-700">
                  <ShieldCheck size={15} className="text-emerald-600" /> 현재
                  위험도
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-1">
                  중간
                </span>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white px-3 py-2 flex items-center justify-between">
                <span className="flex items-center gap-2 text-gray-700">
                  <TriangleAlert size={15} className="text-amber-500" /> 통증
                  관리
                </span>
                <span className="text-xs text-gray-500">어깨/허리</span>
              </div>
              <button className="w-full rounded-xl border border-gray-200 bg-white px-3 py-3 flex items-center justify-between text-gray-700">
                <span className="flex items-center gap-2">
                  <PencilLine size={15} /> 온보딩 정보 수정
                </span>
                <ChevronRight size={14} className="text-gray-400" />
              </button>
            </div>
          </SectionCard>

          <SectionCard title="알림 설정">
            <button className="w-full rounded-xl border border-gray-200 bg-white px-3 py-3 flex items-center justify-between text-sm text-gray-700">
              <span className="flex items-center gap-2">
                <Bell size={15} /> 운동 리마인더
              </span>
              <span className="text-xs font-semibold text-blue-600">
                활성화
              </span>
            </button>
          </SectionCard>
        </div>
      </div>

      <DockBox />
    </div>
  );
}
