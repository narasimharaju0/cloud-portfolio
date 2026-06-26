import { LINKS } from './constants'

export interface Project {
  id: string
  title: string
  subtitle: string
  story: string
  tags: string[]
  repoUrl?: string
  highlight?: boolean
}

export const projects: Project[] = [
  {
    id: 'omnikube',
    title: 'OmniKube FinOps SaaS Platform Engine',
    subtitle: 'Kubernetes Capacity Intelligence · Flask · Stripe · GitHub Actions',
    story:
      'High-performance FinOps container-tracking daemon engine built using Flask to track and isolate idle Kubernetes capacities. Features integrated Stripe Webhook API signature verification for secure multi-tenant isolation, and an automated multi-stage GitHub Actions CI/CD workflow with Docker Buildx using explicit PYTHONPATH context injection.',
    tags: ['Flask', 'Kubernetes', 'Stripe', 'Docker Buildx', 'GitHub Actions', 'FinOps'],
    repoUrl: LINKS.omnikube,
    highlight: true,
  },
  {
    id: 'frontica',
    title: 'Frontica Project',
    subtitle: 'Aker Solutions · Oslo, Norway',
    story:
      'Managing business-critical data center network topologies across Cisco Catalyst and Nexus structures, orchestrating automated cloud provisioning scripts via PowerShell, and preserving a strict 99.9% application uptime ceiling.',
    tags: ['Cisco Catalyst', 'Nexus', 'PowerShell', 'Data Center', '99.9% Uptime'],
  },
]
