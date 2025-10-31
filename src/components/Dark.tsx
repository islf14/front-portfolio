import { DropdownMenu, type item } from './DropdownMenu'
import { useTheme } from './use-theme'

export default function Dark() {
  const { setTheme } = useTheme()
  const themes: item[] = [
    { value: 'Light', setFunction: () => setTheme('light') },
    { value: 'Dark', setFunction: () => setTheme('dark') },
    { value: 'System', setFunction: () => setTheme('system') }
  ]

  return (
    <div>
      <DropdownMenu items={themes} />
    </div>
  )
}
