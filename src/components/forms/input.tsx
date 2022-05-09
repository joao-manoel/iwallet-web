import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react'
import { forwardRef } from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import {AtSymbolIcon} from '@heroicons/react/solid'
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
            
            <div className="bg-bg-500 flex items-center rounded-lg overflow-hidden text-[#333]">
                <label htmlFor={name} className="text-sm px-2 w-max">
                  {label}
                </label>
                <input
                  className="appearance-none bg-bg-500 border-0 w-full h-full"
                  id={name} 
                  {...inputRest} 
                  {...rest} 
                  ref={ref}                  
                />
                {!!error && <span>{error.message}</span>}
            </div>
          )}  
        />
      </div>
      
    </>
  )
}

export const Input = forwardRef(InputComponent)