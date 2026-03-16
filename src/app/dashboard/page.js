import Link from "next/link";
import { Dumbbell, Utensils, Flame, ChevronRight } from "lucide-react";
import DockBox from "@/components/DockBox";
import SectionCard from "@/components/SectionCard";

export default function DashboardPage() {
  return (
    <div className="h-full bg-gray-50 flex flex-col">
      <div className="flex-1 min-h-0 flex flex-col">
        <header className="sticky top-0 z-10 bg-gray-50/95 backdrop-blur px-5 pt-5 pb-4 border-b border-gray-300">
          <h1 className="text-2xl font-extrabold text-gray-900 mt-1">
            HealthCare AI
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            오늘의 식단과 운동 플랜을 한눈에 확인하세요.
          </p>
        </header>

        <div className="flex-1 overflow-y-auto px-5 pt-4 pb-6 space-y-4">
          <SectionCard title="운동 플랜">
            <div className="space-y-2">
              {[
                "목/어깨 가동성 스트레칭 10분",
                "코어 안정화 루틴 15분",
                "하체 밸런스 루틴 12분",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-3 py-2"
                >
                  <span className="text-sm text-gray-700 flex items-center gap-2">
                    <Dumbbell size={14} /> {item}
                  </span>
                  <ChevronRight size={14} className="text-gray-400" />
                </div>
              ))}
            </div>
            <Link
              href="/workout"
              className="block text-center py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold"
            >
              운동 시작하기
            </Link>
          </SectionCard>

          <SectionCard title="오늘의 식단">
            <div className="space-y-2">
              {[
                "아침: 단백질 오트밀 + 블루베리",
                "점심: 현미밥 + 닭가슴살 샐러드",
                "저녁: 연어 스테이크 + 구운 채소",
              ].map((meal) => (
                <div
                  key={meal}
                  className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 flex items-center gap-2"
                >
                  <Utensils size={14} className="text-emerald-600" />
                  {meal}
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-orange-50 border border-orange-100 px-3 py-2 text-sm text-orange-700 flex items-center gap-2">
              <Flame size={14} />
              오늘 예상 소모 칼로리: 420kcal
            </div>
          </SectionCard>
        </div>
      </div>

      <DockBox />
    </div>
  );
}
