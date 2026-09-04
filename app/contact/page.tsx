import { buildContactMetadata } from '@/lib/seo/metadata'
import { ContactForm } from '@/components/forms/ContactForm'
import { MapPin, Phone, Clock, Mail, Instagram, MessageCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = buildContactMetadata()

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-navy">
      <div className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-title">Contact <span className="text-gradient-gold">Us</span></h1>
          <p className="section-subtitle">We&apos;d love to hear from you. Reach out to our team.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h2 className="font-display text-2xl font-bold text-brand-white mb-6">Get in Touch</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-brand-champagne font-semibold text-sm mb-1">Office Address</div>
                    <address className="not-italic text-brand-silver leading-relaxed">
                      Office No.202, Second Floor, Commercial Building 4,<br />
                      HM Royal Society, Opp. Ranka Jewellers, Talab,<br />
                      Kondhwa, Pune – 411048
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-brand-champagne font-semibold text-sm mb-1">Phone / WhatsApp</div>
                    <a href="tel:+918600241900" className="text-brand-silver hover:text-brand-gold transition-colors text-lg font-medium">
                      +91-86002 41900 <br />
                    </a>
                    <a
                      href="https://wa.me/918600241900"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-brand-gold text-sm hover:text-brand-champagne mt-1"
                    >
                      <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-brand-champagne font-semibold text-sm mb-1">Email</div>
                    <a href="mailto:ucci0121@gmail.com" className="text-brand-silver hover:text-brand-gold transition-colors font-medium">
                      ucci0121@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-brand-champagne font-semibold text-sm mb-1">Instagram</div>
                    <a
                      href="https://instagram.com/ucci_muslimbizclub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-silver hover:text-brand-gold transition-colors font-medium"
                    >
                      @ucci_muslimbizclub
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-brand-champagne font-semibold text-sm mb-1">Business Hours</div>
                    <div className="text-brand-silver">
                      <div>Monday – Saturday: 10:00 AM – 6:00 PM</div>
                      <div className="text-brand-silver/60 text-sm">Sunday: Closed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="glass-card p-4 aspect-video flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-brand-gold/40 mx-auto mb-2" />
                <p className="text-brand-silver/60 text-sm">Kondhwa, Pune – 411048</p>
                <a
                  href="https://maps.google.com/?q=HM+Royal+Society+Talab+Kondhwa+Pune+411048"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold text-sm hover:text-brand-champagne mt-2 inline-block"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            <h2 className="font-display text-2xl font-bold text-brand-white mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
