import { useEffect, useRef, useState } from 'react'
import Dark from './Dark'
import { Menu, X } from 'lucide-react'

const menuLinks = [
  { name: 'Home', path: '/' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contac' }
]

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const btnMenuRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleNav = () => {
    setIsOpen(!isOpen)
  }

  const handleListener = (e: MouseEvent) => {
    console.log('listen')
    if (
      !menuRef.current?.contains(e.target as Node) &&
      !btnMenuRef.current?.contains(e.target as Node)
    ) {
      console.log('outside')
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleListener)
      const li = menuRef.current?.children[0].children[0] as HTMLElement
      li?.focus()
      return () => {
        document.removeEventListener('mousedown', handleListener)
      }
    }
  }, [isOpen])

  return (
    <header className="container mx-auto">
      <div className="flex justify-between">
        {/* logo */}
        <div>
          <h2>
            Isaias<span>.</span>
          </h2>
        </div>
        <div>
          {/* button nav */}
          <div className="inline-flex gap-2">
            <Dark />
            <button
              ref={btnMenuRef}
              onClick={handleNav}
              className="inline-flex justify-center items-center border rounded-md bg-background transition-all shadow-xs [&_svg]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] hover:bg-accent hover:text-accent-foreground size-9 dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
            >
              <Menu
                className={`h-[1.2rem] w-[1.2rem]  transition-all ${
                  isOpen ? 'scale-0 -rotate-90' : 'scale-100 rotate-0'
                }`}
              />
              <X
                className={`h-[1.2rem] w-[1.2rem] absolute transition-all ${
                  isOpen ? 'scale-100 rotate-0' : 'scale-0 rotate-90'
                }`}
              />
              <span className="sr-only">Principal navbar</span>
            </button>
          </div>
          {/* nav */}
          <div
            ref={menuRef}
            className={`${
              isOpen ? '' : 'hidden'
            } fixed w-1/2 transform -translate-x-(--tr-menu) rounded-md border bg-primary-foreground mt-2 p-4 shadow-md flex flex-col mx-auto`}
          >
            <ul className="mx-2 inline-flex flex-col items-center justify-center">
              {menuLinks.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="focus:bg-accent px2 py-1.5 rounded-md select-none"
                  >
                    <a href={item.path}>{item.name}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
