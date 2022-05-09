import { LoginIcon } from '@heroicons/react/solid';
import React, { ButtonHTMLAttributes, forwardRef, ForwardRefRenderFunction } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const ButtonComponent: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = ({text, ...rest} : ButtonProps) => {
  return (
    <button
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      {...rest}
    >
      {text}
    </button>
  );
}
export const Button = forwardRef(ButtonComponent)