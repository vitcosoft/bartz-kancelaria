import type { NavigationMenuItem } from '@nuxt/ui'

export function getNavigationItems(): NavigationMenuItem[] {
  const appConfig = useAppConfig()
  return appConfig.navigation.main
}
