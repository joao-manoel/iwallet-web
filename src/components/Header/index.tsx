import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import {DotsVerticalIcon} from "@heroicons/react/solid"
import { NavItem } from "./navItem"


export const Header = () => {
  const [asMobileNavOpen, setAsMobileNavOpen] = useState(false)

  return(
    <header className="py-4 px-4 flex justify-between items-center text-white gap-8">
        <div className="">
          <Link href="/">
            <a>
              <Image 
                src="/images/logo-full.svg"
                alt='iwallet logo'
                width={124}
                height={46}
              />
            </a>
          </Link>
          
        </div>

        <div className="cursor-pointer md:hidden" onClick={() => setAsMobileNavOpen(!asMobileNavOpen)}>
          <span className="w-9 h-[2px] bg-white block "></span>
          <span className="w-9 h-[2px] bg-white block my-2"></span>
        </div>

        <div className={(asMobileNavOpen ? 'statics' : 'hidden') + ' absolute top-14 left-0 min-w-full bg-black min-h-[94%] z-50 md:block md:relative md:top-0 md:min-h-0 md:min-w-fit md:bg-transparent'}>
          <ul className="flex gap-2 items-center md:gap-8 flex-col md:flex-row  p-8 md:p-0 text-md">
            <NavItem path="/">
              Sobre
            </NavItem>

            <NavItem path="#">
              Blog
            </NavItem>

            <NavItem path="/signin">
              Entrar
            </NavItem>
            
            <li className="min-w-full md:min-w-fit text-center m-1">
              <Link href="/signup">
                <a>
                  <button className="relative min-w-full md:min-w-fit inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative min-w-full md:min-w-fit px-3 py-2 transition-all ease-in duration-75 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0">
                      Cadastrar
                    </span>
                  </button>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
  )
}
