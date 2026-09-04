'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface BenefitPoint {
  id: number
  title: string
  description: string
  flyerImage: string
  hdImage: string
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element
}

const BENEFIT_POINTS: BenefitPoint[] = [
  {
    id: 1,
    title: 'Business Networking',
    description:
      'Access curated monthly meetings and one-on-one introductions tailored for senior professionals.',
    flyerImage: '/why-join/flyer/business-networking.png',
    hdImage: '/why-join/hd/business-networking.jpg',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Quality B2B Referrals',
    description:
      'Referral vetting ensures leads are relevant, reducing time-to-close and improving margins.',
    flyerImage: '/why-join/flyer/b2b-referrals.png',
    hdImage: '/why-join/hd/b2b-referrals.jpg',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m11 17 2 2a1 1 0 0 0 1.42 0l4.58-4.59a1 1 0 0 0 0-1.41l-2-2" />
        <path d="m13 7-2-2a1 1 0 0 0-1.42 0L5 9.59a1 1 0 0 0 0 1.41l2 2" />
        <path d="M2 13v6a2 2 0 0 0 2 2h4" />
        <path d="M18 3h4a2 2 0 0 1 2 2v6" />
        <path d="M7 11.5 12.5 6" />
        <path d="m17 12.5-5.5 5.5" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Brand Promotion',
    description:
      'Spotlight opportunities across meetings, digital channels and event pipelines.',
    flyerImage: '/why-join/flyer/brand-promotion.png',
    hdImage: '/why-join/hd/brand-promotion.jpg',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m3 11 18-5v12L3 14v-3z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        <path d="M21 11v2" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Business Collaborations',
    description:
      'Find partners for joint ventures, supply chains and cross-promotions.',
    flyerImage: '/why-join/flyer/business-collaborations.png',
    hdImage: '/why-join/hd/business-collaborations.jpg',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Leadership Development',
    description:
      'Executive coaching, peer mentorship and visibility-building roles.',
    flyerImage: '/why-join/flyer/leadership-development.png',
    hdImage: '/why-join/hd/leadership-development.jpg',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Training & Workshops',
    description:
      'Practical workshops: sales, digital marketing, compliance, and export readiness.',
    flyerImage: '/why-join/flyer/training-workshops.png',
    hdImage: '/why-join/hd/training-workshops.jpg',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="m9 9 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 7,
    title: 'Digital Marketing Support',
    description:
      'Promotional campaigns and spotlight features to amplify your reach.',
    flyerImage: '/why-join/flyer/digital-marketing.png',
    hdImage: '/why-join/hd/digital-marketing.jpg',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
        <path d="M7 13v-3" />
        <path d="M12 13V7" />
        <path d="M17 13v-5" />
      </svg>
    ),
  },
  {
    id: 8,
    title: 'Website Listing',
    description:
      'Member directory listing that drives discovery among businesses and buyers.',
    flyerImage: '/why-join/flyer/website-listing.png',
    hdImage: '/why-join/hd/website-listing.jpg',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: 9,
    title: 'Government Support',
    description:
      'Access to policy forums, compliance guidance and local government liaisons.',
    flyerImage: '/why-join/flyer/government-support.png',
    hdImage: '/why-join/hd/government-support.jpg',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M2 20h20" />
        <path d="M4 17h16" />
        <path d="M12 2 2 7h20L12 2z" />
        <path d="M6 10v7" />
        <path d="M10 10v7" />
        <path d="M14 10v7" />
        <path d="M18 10v7" />
      </svg>
    ),
  },
  {
    id: 10,
    title: 'Trusted Business Certificate',
    description:
      'Credential that enhances credibility with buyers, partners and regulatory bodies.',
    flyerImage: '/why-join/flyer/trusted-certificate.png',
    hdImage: '/why-join/hd/trusted-certificate.jpg',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
]

