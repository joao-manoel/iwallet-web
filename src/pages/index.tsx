import type { NextPage } from 'next'
import Image from 'next/image'
const Home: NextPage = () => {
  return (
    <div className="container m-auto px-4 flex justify-center flex-col items-center h-screen ">
      <span className="m-5">
        <Image src="/images/logo-full.svg" height={46} width={164} alt="logotipo da iwallet"/>
      </span>
      <div className="container bg-ice-500 w-full max-w-xl h-1/2 rounded-2xl drop-shadow-2xl">
  
      </div>
      
    </div>
  )
}

export default Home
