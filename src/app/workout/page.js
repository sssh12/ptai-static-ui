import Link from "next/link";
import { CheckCircle2, Circle, Camera, PlayCircle } from "lucide-react";
import DockBox from "@/components/DockBox";
import SectionCard from "@/components/SectionCard";

const workouts = [
  { name: "목 회전 스트레칭", status: "done" },
  { name: "어깨 안정화 밴드 운동", status: "active" },
  { name: "코어 호흡 리셋", status: "todo" },
  { name: "하체 균형 런지", status: "todo" },
];

export default function WorkoutPage() {
  return (
    <div className="h-full bg-gray-50 flex flex-col">
      <div className="flex-1 min-h-0 flex flex-col">
        <header className="sticky top-0 z-10 bg-gray-50/95 backdrop-blur px-5 pt-5 pb-4 border-b border-gray-300">
          <h1 className="text-2xl font-extrabold text-gray-900 mt-1">
            오늘의 운동 루틴
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            운동 플랜을 순서대로 수행하고 카메라 모드에서 피드백을 받습니다.
          </p>
        </header>

        <div className="flex-1 overflow-y-auto px-5 pt-4 pb-6 space-y-4">
          <SectionCard
            title="운동 동작 목록"
            description="각 동작 버튼으로 시작 -> 카메라 모드 전환"
          >
            <div className="space-y-2">
              {workouts.map((workout) => {
                const isDone = workout.status === "done";
                const isActive = workout.status === "active";

                return (
                  <div
                    key={workout.name}
                    className={`rounded-xl border px-3 py-2 flex items-center justify-between ${
                      isActive
                        ? "border-blue-300 bg-blue-50"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      {isDone ? (
                        <CheckCircle2 size={16} className="text-emerald-500" />
                      ) : (
                        <Circle
                          size={16}
                          className={
                            isActive ? "text-blue-500" : "text-gray-300"
                          }
                        />
                      )}
                      {workout.name}
                    </span>
                    {isActive ? (
                      <Link
                        href="/workout/camera"
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-600 text-white"
                      >
                        시작
                      </Link>
                    ) : isDone ? (
                      <span className="text-xs text-emerald-500">완료</span>
                    ) : (
                      <span className="text-xs text-gray-400">대기</span>
                    )}
                  </div>
                );
              })}
            </div>
            <Link
              href="/workout/camera"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-900 text-white text-sm font-semibold"
            >
              <Camera size={16} />
              카메라 모드로 전환
            </Link>
          </SectionCard>

          <SectionCard title="흐름 미리보기">
            <p className="text-sm text-gray-600 leading-relaxed">
              운동 시작 -&gt; 카메라 모드 -&gt; 실시간 비전 피드백 -&gt; 운동
              완료 버튼 -&gt; 목록으로 복귀
            </p>
            <Link
              href="/workout/camera"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700"
            >
              <PlayCircle size={16} />
              카메라 화면 확인
            </Link>
          </SectionCard>
        </div>
      </div>

      <DockBox />
    </div>
  );
}
