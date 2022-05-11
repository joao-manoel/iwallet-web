import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react'
import { forwardRef } from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: FieldError;
  ref: string;
  control: Control<any>
}

const InputComponent: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, control, error = null, ...inputRest}: InputProps, ref) => {
  return (
    <>
      <div>
        <Controller 
          name={name}
          control={control}
          defaultValue= {''}
          render={({ field: { ref, ...rest}}) => (
            
            <div>
                <input
                  className="appearance-none h-full py-3 px-3 md:px-2 md:py-2 text-black dark:text-white bg-white dark:bg-black border-[2px] border-gray-400 dark:border-zinc-800 w-full rounded-md focus:ring-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-1"
                  id={name} 
                  {...inputRest} 
                  {...rest} 
                  ref={ref}                  
                />
                {!!error && <span className='text-red-500 text-sm'>{error.message}</span>}
            </div>
          )}  
        />
      </div>
      
    </>
  )
}

export const Input = forwardRef(InputComponent)