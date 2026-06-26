import { Cloud, Container, GitBranch, Monitor } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface SkillCategory {
  id: string
  title: string
  icon: LucideIcon
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'cloud',
    title: 'Cloud Platforms',
    icon: Cloud,
    skills: [
      'AWS (EC2, VPC, S3, EKS, IAM, RDS)',
      'Microsoft Azure',
      'GCP',
    ],
  },
  {
    id: 'container',
    title: 'Container & Automation',
    icon: Container,
    skills: ['Kubernetes', 'Docker', 'Helm Charts', 'Terraform'],
  },
  {
    id: 'pipelines',
    title: 'Pipelines & Delivery',
    icon: GitBranch,
    skills: ['GitHub Actions', 'Jenkins', 'Git'],
  },
  {
    id: 'monitoring',
    title: 'Monitoring & Automation Scripting',
    icon: Monitor,
    skills: [
      'Prometheus',
      'Grafana',
      'AWS CloudWatch',
      'SCOM',
      'SolarWinds',
      'Python',
      'Bash',
      'PowerShell',
      'SQL',
      'PostgreSQL',
      'ServiceNow',
    ],
  },
]
