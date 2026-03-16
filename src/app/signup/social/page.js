import Link from "next/link";
import { ChevronRight, ClipboardCheck, ScanLine, Sparkles } from "lucide-react";
import ProgressHeader from "@/components/ProgressHeader";
import SectionCard from "@/components/SectionCard";
import ChipGroup from "@/components/ChipGroup";

const painAreas = ["목", "어깨", "허리", "무릎", "발목", "없음"];
const conditions = ["고혈압", "당뇨", "심혈관계 질환", "관절염", "없음"];

export default function SocialSignupPage() {
  return (
    <div className="h-full bg-gray-50 flex flex-col">
      <ProgressHeader backHref="/" stepText="1 / 3" progress={33} />

      <div className="p-5 pb-8 space-y-4">
        <SectionCard title="소셜 로그인 회원가입">
          <div className="grid grid-cols-2 gap-2">
            <button className="py-2 rounded-xl bg-blue-50 text-blue-600 text-sm font-semibold border border-blue-200">
              여성
            </button>
            <button className="py-2 rounded-xl bg-white text-gray-500 text-sm font-semibold border border-gray-200">
              남성
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <input
              className="rounded-xl border border-gray-200 px-3 py-2 text-sm"
              placeholder="나이"
            />
            <input
              className="rounded-xl border border-gray-200 px-3 py-2 text-sm"
              placeholder="키(cm)"
            />
            <input
              className="rounded-xl border border-gray-200 px-3 py-2 text-sm"
              placeholder="몸무게(kg)"
            />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold text-gray-600">
              현재 통증 부위
            </p>
            <ChipGroup items={painAreas} />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold text-gray-600">기저질환</p>
            <ChipGroup items={conditions} />
          </div>
          <textarea
            className="w-full min-h-20 rounded-xl border border-gray-200 px-3 py-2 text-sm"
            placeholder="과거 수술 이력/복용 약물 (선택 입력)"
          />
        </SectionCard>

        <SectionCard
          title="온보딩 단계"
          description="기본 정보 -> 인바디 -> AI 플랜"
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between rounded-xl bg-white border border-gray-200 px-3 py-2">
              <span className="flex items-center gap-2 text-sm font-medium">
                <ClipboardCheck size={16} /> 기본 정보 입력
              </span>
              <span className="text-xs text-blue-600 font-semibold">
                진행중
              </span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-white border border-gray-200 px-3 py-2">
              <span className="flex items-center gap-2 text-sm font-medium">
                <ScanLine size={16} /> 인바디 등록
              </span>
              <ChevronRight size={16} className="text-gray-400" />
            </div>
            <div className="flex items-center justify-between rounded-xl bg-white border border-gray-200 px-3 py-2">
              <span className="flex items-center gap-2 text-sm font-medium">
                <Sparkles size={16} /> AI 맞춤 플랜 확인
              </span>
              <ChevronRight size={16} className="text-gray-400" />
            </div>
          </div>
          <Link
            href="/dashboard"
            className="block text-center py-3 rounded-xl bg-gray-900 text-white text-sm font-semibold"
          >
            기본 정보 완료 후 대시보드 보기
          </Link>
        </SectionCard>
      </div>
    </div>
  );
}
