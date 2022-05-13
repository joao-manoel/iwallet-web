/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'

import {ArrowLeftIcon, ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/solid'
import { LogoIcon } from './../logo'
import Link from 'next/link'

type IOptions  = {
  name: string
  href: string
}

type IItem  = {
  name: string
  icon: string
  href?: string
  options?: IOptions[]
}

export interface IMenu {
  title: string
  items: IItem[]
}

type OptionsExpandData = {
  index: number
  indexItem: number
}

interface NavBarProps {
  menu: IMenu[]
}


export const NavBar = ({menu}: NavBarProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [hasOptionExpanded, setHasOptionExpanded] = useState<OptionsExpandData | null>(null)
  const handleSetExpand = () => {
    setIsOpen(!isOpen)
  }

  const handleToggleOptions = (index: number, indexItem: number) => {
    if (hasOptionExpanded !== null) {
      if (
        hasOptionExpanded.index === index &&
        hasOptionExpanded.indexItem === indexItem
      ) {
        setHasOptionExpanded(null);
        return;
      }
    }

    setHasOptionExpanded({
      index,
      indexItem,
    });
  }

  const isOptionExpanded = (index: number, indexItem:number): boolean => {
    if(hasOptionExpanded !== null 
        && hasOptionExpanded.index === index 
        && hasOptionExpanded.indexItem === indexItem){
          return true
        }

        return false
  }


  return(
    <div className={`${isOpen ? 'w-72' : 'w-20'} 
      duration-300 h-screen bg-white shadow-2xl relative p-5 pt-8`}>
      <ArrowLeftIcon 
        height={20}
        className={`
          absolute cursor-pointer -right-2 top-9 border-2 border-white bg-white rounded-full
          ${!isOpen && 'rotate-180'}
        `}
        onClick={handleSetExpand}
      />
      <Link href='/dashboard'>
        <a>
          <div className="flex items-center gap-x-2">
            <LogoIcon isOpen={isOpen}/>
            <h1 className={`
              font-inter font-thin text-black dark:text-white origin-left text-xl duration-300
              ${!isOpen && 'scale-0'}
            `}><span className='font-bold'>I</span>Wallet</h1>
          </div>
        </a>
      </Link>
      

      <div className="pt-2">
        {menu.map((menu, index) => (
          <ul 
            key={index}
            className={`${index >= 0 && isOpen ? 'mt-8' : 'mt-0'}`}
          >
            <span className={`text-[12px] font-thin block ${!isOpen && 'scale-0'}`}>{menu.title}</span>
            {menu.items.map((item, indexItem) => (
              <li 
                key={indexItem}
                id="list"
                className={`cursor-pointer group relative`}
              >
                <Link href={item.href ? item.href : ''}>
                  <a>
                    <div 
                      className={`hover:bg-slate-100 gap-x-2 p-2 flex rounded-md items-center 
                        ${!isOpen && (isOptionExpanded(index, indexItem) ? 'w-16 bg-slate-100 border-b-2 border-solid border-zinc-200' : 'border-b-2 border-transparent' )}                  `}
                      onClick={() => { item.options && handleToggleOptions(index, indexItem)}}
                      >
                      
                          <img src={`/images/icons/${item.icon}.svg`} alt={item.name} className='w-[25px] h-[25px] max-w-[25px] max-h-[25px]'/>
                          <span className={`text-md ${!isOpen && 'scale-0'} origin-left duration-300 text-zinc-600`}>{item.name}</span>
                        
                        {item.options && (
                          isOptionExpanded(index, indexItem) ? (
                            <ChevronUpIcon className={`absolute h-[15px] right-1 ${!isOpen && 'hidden'}`}/>
                          ) : (
                            <ChevronDownIcon className={`absolute h-[15px] right-1 ${!isOpen && 'hidden'}`}/>
                          )
                        )}
                      
                    </div>
                  </a>
                </Link>
                {item.options && (
                  <ul className={`
                    ${isOptionExpanded(index, indexItem) ? 'statics' : 'hidden'}
                    ${!isOpen ? 'absolute left-[60px] top-0 border-none shadow-sm bg-slate-100 min-w-fit rounded-none' : 'relative left-4 border-slate-200 duration-300 origin-left' }
                    border-l-[1px] origin-left duration-300 trasition-all
                  `}>
                    {!isOpen && (
                      <span className='flex items-center justify-center cursor-default border-b-2 border-solid border-zinc-200 h-[43px] font-bold'>{item.name}</span>
                    )}
                    {item.options.map((option, indexOption) => (
                      <Link href={option.href && option.href} key={indexOption}>
                        <a>
                          <li className={`${!isOpen ? 'hover:bg-white px-4 ' : 'hover:bg-slate-100 hover:translate-x-1'} p-2 rounded-md text-sm text-zinc-500 origin-left `}>
                          {option.name}
                        </li>
                        </a>
                      </Link>
                      
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}