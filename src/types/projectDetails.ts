export interface ProjectButton {
  text: string
  link: string
}

export interface ProjectHeader {
  clientName: string
  companyName: string
  projectYear: number
}

export interface ProjectContent {
  id: number
  title?: string
  header: ProjectHeader
  description: string
  button?: ProjectButton
  image?: string
}

export interface ProjectDetails {
  title: string
  image: string
  content: ProjectContent[]
}
