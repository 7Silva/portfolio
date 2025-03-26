export default function BaseCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-card border-border w-full rounded-2xl border px-1.5 pt-6 pb-1.5 drop-shadow-lg">
      {children}
    </div>
  )
}
