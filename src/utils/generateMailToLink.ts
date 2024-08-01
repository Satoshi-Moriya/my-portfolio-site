export const generateMailToLink = (user: string, domain: string) => {
  return `mailto:${user}@${domain}`
}