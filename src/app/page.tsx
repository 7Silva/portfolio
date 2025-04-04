// Packages
import Link from 'next/link'
import Image from 'next/image'

// Layout
import Header from '@/components/layout/header'

// UI
import BaseCard from '@/components/ui/cards/base'
import CardHeader from '@/components/ui/cards/layout/header'
import Projects from '@/components/ui/cards/ui/projects'
import CardFooter from '@/components/ui/cards/layout/footer'

// Components
import Button from '@/components/button'

// Images
import memoji from '@/../public/memoji.png'

export default function Home() {
  return (
    <main className="mx-auto flex max-w-screen flex-col gap-5 px-3 py-7 max-sm:gap-3 max-sm:px-2 max-sm:py-3 lg:max-w-4/6 xl:max-w-3/6">
      <Header />

      <section>
        <BaseCard>
          <div className="px-7">
            <CardHeader type="title" title="Full stack developer">
              <Link
                href="/contact"
                className="flex items-center gap-1.5 rounded-lg bg-green-400/15 px-2 py-0.5 max-sm:p-1.5"
              >
                <div className="h-1.5 w-1.5 animate-ping rounded-full bg-green-400 [animation-duration:1.5s]" />

                <p className="font-urbanist text-sm font-semibold tracking-wide text-green-400/70 uppercase max-sm:hidden max-sm:text-xs">
                  Available for work
                </p>
              </Link>
            </CardHeader>

            <div className="flex flex-col items-center gap-5 py-9 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col gap-1 max-sm:order-2 max-sm:items-center max-sm:text-center">
                <h1 className="font-nunito text-4xl font-bold text-white max-sm:text-3xl">
                  I&apos;m Daniel T. Silva
                </h1>
                <p className="font-urbanist max-w-2xl tracking-wider text-white/70 max-sm:text-sm">
                  A Full Stack developer who has been working in the industry
                  for around 5 years. I have experience with technologies such
                  as React, Next.JS, Java, Golang, among others.
                </p>

                <div className="mt-5 flex gap-2">
                  <Button />
                </div>
              </div>

              <div>
                <div className="bg-border flex w-36 items-center justify-center rounded-full border border-white/20 p-2 max-sm:order-1 sm:w-full">
                  <Image
                    src={memoji}
                    alt="Daniel T. Silva"
                    width={300}
                    height={300}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <Projects />

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
                <Button />
              </div>
            </div>
          </CardFooter>
        </BaseCard>
      </section>
    </main>
  )
}
