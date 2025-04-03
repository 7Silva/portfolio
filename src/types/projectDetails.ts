export interface ProjectButton {
  text: string
  link: string
}

export interface ProjectContent {
  id: number
  title?: string
  description: string
  button?: ProjectButton
  image?: string
}

export interface ProjectDetails {
  title: string
  image: string
  content: ProjectContent[]
}
