import { LucideIcon } from 'lucide-react'

interface MissionCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function MissionCard({ icon: Icon, title, description }: MissionCardProps) {
  return (
    <div className="group p-8 rounded-xl border border-border bg-card hover:border-primary hover:shadow-lg transition-all duration-300">
      {/* Icon */}
      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <Icon size={32} className="text-primary group-hover:text-white transition-colors" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
