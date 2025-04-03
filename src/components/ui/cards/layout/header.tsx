type CardHeaderBaseProps = {
  title: string
}

type TitleHeaderProps = CardHeaderBaseProps & {
  type: 'title'
  children?: React.ReactNode
}

type ProjectHeaderProps = {
  type: 'project'
  clientName: string
  companyName: string
  projectYear: number
}

type CardHeaderProps = TitleHeaderProps | ProjectHeaderProps

export default function CardHeader(props: CardHeaderProps) {
  switch (props.type) {
    case 'title':
      return <TitleHeader {...props} />
    case 'project':
      return <ProjectHeader {...props} />
    default:
      return null
  }
}

function TitleHeader({ title, children }: TitleHeaderProps) {
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

function ProjectHeader({
  clientName,
  companyName,
  projectYear,
}: ProjectHeaderProps) {
  return (
    <div className="bg-border flex w-full items-center gap-12 rounded-xl p-4">
      <div className="space-y-1 text-white/60">
        <p>Client</p>
        <p>Company</p>
        <p>Year</p>
      </div>
      <div className="space-y-1 font-medium">
        <p>{clientName}</p>
        <p>{companyName}</p>
        <p>{projectYear}</p>
      </div>
    </div>
  )
}
