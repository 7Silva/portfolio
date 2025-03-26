interface CardHeaderProps {
  title: string
  children?: React.ReactNode
}

export default function CardHeader({ title, children }: CardHeaderProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-white/30" />
        <h1 className="font-nunito text-lg font-semibold text-white/70">
          {title}
        </h1>
      </div>

      {children}
    </div>
  )
}
