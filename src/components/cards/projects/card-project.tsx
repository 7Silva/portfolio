import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { ChevronRight } from 'lucide-react'

interface CardProjectProps {
  title: string
  description: string
  image: string
}

export default function CardProject({
  title,
  description,
  image,
}: CardProjectProps) {
  return (
    <Link
      href="#"
      className="group/projects w-full rounded-xl border border-[#424242] bg-[#373737] px-4 py-5 drop-shadow-md hover:drop-shadow-lg"
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-5">
          <div className="bg-border h-14 w-14 rounded-full p-1 drop-shadow-md">
            <Image src={image} alt="Java" width={56} height={56} />
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-nunito text-xl font-bold">{title}</h3>
            <p className="font-urbanist max-w-96 truncate text-white/70">
              {description}
            </p>
          </div>
        </div>

        <ChevronRight
          size={24}
          className="text-white/60 transition-all duration-500 group-hover/projects:translate-x-1 group-hover/projects:text-white"
        />
      </div>
    </Link>
  )
}
