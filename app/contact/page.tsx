'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageBanner from '@/components/PageBanner'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { organizationInfo } from '@/lib/mockData'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Banner */}
      <PageBanner
        title="Get In Touch With Us"
        subtitle="Contact"
        description="Have questions? We'd love to hear from you. Reach out to us anytime."
        backgroundImage="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&h=600&fit=crop"
      />

      {/* Contact Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>

              {/* Address */}
              <div className="mb-8">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                      <MapPin size={20} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">{organizationInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-8">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-secondary/10">
                      <Phone size={20} className="text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href={`tel:${organizationInfo.phone}`} className="text-primary hover:text-primary/80 transition-colors">
                      {organizationInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10">
                      <Mail size={20} className="text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href={`mailto:${organizationInfo.email}`} className="text-primary hover:text-primary/80 transition-colors">
                      {organizationInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mb-8">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                      <Clock size={20} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
                    <div className="text-muted-foreground text-sm space-y-1">
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: 10:00 AM - 3:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>

              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-6 text-green-800">
                  Thank you for your message! We'll get back to you as soon as possible.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-semibold flex items-center justify-center gap-2">
                  <Send size={18} />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Placeholder */}
      <section className="bg-muted/30 border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Find Us</h2>
          <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-border flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-primary mx-auto mb-4" />
              <p className="text-foreground font-semibold mb-2">Our Office Location</p>
              <p className="text-muted-foreground">{organizationInfo.address}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
