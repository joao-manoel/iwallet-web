import { IMenu } from "../components/Nav"

export const menu: IMenu[] = [
  {
    title: 'Navegação',
    items: [
      {
        name: 'Painel',
        icon: 'tile',
        href: '/dashboard'
      }
    ]
  }, 
  {
    title: 'Operações',
    items: [
      {
        name: 'Carteira',
        icon: 'wallet',
        options: [
          {
            name: 'Despesas',
            href: '/dashboard/expenditure'
          },
           {
             name: 'Faturamento',
             href: '/dashboard/invoicing'
           }
        ]
      },
      {
        name: 'Cartão',
        icon: 'cartcredit',
        href: '/cart'
      }
    ]
  }, 
]
