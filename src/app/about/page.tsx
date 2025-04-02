import Image from 'next/image'

import CardFooter from '@/components/cards/footer'
import CardHeader from '@/components/cards/header'
import BaseCard from '@/components/cards/base'
import Header from '@/components/header'
import Button from '@/components/button'

import aboutImage from '@/../public/about-image.jpg'

export default function AboutPage() {
  return (
    <main className="mx-auto flex max-w-screen flex-col gap-5 px-3 py-7 max-sm:gap-3 max-sm:px-2 max-sm:py-3 lg:max-w-4/6 xl:max-w-3/6">
      <Header />

      <section>
        <BaseCard>
          <div className="px-7 max-sm:px-2">
            <CardHeader title="About" />

            <div className="py-9">
              <div className="flex flex-col gap-3">
                <h1 className="font-nunito text-4xl font-bold text-white max-sm:text-3xl">
                  That&apos;s me, Daniel
                </h1>
                <p className="font-urbanist max-w-2xl tracking-widest hyphens-auto text-white/85">
                  I&apos;m a Full Stack developer with five years of experience
                  in the technology field. Throughout my career, I have gained
                  expertise in various languages and frameworks, including React
                  Native, React, Node.js, TypeScript, Python, Golang, Java, and
                  C#. Currently, I am focusing on deepening my specialization in
                  Java, Golang, and ReactJS—technologies widely recognized for
                  their robustness and scalability. I have participated in
                  challenging projects where I was responsible for tasks such as
                  configuring servers on Oracle Cloud, integrating Cloudflare
                  for optimization and security, developing front-end interfaces
                  with React and Next.js, and building microservices in Java
                  using the Spring Boot framework, renowned for its efficiency
                  in distributed architectures. My passion for systems has led
                  me to explore Linux servers extensively and implement
                  containerized solutions with Docker, a key tool for
                  modernizing applications.
                </p>

                <div className="rounded-2xl border border-[#424242] bg-[#373737] p-3 drop-shadow-lg">
                  <Image
                    src={aboutImage}
                    alt="Daniel T. Silva"
                    className="rounded-2xl"
                    width={1000}
                    height={900}
                  />
                </div>

                <h2 className="font-nunito mt-4 text-4xl font-bold text-white max-sm:text-3xl">
                  More about me
                </h2>

                <p className="font-urbanist max-w-2xl tracking-widest hyphens-auto text-white/85">
                  At present, I am enhancing my skills at Rocketseat,
                  specializing in Java and DevOps—an area that combines
                  development and operations to ensure more reliable and
                  efficient systems. Additionally, I am studying English, though
                  my current level is basic, with the goal of improving my
                  communication skills and accessing international technical
                  resources.
                </p>
                <p className="font-urbanist max-w-2xl tracking-widest hyphens-auto text-white/85">
                  Throughout my project experience, I have also developed
                  proficiency with databases. I am most familiar with MySQL,
                  widely used for its performance in relational applications,
                  MongoDB, ideal for scalable NoSQL solutions, and in-memory
                  databases, which excel in high-demand scenarios due to their
                  speed.
                </p>
              </div>
            </div>
          </div>

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
