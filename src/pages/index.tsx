import type { NextPage } from 'next'
import { useTheme } from 'next-themes'

import { Header } from '../components/Header'
import { Page } from '../components/page'


const Home: NextPage = () => {
  const {theme, setTheme} = useTheme()

  return (
    <Page title='IWallet' path='/' description='seu controle financeiro'>
      <div className="container m-auto">
        <Header />
        <button
          className='px-6 py-2 bg-black dark:bg-white text-white dark:text-black'
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          Toggle to {theme === 'light' ? 'Dark' : 'Light'}
        </button> 
      </div>
    </Page>
  )
}

export default Home
