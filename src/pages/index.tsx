import type { NextPage } from 'next'

import { Header } from '../components/Header'
import { Page } from '../components/page'


const Home: NextPage = () => {
  return (
    <Page title='IWallet' path='/' description='seu controle financeiro'>
      <div className="container m-auto">
        <Header /> 
      </div>
    </Page>
  )
}

export default Home
