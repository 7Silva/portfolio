'use client'

import { useRouter } from 'next/navigation'

import { Button } from './ui/button'

export default function ButtonE() {
  const router = useRouter()

  return (
    <Button
      onClick={() => router.push('/contact')}
      className="group/btn relative flex cursor-pointer justify-center overflow-hidden"
    >
      <span className="font-urbanist text-center font-semibold text-white transition-all duration-500 group-hover/btn:translate-x-40">
        Contact
      </span>
      <div className="absolute inset-0 z-20 flex -translate-x-40 items-center justify-center transition-all duration-500 group-hover/btn:translate-x-0">
        🚀
      </div>
    </Button>
  )
}
