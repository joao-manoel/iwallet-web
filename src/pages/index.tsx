import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div className="container m-auto h-screen">
      <header className="py-4 px-4 flex justify-between items-center text-white gap-8">
        <div className="container ">
          <Image 
            src="/images/logo-full.svg"
            alt='iwallet logo'
            width={124}
            height={46}
          />
        </div>

        <div className="cursor-pointer md:hidden">
          <span className="w-9 h-[2px] bg-white block "></span>
          <span className="w-9 h-[2px] bg-white block my-2"></span>
        </div>

        <div className="absolute top-14 left-0 min-w-full bg-black min-h-full md:block md:relative md:top-0 md:min-h-0 md:min-w-fit md:bg-transparent">
          <ul className="flex gap-2 md:gap-8 flex-col md:flex-row items-center md:items-start p-8 md:p-0 text-md text-zinc-400">
            <li className="border-b-[1px] md:border-b-0 border-gray-800 min-w-full md:min-w-fit text-center">
              <Link href="">
                <a>Features</a>
              </Link>
            </li>
            <li className="border-b-[1px] md:border-b-0 border-gray-800 min-w-full md:min-w-fit text-center">
              <Link href="">
                <a>Blog</a>
              </Link>
            </li>
            <li className="border-b-[1px] md:border-b-0 border-gray-800 min-w-full md:min-w-fit text-center">
              <Link href="">
                <a>Customers</a>
              </Link>
            </li>
            <li className="border-b-[1px] md:border-b-0 border-gray-800 min-w-full md:min-w-fit text-center">
              <Link href="">
                <a>Pricing</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-8 items-center text-md text-zinc-400">
            <li>
              <Link href="">
                <a>Entrar</a>
              </Link>
            </li>
            <li>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-3 py-2 transition-all ease-in duration-75 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0">
                  Cadastrar
                </span>
              </button>
            </li>
          </ul>
        </div>
      </header>     
    </div>
  )
}

export default Home
