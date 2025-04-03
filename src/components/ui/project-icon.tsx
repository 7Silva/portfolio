import { cva, VariantProps } from 'class-variance-authority'
import Image from 'next/image'

const iconVariants = cva(
  'bg-border flex items-center justify-center rounded-full p-1 drop-shadow-md',
  {
    variants: {
      size: {
        sm: 'h-14 w-14 max-sm:h-12 max-sm:w-12',
        md: 'h-16 w-16',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  },
)

type ProjectIconProps = {
  image: string
  alt: string
}

export default function ProjectIcon({
  image,
  alt,
  size,
}: VariantProps<typeof iconVariants> & ProjectIconProps) {
  return (
    <div className={iconVariants({ size })}>
      <Image src={image} alt={alt} width={50} height={50} />
    </div>
  )
}
