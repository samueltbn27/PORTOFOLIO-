import { createElement, type ComponentType } from 'react'
import {
  BarChart3,
  Brain,
  Clock,
  Cpu,
  Database,
  Eye,
  FileSpreadsheet,
  MessageSquare,
  Search,
  Server,
  Users
} from 'lucide-react'
import {
  SiBootstrap,
  SiCplusplus,
  SiCss,
  SiDotnet,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJupyter,
  SiLaravel,
  SiMysql,
  SiNodedotjs,
  SiOpencv,
  SiPython,
  SiRaspberrypi,
  SiReact,
  SiUnity,
  SiVuedotjs
} from 'react-icons/si'

export type AppIcon = ComponentType<{ size?: number | string; className?: string }>

const HtmlIcon: AppIcon = ({ size = 16, className }) =>
  createElement('img', {
    src: '/icons/html.png',
    alt: 'HTML5',
    width: size,
    height: size,
    className,
    style: { objectFit: 'contain' },
    loading: 'lazy'
  })

export interface Skill {
  name: string
  icon: AppIcon
}

export interface SkillCategory {
  id: string
  label: string
  icon: AppIcon
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Programming Languages',
    icon: SiPython,
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'SQL', icon: Database },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'C++', icon: SiCplusplus },
      { name: 'C#', icon: SiDotnet }
    ]
  },
  {
    id: 'web',
    label: 'Web Development',
    icon: SiHtml5,
    skills: [
      { name: 'HTML', icon: HtmlIcon },
      { name: 'CSS', icon: SiCss },
      { name: 'Laravel', icon: SiLaravel },
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'React', icon: SiReact },
      { name: 'Vue', icon: SiVuedotjs },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'REST API', icon: Server },
      { name: 'MySQL', icon: SiMysql }
    ]
  },
  {
    id: 'data',
    label: 'Data Analysis',
    icon: SiJupyter,
    skills: [
      { name: 'Microsoft Excel', icon: FileSpreadsheet },
      { name: 'Google Sheets', icon: FileSpreadsheet },
      { name: 'SQL', icon: Database },
      { name: 'Python', icon: SiPython },
      { name: 'Power BI', icon: BarChart3 },
      { name: 'Data Visualization', icon: BarChart3 }
    ]
  },
  {
    id: 'tools',
    label: 'Tools & Technologies',
    icon: SiGit,
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Figma', icon: SiFigma },
      { name: 'Microsoft Word', icon: FileSpreadsheet },
      { name: 'OpenCV', icon: SiOpencv },
      { name: 'Unity', icon: SiUnity },
      { name: 'Raspberry Pi', icon: SiRaspberrypi },
      { name: 'Adobe Animate', icon: Eye },
      { name: 'IoT & Microcontrollers', icon: Cpu }
    ]
  },
  {
    id: 'softskills',
    label: 'Soft Skills',
    icon: Users,
    skills: [
      { name: 'Communication', icon: MessageSquare },
      { name: 'Teamwork', icon: Users },
      { name: 'Time Management', icon: Clock },
      { name: 'Critical Thinking', icon: Brain },
      { name: 'Problem Solving', icon: Search }
    ]
  }
]
