import Link from 'next/link'

import { Linkedin, Instagram } from 'lucide-react'

export default function CardFooter({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <div className="flex w-full flex-col gap-10 pt-10">
      {children}

      <div className="bg-border flex w-full flex-col items-center justify-center gap-3.5 rounded-xl p-7">
        <div className="flex gap-3">
          <Link
            href="https://www.linkedin.com/in/daniel-texeira-silva-498620233/"
            className="bg-card hover:bg-card/70 cursor-pointer rounded-full p-3 transition-all duration-500"
          >
            <Linkedin size={20} className="text-white/70" />
          </Link>
          <Link
            href="https://www.instagram.com/7silvasz/"
            className="bg-card hover:bg-card/70 cursor-pointer rounded-full p-3 transition-all duration-500"
          >
            <Instagram size={20} className="text-white/70" />
          </Link>
        </div>

        <p className="font-urbanist text-sm tracking-wide text-white/70">
          © 2025 Daniel T. Silva. All rights reserved.
        </p>
        <p className="font-urbanist text-center text-xs tracking-wide text-white/70">
          Check out the source code for this site on my GitHub:{' '}
          <Link
            href="https://github.com/7silva/portfolio"
            className="underline transition-all duration-500 hover:text-white/85"
          >
            7silva/portfolio
          </Link>
        </p>
      </div>
    </div>
  )
}
