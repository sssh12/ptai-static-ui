import { TrendingUp, Salad, Dumbbell, BrainCircuit } from "lucide-react";
import DockBox from "@/components/DockBox";
import SectionCard from "@/components/SectionCard";

export default function ReportPage() {
  return (
    <div className="h-full bg-gray-50 flex flex-col">
      <div className="flex-1 min-h-0 flex flex-col">
        <header className="sticky top-0 z-10 bg-gray-50/95 backdrop-blur px-5 pt-5 pb-4 border-b border-gray-300">
          <h1 className="text-2xl font-extrabold text-gray-900 mt-1">
            오늘의 분석 리포트
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            식단/운동 달성률과 피드백을 확인하세요.
          </p>
        </header>

        <div className="flex-1 overflow-y-auto px-5 pt-4 pb-6 space-y-4">
          <SectionCard title="달성률 요약">
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-gray-200 bg-white px-3 py-3">
                <p className="text-xs text-gray-500">운동 달성</p>
                <p className="text-xl font-bold text-gray-900 mt-1">75%</p>
                <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
                  <Dumbbell size={12} /> 3/4 완료
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white px-3 py-3">
                <p className="text-xs text-gray-500">식단 달성</p>
                <p className="text-xl font-bold text-gray-900 mt-1">82%</p>
                <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
                  <Salad size={12} /> 3끼 중 2끼 적합
                </p>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="변화 추이" description="최근 7일 기준">
            <div className="rounded-xl bg-white border border-gray-200 px-3 py-3 space-y-2 text-sm text-gray-700">
              <p className="flex items-center gap-2">
                <TrendingUp size={14} className="text-blue-500" /> 코어 안정성
                지표 +12%
              </p>
              <p className="flex items-center gap-2">
                <TrendingUp size={14} className="text-blue-500" /> 어깨 불균형
                경고 -8%
              </p>
              <p className="flex items-center gap-2">
                <TrendingUp size={14} className="text-blue-500" /> 평균 운동
                지속시간 +6분
              </p>
            </div>
          </SectionCard>

          <SectionCard title="RAG 분석 코멘트">
            <div className="rounded-xl bg-blue-50 border border-blue-100 px-3 py-3 text-sm text-blue-900 leading-relaxed">
              <p className="font-semibold flex items-center gap-2 mb-1">
                <BrainCircuit size={16} /> AI 코치 코멘트
              </p>
              어깨 안정화 루틴을 주 4회 유지하면 통증 위험도가 현재 단계에서 2주
              내 추가로 낮아질 가능성이 높습니다. 하체 밸런스 루틴은 운동 전
              스트레칭 시간을 3분 늘리면 정확도가 더 좋아집니다.
            </div>
          </SectionCard>
        </div>
      </div>

      <DockBox />
    </div>
  );
}
