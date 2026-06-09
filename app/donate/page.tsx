'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageBanner from '@/components/PageBanner'
import { bankDetails } from '@/lib/mockData'
import { Zap, TrendingUp, Heart, Eye, Building2 } from 'lucide-react'
import Image from 'next/image'

const faqItems = [
  {
    question: 'Where does my donation go?',
    answer:
      'Every donation is tracked and directly supports our programs. We maintain complete transparency about how funds are used across education, healthcare, women empowerment, and elderly care initiatives.',
  },
  {
    question: 'Can I donate monthly?',
    answer:
      'Yes! Monthly donations help us plan and expand our programs sustainably. Set up a recurring donation to become a sustaining partner in our mission.',
  },
  {
    question: 'Is my donation tax-deductible?',
    answer:
      'We work with registered charitable organizations to ensure tax benefits where applicable. Contact us for specific information based on your location.',
  },
  {
    question: 'How can I track impact?',
    answer:
      'Donors receive regular updates about program outcomes and the direct impact of their contributions. Major donors receive personalized impact reports.',
  },
  {
    question: 'Are there other ways to contribute?',
    answer:
      'Beyond financial donations, you can volunteer with us, become an advocate, partner with your organization, or donate goods and services. Contact us to explore options.',
  },
]

export default function Donate() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Banner */}
      <PageBanner
        title="Help Build a Better Future"
        subtitle="Make a Donation"
        description="Your generous contribution directly supports vulnerable communities and creates lasting change"
        backgroundImage="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&h=600&fit=crop"
      />

      {/* Impact Section */}
      <section className="py-16 sm:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Your Impact Matters</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Direct aid means your donation goes directly to help people in need. See exactly what your contribution can achieve.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg border border-border">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 mb-4">
                <Heart size={24} className="text-secondary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">$25</h4>
              <p className="text-muted-foreground text-sm">Feeds a child for one month</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-border">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4">
                <TrendingUp size={24} className="text-accent" />
              </div>
              <h4 className="font-bold text-foreground mb-2">$50</h4>
              <p className="text-muted-foreground text-sm">School supplies for a semester</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-border">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <Zap size={24} className="text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">$100</h4>
              <p className="text-muted-foreground text-sm">One year education support</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-border">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 mb-4">
                <Eye size={24} className="text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">$250</h4>
              <p className="text-muted-foreground text-sm">Build a learning center</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Transfer */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Donate via Bank Transfer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Scan the QR code or use the bank details below to make your contribution directly.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-xl border-2 border-border p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Image
                  src={bankDetails.qrImage}
                  alt="Bank QR Code"
                  width={280}
                  height={280}
                  className="rounded-lg border border-border"
                />
              </div>
              <div className="flex-1 w-full space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <Building2 size={20} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Bank Details</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4 border-b border-border pb-2">
                    <span className="text-muted-foreground">Bank Name</span>
                    <span className="font-semibold text-foreground text-right">{bankDetails.bankName}</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-border pb-2">
                    <span className="text-muted-foreground">Account Name</span>
                    <span className="font-semibold text-foreground text-right">{bankDetails.accountName}</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-border pb-2">
                    <span className="text-muted-foreground">Account Number</span>
                    <span className="font-semibold text-foreground text-right">{bankDetails.accountNumber}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">Branch</span>
                    <span className="font-semibold text-foreground text-right">{bankDetails.branch}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-muted/30 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full p-6 text-left hover:bg-muted/50 transition-colors flex items-center justify-between"
                >
                  <h3 className="font-semibold text-foreground pr-4">{item.question}</h3>
                  <span className={`text-2xl text-primary flex-shrink-0 transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </button>
                {expandedFAQ === index && <div className="px-6 pb-6 text-muted-foreground border-t border-border">{item.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
