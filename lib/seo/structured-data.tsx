import { absoluteUrl } from '@/lib/utils/absoluteUrl'
import type { Profile } from '@/lib/types/database'

// ─── Organization Schema (Homepage) ──────────────────────────────────────────

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'UCCI - UNITED CHAMBER OF COMMERCE & INDUSTRIES',
    alternateName: 'UCCI',
    slogan: 'Connect | Collaborate | Grow',
    url: absoluteUrl('/'),
    logo: absoluteUrl('/images/ucci-logo.png'),
    email: 'ucci0121@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office No.202, Second Floor, Commercial Building 4, HM Royal Society, Opp. Ranka Jewellers, Talab, Kondhwa',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411048',
      addressCountry: 'IN',
    },
    telephone: '+91-86002 41900',
    description:
      'UCCI — UNITED CHAMBER OF COMMERCE & INDUSTRIES — Connect | Collaborate | Grow. A trusted, collaborative business networking organization connecting professionals through exclusive referral chapters in Pune and PCMC.',
    sameAs: ['https://instagram.com/ucci_muslimbizclub'],
  }
}

// ─── WebSite Schema (Homepage) ────────────────────────────────────────────────

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'UCCI Platform',
    url: absoluteUrl('/'),
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${absoluteUrl('/')}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

// ─── LocalBusiness/ProfessionalService Schema (Member Profile) ────────────────

type MemberSchemaProfile = Omit<Profile, 'chapter' | 'category'> & {
  chapter?: { name: string; slug?: string; area?: { name: string; slug?: string } | null } | undefined
  category?: { name: string } | undefined
}

export function buildMemberSchema(profile: MemberSchemaProfile) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: profile.business_name ?? profile.full_name,
    description: profile.bio ?? undefined,
    telephone: profile.phone ?? undefined,
    url: profile.website_url ?? absoluteUrl(`/members/${profile.id}`),
    image: profile.logo_url ?? undefined,
    address: profile.business_address
      ? {
          '@type': 'PostalAddress',
          streetAddress: profile.business_address,
          addressLocality: profile.chapter?.name ?? 'Pune',
          addressRegion: profile.chapter?.area?.name ?? 'Maharashtra',
          addressCountry: 'IN',
        }
      : undefined,
    parentOrganization: {
      '@type': 'Organization',
      name: 'UCCI',
      url: absoluteUrl('/'),
    },
    knowsAbout: profile.category?.name ?? undefined,
    areaServed: profile.chapter
      ? `${profile.chapter.name}, ${profile.chapter.area?.name ?? ''}, India`
      : 'India',
  }
}

// ─── JSON-LD Script Injector ──────────────────────────────────────────────────

export function JsonLd({ data }: { data: object | object[] }) {
  const schemas = Array.isArray(data) ? data : [data]
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
