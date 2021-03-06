import { useEffect, useState } from "react"
import { Popover } from "@headlessui/react"
import { LogoutIcon, MenuIcon, MoonIcon, SunIcon, UserIcon } from "@heroicons/react/solid"
import { useTheme } from "next-themes"
import Link from "next/link"

interface HeaderProps {
  handleToggleNav: () => void
}

export function Header({handleToggleNav}: HeaderProps) {
  const {systemTheme, theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() =>{
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if(!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if(currentTheme === 'dark'){
      return(
        <button onClick={() => setTheme('light')} className='flex text-xs items-center gap-x-2 focus:ring-2 ring-destak_two-500 outline-none border-none'>
        <MoonIcon 
          className='w-4 ' 
          role='button' 
        />
        <span>AparĂȘncia: escuro</span>
      </button>        
      )
    }
    else {
      return (
        <button onClick={() => setTheme('dark')} className='flex text-xs items-center gap-x-2 focus:ring-2 ring-destak_two-500 outline-none border-none'>
          <SunIcon 
            className='w-4 ' 
            role='button' 
          />
          <span>AparĂȘncia: claro</span>
        </button>
      )
    }
  }

  
  return(
    <div className="w-screen p-7 ">
          <header className="min-w-full p-2 flex justify-between items-center rounded-md">
            <section className='flex items-center gap-x-2'>
              <button onClick={() => handleToggleNav()} className='focus:ring-2 ring-destak_two-500 outline-none md:focus:ring-0'>
                <MenuIcon role="button"  className="w-11 block md:hidden cursor-pointer hover:bg-white dark:hover:bg-background-200 hover:shadow-md p-2 rounded-md"/>
              </button>
              <h2 className="font-medium">Dashboard</h2>
            </section>

            <nav className=''>
              <ul className='flex items-center gap-x-4'>
                <li className='flex items-center relative group gap-x-1 p-2 cursor-pointer  rounded-full'>
                  <Popover>
                    <Popover.Button className="w-12 h-12 p-4 flex items-center justify-center text-lg rounded-full focus:ring-2 ring-destak_two-500 outline-none bg-white dark:bg-background-200 hover:shadow-md">
                      J
                    </Popover.Button>
                  
                    <Popover.Panel>
                      <ul className={`absolute top-16 cursor-default bg-white p-4 text-zinc-500 dark:bg-background-200 -left-40 shadow-md w-52 rounded-md overflow-hidden`}>
                        <span className='dark:text-zinc-50 block py-2 mb-2 border-b-[2px] border-solid border-slate-100 dark:border-background-500'>JoĂŁo Manoel</span>
                        <li role='button' className='flex items-center py-2  gap-x-2 hover:text-zinc-400 dark:hover:text-zinc-50 outline-none focus:ring-2 ring-destak_two-500'>
                          <Link href='#'>
                            <a className='flex gap-x-2 dark:text-zinc-400 dark:hover:text-zinc-300 focus:ring-2 ring-destak_two-500 outline-none py-[1px] px-[4px]'>
                              <UserIcon className='w-4' />
                              <span className='text-sm'>Conta</span>
                            </a>
                          </Link>
                        </li>
                        <li role='button' className='flex items-center py-2 w-full gap-x-2 hover:text-zinc-400 dark:hover:text-zinc-50'>
                          <Link href='#'>
                            <a className='flex gap-x-2 dark:text-zinc-400 dark:hover:text-zinc-300 focus:ring-2 ring-destak_two-500 outline-none py-[1px] px-[4px]'>
                              <LogoutIcon className='w-4' />
                              <span>Sair</span>
                            </a>
                          </Link>
                        </li>

                        <hr className='border-b-[2px] border-background-500 my-2' />

                        <li>
                          {renderThemeChanger()}
                        </li>
                      </ul>
                    </Popover.Panel>
                    
                  </Popover>
                </li>
              </ul>
            </nav>
          </header>
        </div>
  )
}