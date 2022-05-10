import Link from "next/link";
import { ReactNode } from "react";

type itemProps = {
  children: ReactNode
  path: string
}

export const NavItem = ({children, path}: itemProps) => {
  return(
    <li className="border-b-[1px] md:border-b-0 border-gray-800 min-w-full md:min-w-fit text-center cursor-pointer">
      <Link href={path}>
        <a className="text-zinc-400 hover:text-zinc-50">
          {children}
        </a>
      </Link>
    </li>
  )
}