'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { organizationInfo } from '@/lib/mockData'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Activities', href: '/activities' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src={organizationInfo.logo}
              alt={organizationInfo.name}
              width={56}
              height={56}
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button and Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/donate" className="hidden sm:block">
              <Button className="bg-primary hover:bg-primary/90">Donate Now</Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-lg text-foreground hover:bg-primary hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/donate" className="block pt-2">
              <Button className="w-full bg-primary hover:bg-primary/90">Donate Now</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
