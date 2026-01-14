import { Languages } from 'lucide-react'
import { DropdownMenu, type item } from './DropdownMenu'
import { useTranslation } from 'react-i18next'

export default function Language() {
  const { i18n } = useTranslation()

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }
  const languages: item[] = [
    { value: 'English', setFunction: () => handleChangeLanguage('en') },
    { value: 'Español', setFunction: () => handleChangeLanguage('es') }
  ]

  const icon = (
    <>
      <Languages className="h-[1.2rem] w-[1.2rem] rotate-0 transition-all dark:scale-100 dark:rotate-360" />
    </>
  )

  return <DropdownMenu items={languages} icon={icon} />
}
