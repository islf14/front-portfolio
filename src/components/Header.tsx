import { useEffect, useRef, useState } from 'react'
import Dark from './Dark'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router'

const menuLinks = [
  { name: 'Home', path: '/' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' }
]

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const btnMenuRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleNav = () => {
    setIsOpen(!isOpen)
  }

  const handleListener = (e: MouseEvent) => {
    if (
      !menuRef.current?.contains(e.target as Node) &&
      !btnMenuRef.current?.contains(e.target as Node)
    ) {
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
      <div className="flex justify-between mx-2 my-4 ">
        {/* logo */}
        <div>
          <Link to={'/'}>
            <h1 className="text-4xl font-semibold">
              Isaias<span className="text-ac">.</span>
            </h1>
          </Link>
        </div>
        {/* nav and theme */}
        <div className="sm:gap-4 sm:inline-flex">
          {/* 2 buttons */}
          <div className="inline-flex gap-2 sm:order-2">
            <Dark />
            <button
              ref={btnMenuRef}
              onClick={handleNav}
              className="inline-flex justify-center items-center border rounded-md bg-background transition-all shadow-xs [&_svg]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] hover:bg-accent hover:text-accent-foreground size-9 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 sm:hidden"
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
            } fixed w-1/2 transform -translate-x-(--tr-menu) rounded-md border bg-primary-foreground mt-2 p-4 shadow-md flex flex-col mx-auto sm:block sm:static sm:translate-x-0 sm:m-0 sm:w-auto sm:order-1 sm:border-none sm:bg-transparent sm:p-0`}
          >
            <ul className="mx-2 inline-flex flex-col items-center justify-center sm:flex-row sm:gap-6">
              {menuLinks.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={handleNav}
                    className="px2 py-1.5 select-none "
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? 'text-ac border-ac border-b-2 hover:text-ac-h transition-all'
                          : 'hover:text-ac-h transition-all'
                      }
                    >
                      {item.name}
                    </NavLink>
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
