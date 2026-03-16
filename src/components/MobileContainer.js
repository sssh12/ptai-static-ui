export default function MobileContainer({ children }) {
  return (
    <div className="w-full h-full md:w-1/4 md:min-h-1/2 md:max-h-[calc(100dvh-2rem)] md:rounded-[40px] md:shadow-xl md:border-12 md:border-black bg-white overflow-hidden flex flex-col relative shrink-0">
      <div className="flex-1 overflow-y-auto w-full relative scrollbar-none">
        {children}
      </div>
    </div>
  );
}
