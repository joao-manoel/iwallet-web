import Link from "next/link";
import { ReactNode } from "react";

type itemProps = {
  children: ReactNode
  path: string
}

export const NavItem = ({children, path}: itemProps) => {
  return(
    <li className="border-b-[1px] md:border-b-0 border-zinc-200 dark:border-gray-800 min-w-full md:min-w-fit text-center cursor-pointer">
      <Link href={path}>
        <a className="text-black hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">
          {children}
        </a>
      </Link>
    </li>
  )
}