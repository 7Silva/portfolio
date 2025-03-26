import { Button } from '../../ui/button'
import CardProject from './card-project'

// Images
import java from '@/../public/Java-01.svg'

export default function Projects() {
  return (
    <div className="bg-border flex w-full flex-col gap-5 rounded-2xl px-6 py-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-purple-500/80 shadow shadow-purple-500/80" />
          <h1 className="font-nunito text-lg font-semibold text-white/70">
            Projects
          </h1>
        </div>

        <Button>View All</Button>
      </div>

      <div className="flex flex-col gap-3 py-2">
        {new Array(3).fill(0).map((_, index) => (
          <CardProject
            key={index}
            title="Upload Cloudflare R2"
            description="RESTful API for uploading files to Cloudflare R2, built with Spring Boot."
            image={java}
          />
        ))}
      </div>
    </div>
  )
}
