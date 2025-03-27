import { get } from '@vercel/edge-config'

import CardProject from './card-project'

import { Project } from '@/types/projects'

export default async function Projects() {
  const projects = await get<Project[]>('projects')

  return (
    <div className="bg-border flex w-full flex-col gap-5 rounded-2xl px-6 py-4 max-sm:px-3">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-purple-500/80 shadow shadow-purple-500/80" />
          <h1 className="font-nunito text-lg font-semibold text-white/70">
            Projects
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-3 py-2">
        {projects?.map((project, index) => (
          <CardProject
            key={index}
            link={project.link}
            title={project.name}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  )
}
