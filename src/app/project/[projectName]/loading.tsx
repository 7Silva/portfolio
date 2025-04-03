export default function Loading() {
  return (
    <div className="w-full animate-pulse px-7 max-sm:px-2">
      <div className="bg-border flex w-full items-center gap-12 rounded-xl p-4">
        <div className="space-y-3">
          <div className="h-2 w-16 rounded-lg bg-white/20" />
          <div className="h-2 w-16 rounded-lg bg-white/20" />
          <div className="h-2 w-16 rounded-lg bg-white/20" />
        </div>
        <div className="space-y-3">
          <div className="h-2 w-16 rounded-lg bg-white/20" />
          <div className="h-2 w-16 rounded-lg bg-white/20" />
          <div className="h-2 w-16 rounded-lg bg-white/20" />
        </div>
      </div>

      <div className="py-9">
        <div className="flex flex-col gap-5">
          <div className="bg-border h-16 w-16 rounded-full" />

          <div className="h-4 w-36 rounded-lg bg-white/20" />

          <div className="h-2 w-full rounded-lg bg-white/20" />
          <div className="h-2 w-full rounded-lg bg-white/20" />
          <div className="h-2 w-full rounded-lg bg-white/20" />

          <div className="bg-border h-9 w-28 rounded-lg" />
        </div>
      </div>
    </div>
  )
}
