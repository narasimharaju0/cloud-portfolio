import { Activity, Gauge, Shield, Timer } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Metric {
  id: string
  value: string
  label: string
  icon: LucideIcon
  trend?: string
}

export const metrics: Metric[] = [
  {
    id: 'ha',
    value: '99.99%',
    label: 'Cloud Infrastructure High Availability Enforced',
    icon: Shield,
    trend: 'SLA Enforced',
  },
  {
    id: 'iac',
    value: '40%',
    label: 'Acceleration in IaC Provisioning via Modular Terraform Templates',
    icon: Gauge,
    trend: '↑ Provisioning',
  },
  {
    id: 'pipeline',
    value: 'Zero-Fault',
    label: 'Multi-Tenant Container Delivery Pipeline Execution',
    icon: Activity,
    trend: 'CI/CD Stable',
  },
  {
    id: 'experience',
    value: '1.5 Yrs',
    label: 'Professional Multicloud Experience (Cognizant Technology Solutions)',
    icon: Timer,
    trend: 'AWS & Azure',
  },
]
