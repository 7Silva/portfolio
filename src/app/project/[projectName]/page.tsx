// Packages
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import Image from 'next/image'

// Layout
import Header from '@/components/layout/header'

// UI
import BaseCard from '@/components/ui/cards/base'
import CardFooter from '@/components/ui/cards/layout/footer'
import CardHeader from '@/components/ui/cards/layout/header'

// Components
import ButtonContact from '@/components/button'

// Loading
import Loading from './loading'

// Images
import ProjectIcon from '@/components/ui/project-icon'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// Functions
import { getProjectByName } from '@/lib/edge-config'
import { projectSchema } from '@/lib/validation'

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectName: string }>
}) {
  const { projectName } = await params
  const projectNameDecoded = decodeURIComponent(projectName)

  return (
    <main className="mx-auto flex max-w-screen flex-col gap-5 px-3 py-7 max-sm:gap-3 max-sm:px-2 max-sm:py-3 lg:max-w-4/6 xl:max-w-3/6">
      <Header />

      <section>
        <BaseCard>
          <Suspense fallback={<Loading />}>
            <ProjectContent projectName={projectNameDecoded} />
          </Suspense>

          <CardFooter>
            <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
              <h1 className="font-urbanist text-4xl font-semibold tracking-wide max-sm:text-3xl">
                Let&apos;s work together.
              </h1>

              <p className="font-nunito tracking-wide text-white/70 max-sm:text-sm">
                Building scalable solutions and robust systems with cutting-edge
                technology
              </p>

              <div className="flex gap-2">
                <ButtonContact />
              </div>
            </div>
          </CardFooter>
        </BaseCard>
      </section>
    </main>
  )
}

async function ProjectContent({ projectName }: { projectName: string }) {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const projectData = await getProjectByName(projectName)
  const project = projectSchema.safeParse(projectData)

  if (!project.success) {
    notFound()
  }

  return (
    <div className="px-7 max-sm:px-2">
      <CardHeader
        type="project"
        clientName="Daniel T. Silva"
        companyName="Daniel T. Silva"
        projectYear={2025}
      />

      <div className="py-9">
        <div className="flex flex-col gap-5">
          <ProjectIcon image={project.data.image} alt="Java" size="md" />

          <h1 className="font-nunito text-3xl font-bold text-white max-sm:text-2xl">
            {project.data.title}
          </h1>

          {project.data.content.map((item) => (
            <section key={item.id}>
              {item.title && (
                <h2 className="font-nunito pb-2.5 text-2xl font-bold text-white max-sm:text-xl">
                  {item.title}
                </h2>
              )}

              <p className="font-urbanist max-w-2xl pb-4 tracking-widest hyphens-auto text-white/85">
                {item.description}
              </p>

              {item.button && (
                <Link href={item.button.link}>
                  <Button className="mb-5">{item.button.text}</Button>
                </Link>
              )}

              {item.image && (
                <div className="rounded-2xl border border-[#424242] bg-[#373737] p-3 drop-shadow-lg">
                  <Image
                    src={item.image}
                    alt="Daniel T. Silva"
                    className="rounded-2xl"
                    width={1000}
                    height={900}
                  />
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
