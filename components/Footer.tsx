import Link from 'next/link'
import { Mail, Phone, MapPin, Heart, Share2, Share } from 'lucide-react'
import { organizationInfo } from '@/lib/mockData'

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      {/* Newsletter Section */}
      <div className="bg-primary border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-primary-foreground/80">Get news and updates about our programs</p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg text-foreground min-w-0 bg-white"
                required
              />
              <button type="submit" className="bg-accent hover:bg-accent/90 px-6 py-2 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              <div>
                <h4 className="font-bold text-lg">Direct Help</h4>
                <p className="text-sm text-white/70">Foundation</p>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-4">{organizationInfo.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/activities" className="hover:text-white transition-colors">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Donate Links */}
          <div>
            <h4 className="font-bold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <Link href="/donate" className="hover:text-white transition-colors">
                  Make a Donation
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Become a Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Partner With Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Subscribe Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                <span>{organizationInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0 text-accent" />
                <a href={`tel:${organizationInfo.phone}`} className="hover:text-white transition-colors">
                  {organizationInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0 text-accent" />
                <a href={`mailto:${organizationInfo.email}`} className="hover:text-white transition-colors">
                  {organizationInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Social Links */}
          <div className="flex items-center justify-between flex-col sm:flex-row gap-4">
            <p className="text-white/60 text-sm">© 2024 Direct Help Foundation. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors" title="Facebook">
                <Heart size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors" title="Twitter">
                <Share2 size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors" title="Instagram">
                <Share size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors" title="LinkedIn">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
