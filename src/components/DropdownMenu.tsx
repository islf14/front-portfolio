import React, { useState, useRef, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

type ddmpros = {
  items: item[]
}

export type item = {
  value: string
  setFunction: () => void
}

export function DropdownMenu({ items }: ddmpros) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null)
  const dropdownRef = useRef<HTMLButtonElement | null>(null)
  const ulRef = useRef<HTMLUListElement | null>(null)
  const dropContainer = useRef<HTMLDivElement>(null)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleListener = (e: MouseEvent) => {
    if (!dropContainer.current?.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen && ulRef.current) {
      document.addEventListener('mousedown', handleListener)
      const li = ulRef.current.children[0] as HTMLElement
      li?.focus()
      setFocusedIndex(0)
      return () => {
        document.removeEventListener('mousedown', handleListener)
      }
    }
  }, [isOpen])

  // handle options for button
  const handleButtonKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleToggle()
    } else if (event.key === 'ArrowDown') {
      event.preventDefault()
      setIsOpen(true)
    }
  }

  const mouseF = (index: number) => {
    setFocusedIndex(index)
    const li = ulRef.current?.children[index] as HTMLElement
    li?.focus()
  }

  // handle options for items
  const handleMenuItemKeyDown = (
    event: React.KeyboardEvent<HTMLLIElement>,
    index: number
  ) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setFocusedIndex((prevIndex) => {
        let newIndex: number = 0
        if (prevIndex === items.length - 1) newIndex = 0
        else if (prevIndex) newIndex = prevIndex + 1
        else newIndex = 1
        // change focus to new Index
        const li = ulRef.current?.children[newIndex] as HTMLElement
        li?.focus()
        // set new Index
        return newIndex
      })
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setFocusedIndex((prevIndex) => {
        let newIndex: number = 0
        if (prevIndex === 0) newIndex = items.length - 1
        else if (prevIndex) newIndex = prevIndex - 1
        else newIndex = -1
        const li = ulRef.current?.children[newIndex] as HTMLElement
        li?.focus()
        return newIndex
      })
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      // Handle item selection
      items[index].setFunction()
      setIsOpen(false)
      // setFocusedIndex(0) // Clear focused state
      dropdownRef.current?.focus() // Return focus to the button
    } else if (event.key === 'Escape') {
      event.preventDefault()
      setIsOpen(false)
      // setFocusedIndex(0)
      dropdownRef.current?.focus()
    }
  }

  return (
    <div className="" ref={dropContainer}>
      <button
        ref={dropdownRef}
        onClick={handleToggle}
        onKeyDown={handleButtonKeyDown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="inline-flex justify-center items-center border rounded-md bg-background transition-all shadow-xs [&_svg]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] hover:bg-accent hover:text-accent-foreground size-9 dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </button>
      {/* -translate-x-[calc(100%-(var(--spacing)*9))] */}
      {isOpen && (
        <ul
          role="menu"
          ref={ulRef}
          className="fixed bg-popover border rounded-md min-w-32 transform -translate-x-(--d-dark) p-1 shadow-md mt-1"
        >
          {items.map((item, index) => (
            <li
              key={index}
              role="menuitem"
              tabIndex={focusedIndex === index ? 0 : -1}
              onMouseEnter={() => mouseF(index)}
              onKeyDown={(e) => handleMenuItemKeyDown(e, index)}
              className="focus:bg-accent px-2 py-1.5 text-sm rounded-md select-none"
              onClick={() => {
                // Handle item selection
                item.setFunction()
                setIsOpen(false)
                setFocusedIndex(null)
                dropdownRef.current?.focus()
              }}
            >
              {item.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
