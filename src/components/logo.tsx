/* eslint-disable @next/next/no-img-element */
import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"

interface LogoProps{
  height?: number
  width?: number
}

interface LogoIcon extends LogoProps {
  isOpen?: boolean
}


export const Logo = ({ height = 46, width = 124} : LogoProps) => {
  const {theme} = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null
  return(
    <>
      {theme === 'light' ? (
      <Image 
        src="/images/logo-full-light.svg"
        alt='iwallet logo'
        layout="fixed"
        width={width}
        priority={true}
        height={height}
      />
    ) : (
      <Image
        src="/images/logo-full.svg"
        alt='iwallet logo'
        layout="fixed"
        priority={true}
        width={width}
        height={height}
      />
    )}
    </>
  )
}

export const LogoIcon = ({ height = 32, width = 32, isOpen} : LogoIcon ): JSX.Element => {
  const {theme} = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return(
    <>
      {theme === 'light' ? (
      <img 
        src="/images/logo-icon-black.svg"
        alt='iwallet logo'
        width={width}
        height={height}
        
        className={`cursor-pointer duration-500 ${isOpen && 'rotate-[360deg]'}`}
      />
    ) : (
      <img
        src="/images/logo-icon.svg"
        alt='iwallet logo'
        width={width}
        height={height}
      />
    )}
    </>
  )
}