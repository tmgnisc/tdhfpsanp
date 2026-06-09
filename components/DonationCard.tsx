import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface DonationCardProps {
  amount: string
  title: string
  items: string[]
}

export default function DonationCard({ amount, title, items }: DonationCardProps) {
  return (
    <div className="relative p-8 rounded-xl border-2 border-border bg-card hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Highlight for featured tier */}
      <div className="absolute -top-4 left-4 right-4 flex justify-center">
        <div className="bg-accent text-white px-4 py-1 rounded-full text-xs font-bold">Popular</div>
      </div>

      {/* Amount */}
      <div className="text-center mb-6 pt-4">
        <div className="text-4xl font-bold text-primary mb-2">{amount}</div>
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm mt-1">Your generous donation</p>
      </div>

      {/* Items List */}
      <ul className="space-y-3 mb-8 flex-grow">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check size={20} className="text-secondary flex-shrink-0 mt-0.5" />
            <span className="text-foreground text-sm">{item}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Button className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-semibold">
        Donate {amount}
      </Button>
    </div>
  )
}
