import { NextPage } from "next"
import Image from "next/image"
import { SubmitHandler, useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"


import { LockClosedIcon } from '@heroicons/react/solid'
import { Button, Input } from "../components/forms"

type LoginData = {
  email: string
  password: string
}

const LoginFormSchema = yup.object().shape({
  email: yup.string().required('E-mail é obrigatorio.').email('Digite um e-mail valido.'),
  password: yup.string().required('Senha é obritatoria.')
})

const Login: NextPage = () => {

  const { register, handleSubmit, formState: { errors }, control} = useForm<LoginData>({
    resolver: yupResolver(LoginFormSchema)
  })

  const handleLoginRequest: SubmitHandler<LoginData> = (data) => {
    console.log(data)
  }

  return(
    <div className="">
      
    </div>
  )
}

export default Login