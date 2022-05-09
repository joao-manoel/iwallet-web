import { SubmitHandler, useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
import { Input } from "./input"


type AuthUserData = {
  test: string
  test2: string
}

const authUserFormSchema = yup.object().shape({
  test: yup.string().required(),
  test2: yup.string().required(),
})

export function LoginForm(){

  const { register, handleSubmit, formState: { errors }, control} = useForm<AuthUserData>({
    resolver: yupResolver(authUserFormSchema)
  })

  const handleAuthUser: SubmitHandler<AuthUserData> = async (data) => {
    console.log(data)
  }

  return(
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleAuthUser)}>

      <Input name="test" type="text" control={control} placeholder="Ensira um texto" {...register('test')} />
      {!!errors.test && <span>{errors.test.message}</span>}

      <Input name="test2" control={control} type="text" {...register('test2')}/>
      {!!errors.test2 && <a>{errors.test2.message}</a>}
      <button type="submit">Enviar</button>
    </form>
  )
}