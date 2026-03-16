import "./globals.css";
import { Inter } from "next/font/google";
import MobileContainer from "@/components/MobileContainer";
import FeatureNav from "@/components/FeatureNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HealthCare AI",
  description: "나만의 AI 트레이너",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={`${inter.className} bg-gray-50 flex h-dvh w-full overflow-hidden items-center justify-center relative md:bg-gray-100`}
      >
        <div className="relative flex w-full h-full items-center justify-center px-3 py-3 md:px-4 md:py-4">
          <MobileContainer>{children}</MobileContainer>

          <div className="hidden lg:flex absolute right-4 top-4 bottom-4 flex-col gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-200 w-72 overflow-y-auto">
            <FeatureNav />
          </div>
        </div>
      </body>
    </html>
  );
}
