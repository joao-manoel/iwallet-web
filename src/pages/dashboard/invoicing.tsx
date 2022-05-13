import { NextPage } from "next"
import { NavBar } from "../../components/Nav"
import { Page } from "../../components/page"
import { menu } from "../../configs/menu.config"

const Invoicing: NextPage = () => {

  return (
    <Page path="/dashboard/invoicing" title="Invoicing - IWallet" description="" >
      <div className="flex">
        <NavBar menu={menu}/>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
          <h1>Invoicing</h1>
        </div>
      </div>
    </Page>
  )
}

export default Invoicing