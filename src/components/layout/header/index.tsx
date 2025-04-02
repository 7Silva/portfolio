'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useMemo } from 'react'
import Button from '@/components/button'
import { House, CircleUser } from 'lucide-react'

const navigationItems = [
  { href: '/', icon: House },
  { href: '/about', icon: CircleUser },
] as const

const NavigationItem = ({
  href,
  icon: Icon,
  isActive,
}: {
  href: string
  icon: typeof House | typeof CircleUser
  isActive: boolean
}) => (
  <li
    className={`cursor-pointer transition-all duration-500 ${
      isActive ? 'text-white' : 'text-[#585858] hover:text-white'
    }`}
  >
    <Link href={href} prefetch={false}>
      <Icon size={24} />
    </Link>
  </li>
)

export default function Header() {
  const pathname = usePathname()

  const navItems = useMemo(
    () =>
      navigationItems.map(({ href, icon }) => ({
        href,
        icon,
        isActive: pathname === href,
      })),
    [pathname],
  )

  return (
    <header className="bg-card border-border flex w-full items-center justify-between rounded-2xl border px-6 py-4 drop-shadow-lg">
      <ul className="flex items-center gap-7">
        {navItems.map(({ href, icon, isActive }) => (
          <NavigationItem
            key={href}
            href={href}
            icon={icon}
            isActive={isActive}
          />
        ))}
      </ul>

      <div>
        <Button />
      </div>
    </header>
  )
}
