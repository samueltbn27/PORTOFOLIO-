/**
 * EXPERIENCE & EDUCATION — SAMUEL TAMBUNAN
 * =====================================================
 * Pengalaman organisasi & riwayat pendidikan asli.
 */
export interface ExperienceItem {
  id: string
  role: string
  organization: string
  period: string
  type: string
  description: string[]
}

export const experiences: ExperienceItem[] = [
  {
    id: 'graduation-committee',
    role: 'Graduation Ceremony Committee Member',
    organization: 'Graduation Ceremony Committee',
    period: '2023–2024',
    type: 'Committee',
    description: [
      'Supported graduation event operations, including logistics coordination and technical preparations.',
      'Collaborated with cross-functional teams to help ensure the successful execution of events involving hundreds of graduates and guests.'
    ]
  },
  {
    id: 'entrepreneurship-staff',
    role: 'Entrepreneurship Division Staff',
    organization: 'Himpunan Mahasiswa Informatika Itenas',
    period: '2024–2025',
    type: 'Organization',
    description: [
      'Planned and organized initiatives to encourage entrepreneurship among university students.',
      'Collaborated with team members to execute organizational business activities and entrepreneurial programs.'
    ]
  },
  {
    id: 'company-visit',
    role: 'Company Visit Participant',
    organization: 'Itenas × Agate Academy',
    period: '2025',
    type: 'Training',
    description: [
      'Participated in an industry visit to explore professional workflows, workplace culture, and technology industry practices.'
    ]
  }
]

export interface EducationItem {
  id: string
  school: string
  program: string
  period: string
  location: string
  focus: string[]
  activities: string
  note?: string
}

export const education: EducationItem[] = [
  {
    id: 'itenas',
    school: 'Institut Teknologi Nasional Bandung',
    program: "Bachelor's Degree in Informatics Engineering (In Progress)",
    period: '2023–Present',
    location: 'Bandung, Indonesia',
    focus: ['Software Development', 'Data Analytics', 'Web Programming'],
    activities: 'Active student, involved in academic projects and student organizations.'
  },
  {
    id: 'sma-margahayu',
    school: 'SMA Negeri 1 Margahayu',
    program: 'Mathematics and Natural Sciences (MIPA)',
    period: '2020–2023',
    location: 'Bandung, Indonesia',
    focus: ['Mathematics', 'Natural Sciences'],
    activities: 'Completed senior high school under the MIPA track.',
    note: 'Average Grade: 88.89'
  }
]
