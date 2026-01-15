import { Moon, Sun } from 'lucide-react'
import { DropdownMenu, type item } from './DropdownMenu'
import { useTheme } from './use-theme'
import { useTranslation } from 'react-i18next'

export default function Dark() {
  const { t } = useTranslation()
  const { setTheme } = useTheme()
  const themes: item[] = [
    { value: t('theme.light'), setFunction: () => setTheme('light') },
    { value: t('theme.dark'), setFunction: () => setTheme('dark') },
    { value: t('theme.system'), setFunction: () => setTheme('system') }
  ]

  const icon = (
    <>
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </>
  )

  return <DropdownMenu items={themes} icon={icon} />
}
