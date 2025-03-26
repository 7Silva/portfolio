import Link from 'next/link'
import Image from 'next/image'

import BaseCard from '@/components/cards/base'
import CardHeader from '@/components/cards/header'
import Header from '@/components/header'
import Projects from '@/components/cards/projects'
import CardFooter from '@/components/cards/footer'
import Button from '@/components/button'

import memoji from '@/../public/memoji.png'

export default function Home() {
  return (
    <main className="mx-auto flex max-w-3/6 flex-col gap-5 py-7">
      <Header />

      <section>
        <BaseCard>
          <div className="px-7">
            <CardHeader title="Full stack developer">
              <Link
                href="#"
                className="flex items-center gap-1.5 rounded-lg bg-green-400/15 px-2 py-0.5"
              >
                <div className="h-1.5 w-1.5 animate-ping rounded-full bg-green-400 [animation-duration:1.5s]" />

                <p className="font-urbanist text-sm font-semibold tracking-wide text-green-400/70 uppercase">
                  Available for work
                </p>
              </Link>
            </CardHeader>

            <div className="flex justify-between gap-5 py-9">
              <div className="flex flex-col gap-1">
                <h1 className="font-nunito text-4xl font-bold text-white">
                  I&apos;m Daniel T. Silva
                </h1>
                <p className="font-urbanist max-w-2xl tracking-wider text-white/70">
                  I&apos;am a Full Stack programmer, working in the field for
                  about 5 years. I have experience with technologies like React,
                  Next.js, Java, Golang, and others.
                </p>

                <div className="mt-5 flex gap-2">
                  <Button />
                </div>
              </div>

              <div className="full">
                <div className="bg-border flex items-center justify-center rounded-full border border-white/20 p-2">
                  <Image
                    src={memoji}
                    alt="Daniel T. Silva"
                    width={300}
                    height={300}
                    className="w-64 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <Projects />

          <CardFooter />
        </BaseCard>
      </section>
    </main>
  )
}
