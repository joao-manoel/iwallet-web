const title = 'IWallet'
const description = 'Seu controle financeiro.'

const SEO = {
  title, 
  description,
  canonical: 'http://localhost:3000',
  openGraph: {
    type: 'website',
    locale: 'pt_Br',
    url: 'http://localhost:3000',
    title,
    description,
    images: [
      {
        url: 'http://localhost:3000/og.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
}

export default SEO