import type { NavigationMenuItem } from '@nuxt/ui'

export function getNavgationItems(): NavigationMenuItem[] {
  const navigationItems = [
    {
      label: 'Strona Główna',
      icon: '',
      to: '/',
    },
    {
      label: 'O Kancelarii',
      icon: '',
      to: '/o-kancelarii',
    },
    {
      label: 'Oferta',
      icon: '',
      to: '/oferta',
    },
    {
      label: 'Kontakt',
      icon: '',
      to: '/kontakt',
    },
  ]
  return navigationItems
}
