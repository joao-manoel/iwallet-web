import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'

import { Header } from '../components/Header'
import { Page } from '../components/page'



const Home: NextPage = () => {
  const {systemTheme, theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() =>{
    setMounted(true)
  }, [])
  const renderThemeChanger = () => {
    if(!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if(currentTheme === 'dark'){
      return(
        <SunIcon 
          className='w-4' 
          role='button' 
          onClick={() => setTheme('light')} 
        />
      )
    }
    else {
      return (
        <MoonIcon 
          className='w-4 ' 
          role='button' 
          onClick={() => setTheme('dark')} 
        />
      )
    }
  }

  return (
    <Page title='IWallet' path='/' description='seu controle financeiro'>
      <div className="container m-auto">
        <Header />

        {renderThemeChanger()}
      </div>
    </Page>
  )
}

export default Home
