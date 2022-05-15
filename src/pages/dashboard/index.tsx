import { useState } from "react";
import { NextPage } from "next";

import Nav from "../../components/dashboard/nav";
import { Page } from "../../components/page";
import { Header } from "../../components/dashboard/header";

const Dashboard: NextPage = () => {
  
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleNav = () => {
    setIsOpen(!isOpen)
  }


  return(
    <Page description="" path="/dashboard" title="Dashboard - IWallet">
      <div className="flex">
        <Nav isOpen={isOpen} onClose={() => handleToggleNav()}/>
        <Header handleToggleNav={handleToggleNav} />
        
      </div>
    </Page>
  )
}

export default Dashboard