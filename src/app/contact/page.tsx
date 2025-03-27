import Link from 'next/link'

import BaseCard from '@/components/cards/base'
import CardFooter from '@/components/cards/footer'
import CardHeader from '@/components/cards/header'
import FormComponent from '@/components/form'
import Header from '@/components/header'
import { Toaster } from '@/components/ui/sonner'

export default function ContactPage() {
  return (
    <main className="mx-auto flex max-w-screen flex-col gap-5 px-3 py-7 max-sm:gap-3 max-sm:px-2 max-sm:py-3 lg:max-w-4/6 xl:max-w-3/6">
      <Header />

      <section>
        <BaseCard>
          <div className="px-7">
            <CardHeader title="Hire me">
              <Link
                href="/#"
                className="flex items-center gap-1.5 rounded-lg bg-green-400/15 px-2 py-0.5 max-sm:p-1.5"
              >
                <div className="h-1.5 w-1.5 animate-ping rounded-full bg-green-400 [animation-duration:1.5s]" />

                <p className="font-urbanist text-sm font-semibold tracking-wide text-green-400/70 uppercase max-sm:hidden max-sm:text-xs">
                  Available for work
                </p>
              </Link>
            </CardHeader>

            <div className="flex flex-col gap-3 py-9">
              <h1 className="font-nunito text-3xl font-bold text-white max-sm:text-3xl">
                Development Inquiry
              </h1>
              <p className="font-urbanist max-w-xl tracking-wider text-white/70 max-sm:text-sm">
                Have an idea and need development support? Reach out now!
              </p>

              <FormComponent />
            </div>
          </div>

          <CardFooter />
        </BaseCard>
      </section>

      <Toaster />
    </main>
  )
}
