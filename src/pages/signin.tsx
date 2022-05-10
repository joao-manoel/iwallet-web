import { NextPage } from "next"

import { SubmitHandler, useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
import { Page } from "../components/page"
import { Input } from "../components/forms"
import Image from "next/image"
import Link from "next/link"



type LoginData = {
  email: string
  password: string
}

const LoginFormSchema = yup.object().shape({
  email: yup.string().required('E-mail é obrigatorio.').email('Digite um e-mail valido.'),
  password: yup.string().required('Senha é obritatoria.')
})

const SignIn: NextPage = () => {

  const { register, handleSubmit, formState: { errors }, control} = useForm<LoginData>({
    resolver: yupResolver(LoginFormSchema)
  })

  const handleLoginRequest: SubmitHandler<LoginData> = (data) => {
    console.log(data)
  }

  return(
    <Page title="Entrar - IWallet" description="faça login na iwallet" path="/signin">
      <div className="container m-auto h-screen flex items-center justify-center">
        <div className="container w-3/4 md:w-96 flex flex-col gap-8 text-white py-8 px-4">
          <Link href="/">
            <a className="flex flex-col">
              <Image 
                src="/images/logo-full.svg" 
                alt="logo do iwallet" 
                width={90} 
                height={36} 
              />
            </a>
          </Link>
          
          <form className="flex flex-col gap-4">
            <Input
              control={control} 
              name="email"
              placeholder="E-mail" 
            />

            <div>
              <Input 
                control={control} 
                name="password" 
                placeholder="Senha"
              />

              <Link href="/forgot">
                <a className="font-bold text-sm">
                  Esqueci minha senha
                </a>
              </Link>
            </div>

            <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-900" disabled>Entrar</button>

            <p className="text-sm text-center my-4">
              Não tem uma conta? <Link href="signup"><a>Registre-se</a></Link>
            </p>
          </form>          
        </div>
      </div>
    </Page>
  )
}

export default SignIn