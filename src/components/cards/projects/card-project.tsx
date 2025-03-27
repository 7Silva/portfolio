import Image from 'next/image'
import Link from 'next/link'

import { ChevronRight } from 'lucide-react'

interface CardProjectProps {
  title: string
  description: string
  image: string
  link: string
}

export default function CardProject({
  title,
  description,
  image,
  link,
}: CardProjectProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group/projects w-full rounded-xl border border-[#424242] bg-[#373737] px-4 py-5 drop-shadow-md hover:drop-shadow-lg"
    >
      <div className="flex w-full items-center sm:justify-between">
        <div className="flex gap-5 max-sm:flex-col max-sm:gap-3">
          <div className="bg-border h-14 w-14 rounded-full p-1 drop-shadow-md max-sm:h-12 max-sm:w-12">
            <Image src={image} alt="Java" width={56} height={56} />
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-nunito text-xl font-bold max-sm:text-base">
              {title}
            </h3>
            <p className="font-urbanist max-w-[260px] truncate text-white/70 max-sm:text-sm sm:max-w-96">
              {description}
            </p>
          </div>
        </div>

        <ChevronRight
          size={24}
          className="text-white/60 transition-all duration-500 group-hover/projects:translate-x-1 group-hover/projects:text-white max-sm:hidden"
        />
      </div>
    </Link>
  )
}
