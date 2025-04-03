import { get } from '@vercel/edge-config'
import type { ProjectDetails } from '@/types/projectDetails'

export async function getProjectByName(
  projectName: string,
): Promise<ProjectDetails | null> {
  const projectDetails =
    await get<Record<string, ProjectDetails>>('projectDetails')

  if (!projectDetails) {
    return null
  }

  const normalizedProjectName = projectName.toLowerCase()

  const matchedProjectKey = Object.keys(projectDetails).find(
    (key) => key.toLowerCase() === normalizedProjectName,
  )

  return matchedProjectKey ? projectDetails[matchedProjectKey] : null
}
