/**
 * PROJECTS — SAMUEL TAMBUNAN
 * =====================================================
 * Proyek asli. URL & gambar dikosongkan sampai disediakan.
 * Jika `liveUrl`/`repoUrl` kosong, tombol terkait disembunyikan.
 */
export type ProjectCategory = 'web' | 'data' | 'iot' | 'vision' | 'game'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  description: string
  longDescription: string
  tech: string[]
  liveUrl: string
  repoUrl: string
  year: string
  color: string
  /** Optional screenshot path (place image in /public). Falls back to placeholder when empty. */
  image?: string
  highlights: string[]
}

export const projectCategories: { id: ProjectCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Development' },
  { id: 'data', label: 'Data Analysis' },
  { id: 'iot', label: 'IoT & Robotics' },
  { id: 'vision', label: 'AI / Computer Vision' },
  { id: 'game', label: 'Game Development' }
]

export const projects: Project[] = [
  {
    id: 'smart-trash-bin',
    title: 'Smart Trash Bin',
    category: 'iot',
    description: 'Sensor-based smart trash bin prototype for waste capacity monitoring.',
    longDescription:
      'Developed a smart trash bin prototype using sensor-based automation to monitor waste capacity and control the opening and closing mechanism.',
    tech: ['IoT', 'Ultrasonic Sensor', 'Microcontroller'],
    liveUrl: '',
    repoUrl: '',
    year: '',
    color: 'from-emerald-500 to-teal-600',
    highlights: ['Waste capacity monitoring', 'Automated open/close mechanism']
  },
  {
    id: 'travel-agent',
    title: 'Travel Agent Website',
    category: 'web',
    description: 'Web-based travel booking platform with destination and package management.',
    longDescription:
      'Developed a web-based travel booking platform with destination management, travel packages, and booking transaction features.',
    tech: ['Laravel', 'MySQL', 'Bootstrap'],
    liveUrl: '',
    repoUrl: '',
    year: '',
    color: 'from-sky-500 to-blue-600',
    highlights: ['Destination management', 'Travel packages', 'Booking transactions']
  },
  {
    id: 'game-topup',
    title: 'Game Top Up Website',
    category: 'web',
    description: 'Full-stack game voucher and top-up platform with REST API integration.',
    longDescription:
      'Built a full-stack game voucher and top-up platform featuring product management, transactions, and payment method integration through REST APIs.',
    tech: ['React', 'Vite', 'Node.js', 'Express.js', 'MySQL'],
    liveUrl: '',
    repoUrl: '',
    year: '',
    color: 'from-violet-500 to-fuchsia-600',
    highlights: ['Product management', 'Transactions', 'Payment method integration']
  },
  {
    id: 'drowsiness-detection',
    title: 'Driver Drowsiness Detection',
    category: 'vision',
    description: 'Real-time drowsiness detection by analyzing facial and eye conditions.',
    longDescription:
      'Developed a real-time driver drowsiness detection system by analyzing facial and eye conditions to provide early warnings.',
    tech: ['Python', 'OpenCV', 'Computer Vision'],
    liveUrl: '',
    repoUrl: '',
    year: '',
    color: 'from-orange-500 to-red-600',
    highlights: ['Real-time analysis', 'Early warning alerts']
  },
  {
    id: 'hajj-simulator',
    title: 'Hajj Simulator',
    category: 'game',
    description: 'Educational 3D simulation game about Hajj.',
    longDescription:
      'Developed an educational 3D simulation game about Hajj, featuring interactive gameplay and virtual environments.',
    tech: ['Unity', 'C#'],
    liveUrl: '',
    repoUrl: '',
    year: '',
    color: 'from-amber-500 to-orange-600',
    highlights: ['3D environment', 'Interactive gameplay']
  },
  {
    id: 'krtmi-robotics',
    title: 'KRTMI Robotics Project',
    category: 'iot',
    description: 'Sensor-based robotic prototype with control programming and hardware integration.',
    longDescription:
      'Collaborated on the development of a sensor-based robotic prototype, including control programming, hardware integration, and system testing.',
    tech: ['C++', 'Microcontrollers', 'Sensors'],
    liveUrl: '',
    repoUrl: '',
    year: '',
    color: 'from-cyan-500 to-sky-600',
    highlights: ['Control programming', 'Hardware integration', 'System testing']
  },
  {
    id: 'sales-dashboard',
    title: 'Sales Data Analysis & Business Dashboard',
    category: 'data',
    description: 'Sales data analysis with an interactive Power BI dashboard.',
    longDescription:
      'Analyzed sales data to identify business trends and developed an interactive Power BI dashboard to visualize key performance indicators and support decision-making.',
    tech: ['Microsoft Excel', 'Google Sheets', 'Power BI'],
    liveUrl: '',
    repoUrl: '',
    year: '',
    color: 'from-indigo-500 to-blue-600',
    highlights: ['Trend identification', 'KPI dashboard', 'Decision support']
  },
  {
    id: 'heart-rate-monitoring',
    title: 'Web-Based Heart Rate Monitoring System',
    category: 'iot',
    description: 'Web-based heart rate monitoring with Raspberry Pi and sensors.',
    longDescription:
      'Developed a web-based heart rate monitoring system integrated with Raspberry Pi and sensors to display real-time measurements.',
    tech: ['Raspberry Pi 4', 'Heart Rate Sensor', 'Python', 'Flask'],
    liveUrl: '',
    repoUrl: '',
    year: '',
    color: 'from-pink-500 to-rose-600',
    highlights: ['Real-time measurements', 'Raspberry Pi integration']
  },
  {
    id: 'smart-home-iot',
    title: 'Smart Home IoT',
    category: 'iot',
    description: 'Smart home prototype for monitoring and controlling electronic devices.',
    longDescription:
      'Developed a smart home prototype to monitor and control electronic devices through sensor integration and a remote-control interface.',
    tech: ['Microcontrollers', 'IoT', 'Sensors', 'Control Application'],
    liveUrl: '',
    repoUrl: '',
    year: '',
    color: 'from-blue-500 to-indigo-600',
    highlights: ['Device monitoring', 'Remote control interface']
  },
  {
    id: 'indonesian-heroes',
    title: 'Indonesian Heroes Educational Game',
    category: 'game',
    description: 'Interactive educational game introducing Indonesian national heroes.',
    longDescription:
      'Created an interactive educational game introducing Indonesian national heroes through animated content and interactive gameplay.',
    tech: ['Adobe Animate', 'JavaScript'],
    liveUrl: '',
    repoUrl: '',
    year: '',
    color: 'from-red-500 to-rose-600',
    highlights: ['Animated content', 'Interactive gameplay']
  }
]