export default function WhyJoinUCCI() {
  const [useHdImages, setUseHdImages] = useState(false)

  return (
    <section 
      id="why-join" 
      className="relative py-16 sm:py-20 bg-brand-sapphire/40 border-y border-brand-gold/15 overflow-hidden scroll-mt-24"
      aria-labelledby="why-join-heading"
    >
      {/* Decorative Ornate Corner Filigree (Top-Left) */}
      <div className="absolute -top-6 -left-6 w-40 h-40 opacity-20 pointer-events-none text-brand-gold">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="50" cy="50" r="45" />
          <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" />
          <rect x="25" y="25" width="50" height="50" rx="4" />
          <rect x="25" y="25" width="50" height="50" rx="4" transform="rotate(45 50 50)" />
        </svg>
      </div>

      {/* Decorative Ornate Corner Filigree (Bottom-Right) */}
      <div className="absolute -bottom-6 -right-6 w-40 h-40 opacity-20 pointer-events-none text-brand-gold">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="50" cy="50" r="45" />
          <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" />
          <rect x="25" y="25" width="50" height="50" rx="4" />
          <rect x="25" y="25" width="50" height="50" rx="4" transform="rotate(45 50 50)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Title, Ornamental Flourish and UCCI Emblem */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 pb-6 border-b border-brand-gold/20 gap-6">
          <div className="text-center md:text-left flex-1">
            <h2 id="why-join-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-white">
              Why Join <span className="text-gradient-gold">UCCI?</span>
            </h2>
            
            {/* Elegant Golden Flourish / Divider */}
            <div className="flex items-center justify-center md:justify-start gap-3 mt-3">
              <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-brand-gold to-brand-gold/60" />
              <div className="w-2.5 h-2.5 rotate-45 border border-brand-gold bg-brand-gold/30" />
              <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent via-brand-gold to-brand-gold/60" />
            </div>
            
            <p className="text-brand-silver text-sm sm:text-base mt-2 max-w-xl">
              Discover the strategic advantages, verified referrals, and exclusive leadership network powering high-growth Muslim entrepreneurs.
            </p>
          </div>

          {/* UCCI Chamber Crest / Logo & Image Switcher */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Image Mode Switcher */}
            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-brand-navy/80 border border-brand-gold/30 text-xs">
              <button
                type="button"
                onClick={() => setUseHdImages(false)}
                className={`px-2.5 py-1 rounded transition-all ${
                  !useHdImages
                    ? 'bg-brand-gold text-brand-navy font-semibold shadow'
                    : 'text-brand-silver hover:text-brand-gold'
                }`}
              >
                Flyer Authentic
              </button>
              <button
                type="button"
                onClick={() => setUseHdImages(true)}
                className={`px-2.5 py-1 rounded transition-all ${
                  useHdImages
                    ? 'bg-brand-gold text-brand-navy font-semibold shadow'
                    : 'text-brand-silver hover:text-brand-gold'
                }`}
              >
                HD Studio
              </button>
            </div>

            {/* Chamber Branding Badge */}
            <div className="hidden lg:flex items-center gap-3 pl-4 border-l border-brand-gold/20">
              <div className="w-10 h-10 rounded-full border border-brand-gold/40 flex items-center justify-center bg-brand-navy/60 text-brand-gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                  <path d="M12 2L3 7v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-display text-xs font-bold tracking-widest text-brand-gold uppercase">UCCI</div>
                <div className="text-[10px] text-brand-silver/70 tracking-wider">United Chamber of Commerce &amp; Industries</div>
              </div>
            </div>
          </div>
        </div>

        {/* 10 Points Grid: 1 col mobile → 2 sm → 3 lg → 5 xl (5+5), equal-height cards */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 list-none m-0 p-0 items-stretch">
          {BENEFIT_POINTS.map((item) => {
            const IconComponent = item.icon
            const imageSrc = useHdImages ? item.hdImage : item.flyerImage
            const num = String(item.id).padStart(2, '0')

            return (
              <li
                key={item.id}
                className="group relative flex flex-col rounded-2xl bg-gradient-to-b from-[#131d3d] to-[#0a1128] border border-brand-gold/35 hover:border-brand-gold p-1.5 shadow-lg shadow-black/40 hover:shadow-[0_0_25px_rgba(212,175,55,0.22)] hover:-translate-y-1 transition-all duration-300 h-full"
              >
                {/* Card Top Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-brand-navy/90 border border-brand-gold/15">
                  <Image
                    src={imageSrc}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle darkening vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/70 via-transparent to-black/20" />
                  {/* Number badge */}
                  <span
                    aria-hidden="true"
                    className="absolute top-2 left-2 min-w-[2rem] h-8 px-2 rounded-full bg-brand-navy/85 border border-brand-gold/50 text-brand-gold font-display font-bold text-xs flex items-center justify-center backdrop-blur-sm"
                  >
                    {num}
                  </span>
                </div>

                {/* Overlapping Floating Circular Badge */}
                <div className="-mt-6 relative z-10 mx-auto w-12 h-12 rounded-full bg-[#0b132b] border-2 border-brand-gold flex items-center justify-center shadow-lg shadow-black/80 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Card Body with Number, Title and Description */}
                <div className="pt-3 pb-4 px-2 sm:px-3 text-center flex flex-col flex-grow">
                  <span className="sr-only">Benefit {num}: </span>
                  <h3 className="font-display font-bold text-sm sm:text-base text-brand-champagne mb-2 group-hover:text-brand-gold transition-colors leading-snug">
                    <span className="text-brand-gold/70 font-semibold mr-1">{num}.</span> {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-brand-silver/85 leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>

        {/* CTA underneath the grid */}
        <div className="mt-12 text-center">
          <a
            href="/join"
            className="btn-primary inline-flex items-center gap-2 text-sm sm:text-base px-8 py-3.5 shadow-lg shadow-brand-gold/10 hover:shadow-brand-gold/25"
          >
            <span>Apply to Join UCCI Today</span>
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
