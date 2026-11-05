/**
 * CERTIFICATIONS — SAMUEL TAMBUNAN
 * =====================================================
 * Sertifikasi asli. `url` dikosongkan sampai link/file diberikan;
 * tombol "View Certificate" disembunyikan selama masih kosong.
 */
export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  topics: string[]
  url: string
}

export const certifications: Certification[] = [
  {
    id: 'data-analyst-bootcamp',
    title: 'Data Analyst Bootcamp — Intermediate',
    issuer: 'Karirnex by PT Ebiz Karisma Internasional',
    date: 'March 2026',
    topics: ['Excel', 'SQL', 'Python', 'Power BI'],
    url: ''
  },
  {
    id: 'data-analyst-competency',
    title: 'Data Analyst Competency Certificate',
    issuer: 'Special Skill Indonesia',
    date: 'March 2026',
    topics: ['Data Analysis'],
    url: ''
  },
  {
    id: 'microsoft-fabric',
    title: 'Implementing Data Science with Microsoft Fabric',
    issuer: 'Dicoding × Microsoft',
    date: 'February 2026',
    topics: ['Microsoft Fabric', 'Data Science'],
    url: ''
  },
  {
    id: 'azure-genai',
    title: 'Building Generative AI Applications with Microsoft Azure',
    issuer: 'Dicoding × Microsoft',
    date: 'February 2026',
    topics: ['Microsoft Azure', 'Generative AI'],
    url: ''
  },
  {
    id: 'python-getting-started',
    title: 'Getting Started with Python Programming',
    issuer: 'Dicoding',
    date: 'February 2026',
    topics: ['Python'],
    url: ''
  },
  {
    id: 'excel-bootcamp',
    title: 'Microsoft Excel Intensive Bootcamp — Intermediate',
    issuer: 'Karirnex by PT Ebiz Karisma Internasional',
    date: 'February 2026',
    topics: ['Microsoft Excel'],
    url: ''
  }
]
