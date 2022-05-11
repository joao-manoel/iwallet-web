import { useTheme } from "next-themes"
import Image from "next/image"

export const Logo = () => {
  const {theme, setTheme} = useTheme()
  return(
    <>
      {theme === 'light' ? (
      <Image 
        src="/images/logo-full-light.svg"
        alt='iwallet logo'
        width={124}
        height={46}
      />
    ) : (
      <Image 
        src="/images/logo-full.svg"
        alt='iwallet logo'
        width={124}
        height={46}
      />
    )}
    </>
  )
}