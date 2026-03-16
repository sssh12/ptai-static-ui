import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProgressHeader({
  backHref = "/",
  stepText,
  progress = 0,
}) {
  const width = Math.max(0, Math.min(100, progress));

  return (
    <header className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-gray-100 px-5 py-4">
      <div className="grid grid-cols-[32px_1fr_40px] items-center gap-3">
        <Link
          href={backHref}
          className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50"
        >
          <ArrowLeft size={16} />
        </Link>
        <div className="space-y-1">
          <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all"
              style={{ width: `${width}%` }}
            />
          </div>
          <p className="text-[11px] font-semibold text-gray-400 text-center">
            {stepText}
          </p>
        </div>
        <span className="text-[11px] font-semibold text-gray-300 text-right">
          ONBOARD
        </span>
      </div>
    </header>
  );
}
