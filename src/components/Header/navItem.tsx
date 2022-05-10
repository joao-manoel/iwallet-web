import { ReactNode } from "react";

type itemProps = {
  children: ReactNode;
}

export const NavItem = ({children}: itemProps) => {
  return(
    <li className="border-b-[1px] md:border-b-0 border-gray-800 min-w-full md:min-w-fit text-center text-zinc-400 hover:text-zinc-50 cursor-pointer">
      {children}
    </li>
  )
}