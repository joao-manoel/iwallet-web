import { useRouter } from 'next/router';
import Link from 'next/link';
import { TemplateIcon, ArchiveIcon, XIcon } from '@heroicons/react/solid'

import { Logo } from "../logo";


const LinksData = [ 
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: TemplateIcon
  },
  {
    name: 'Carteira',
    href: '/wallet',
    icon: ArchiveIcon
  }
] 

interface NavProps {
  isOpen: boolean
  onClose: () => void
}

export default function Nav({isOpen, onClose} : NavProps) {

  const {asPath} = useRouter()

  return (
    <div className={`w-60 fixed md:relative bg-white dark:bg-background-200 dark:md:bg-transparent md:bg-transparent h-[80%] z-50 shadow-md top-8 left-5 md:top-0  md:left-0 rounded-xl origin-left duration-300 transition-all md:shadow-none md:min-h-screen flex flex-col items-center ${isOpen ? 'flex' : 'hidden md:flex'}`}>
      <header className="flex flex-col items-center my-6 border-slate-200  dark:border-background-500 dark:md:border-background-200 border-b-2 w-3/4 py-3">
        <Logo />
        <button onClick={() => onClose()} className='absolute block cursor-pointer top-3 right-3 w-8 focus:ring-2 ring-destak_two-500 outline-none md:focus:ring-0'>
          <XIcon className='md:hidden  text-slate-400 hover:bg-white dark:hover:bg-background-500 hover:shadow-md rounded-md p-2'/>
        </button>
      </header>

      <nav>
        <ul className="flex flex-col justify-center gap-y-6">
          {LinksData.map((item, index) => (
            <li role='button' key={index} className={`flex group items-center gap-x-2 cursor-pointer rounded-md ${asPath === item.href && 'bg-white md:dark:bg-background-200 dark:bg-background-500 shadow-md'}`}>
              <Link href={item.href}>
                <a className="flex items-center gap-x-2 text-zinc-400 hover:text-zinc-400 py-2 px-7 focus:ring-2 ring-destak_two-500 outline-none">
                  <figure className={`${asPath === item.href ? 'text-destak_two-500 dark:bg-background-200' : 'dark:bg-background-500'} bg-white  group-hover:text-destak_two-500 p-2 shadow-md rounded-md`}>
                    <item.icon className='w-5' />
                  </figure>
                  <span className={`${asPath === item.href ? 'font-medium' : 'font-thin'} `}>
                    {item.name}
                  </span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}