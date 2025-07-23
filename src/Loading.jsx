
export default function Loading() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg-neutral-900 text-white z-50">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
    </div>
  );
}