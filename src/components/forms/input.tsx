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
                  className="appearance-none h-full py-2 px-2 text-white bg-black border-[2px] border-zinc-800 w-full rounded-md"
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