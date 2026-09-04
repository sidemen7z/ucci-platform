// Chapter locality coverage — source: Form 1 Core Requirements & Content (Sept 2026 response).
// Used wherever chapter data is displayed (chapter pages, homepage, join form hints).

export interface ChapterLocality {
  areaSlug: string
  areaName: string
  chapterSlug: string
  chapterName: string
  coverage: string
  localities: string[]
}

export const CHAPTER_LOCALITIES: ChapterLocality[] = [
  {
    areaSlug: 'pune',
    areaName: 'Pune',
    chapterSlug: 'east',
    chapterName: 'East',
    coverage: 'Includes localities within Kharadi, Wadgaosheri, Mundhwa, Hadapsar',
    localities: ['Kharadi', 'Wadgaosheri', 'Mundhwa', 'Hadapsar'],
  },
  {
    areaSlug: 'pune',
    areaName: 'Pune',
    chapterSlug: 'west',
    chapterName: 'West',
    coverage: 'Includes localities within Kothrud, Aundh, Baner, Pashan, Bavdhan, Warje',
    localities: ['Kothrud', 'Aundh', 'Baner', 'Pashan', 'Bavdhan', 'Warje'],
  },
  {
    areaSlug: 'pune',
    areaName: 'Pune',
    chapterSlug: 'north',
    chapterName: 'North',
    coverage: 'Includes localities within Viman Nagar, Lohegaon, Dhanori, Vishrantwadi, Wagholi',
    localities: ['Viman Nagar', 'Lohegaon', 'Dhanori', 'Vishrantwadi', 'Wagholi'],
  },
  {
    areaSlug: 'pune',
    areaName: 'Pune',
    chapterSlug: 'south',
    chapterName: 'South',
    coverage: 'Includes localities within Kondhwa, Mohammadwadi, Undri, Pisoli, Wanwadi, Katraj, Bibvewadi, Handewadi',
    localities: ['Kondhwa', 'Mohammadwadi', 'Undri', 'Pisoli', 'Wanwadi', 'Katraj', 'Bibvewadi', 'Handewadi'],
  },
  {
    areaSlug: 'pune',
    areaName: 'Pune',
    chapterSlug: 'central',
    chapterName: 'Central',
    coverage: 'Includes localities within Peth areas, Camp, Swargate, Koregaon Park, Ghorpadi',
    localities: ['Peth areas', 'Camp', 'Swargate', 'Koregaon Park', 'Ghorpadi'],
  },
  {
    areaSlug: 'pcmc',
    areaName: 'PCMC',
    chapterSlug: 'east',
    chapterName: 'East',
    coverage: 'Includes localities within Chikali, Bhosari, Alandi, Moshi',
    localities: ['Chikali', 'Bhosari', 'Alandi', 'Moshi'],
  },
  {
    areaSlug: 'pcmc',
    areaName: 'PCMC',
    chapterSlug: 'west',
    chapterName: 'West',
    coverage: 'Includes localities within Wakad, Hinjewadi, Ravet, Nigdi, Dehu Road',
    localities: ['Wakad', 'Hinjewadi', 'Ravet', 'Nigdi', 'Dehu Road'],
  },
]

export function getChapterLocality(areaSlug: string, chapterSlug: string): ChapterLocality | undefined {
  return CHAPTER_LOCALITIES.find(
    c => c.areaSlug.toLowerCase() === areaSlug.toLowerCase() && c.chapterSlug.toLowerCase() === chapterSlug.toLowerCase()
  )
}
