export const EMAIL = 'narasimharajupaidi@gmail.com' as const
export const MAILTO_HREF = `mailto:${EMAIL}` as const
export const PHONE = '+91 6302688214' as const
export const PHONE_HREF = 'tel:+916302688214' as const

export const LINKS = {
  github: 'https://github.com/narasimharaju0',
  linkedin: 'https://www.linkedin.com/in/narasimharaju-paidi/',
  omnikube: 'https://github.com/narasimharaju0/OmniKube',
  email: MAILTO_HREF,
  phone: PHONE_HREF,
  resumeDownload: '/resume/resume.pdf',
} as const

export const PROFILE = {
  name: 'Narasimha Raju Paidi',
  title: 'Multicloud Infrastructure Engineer',
  location: 'India',
  company: 'Cognizant Technology Solutions',
} as const
