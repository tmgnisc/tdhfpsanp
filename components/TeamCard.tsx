import Image from 'next/image'
import { Mail, Share2, MessageSquare } from 'lucide-react'

interface TeamCardProps {
  name: string
  role: string
  bio: string
  image: string
}

export default function TeamCard({ name, role, bio, image }: TeamCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden bg-muted">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content - Positioned at bottom with hover effect */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-accent font-semibold text-sm mb-3">{role}</p>
        <p className="text-white/80 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-3">
          {bio}
        </p>

        {/* Social Links - Hidden by default, shown on hover */}
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 bg-white/20 hover:bg-primary rounded-lg transition-colors text-white" title="Email">
            <Mail size={16} />
          </button>
          <button className="p-2 bg-white/20 hover:bg-primary rounded-lg transition-colors text-white" title="LinkedIn">
            <Share2 size={16} />
          </button>
          <button className="p-2 bg-white/20 hover:bg-primary rounded-lg transition-colors text-white" title="Twitter">
            <MessageSquare size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
