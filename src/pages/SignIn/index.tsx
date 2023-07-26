import React from 'react'
import * as S from './styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../services/firebase'

const signInFormSchema = z.object({
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('Formato de email inválido'),
  password: z
    .string()
    .nonempty('A senha é obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
})

type SignInFormFormData = z.infer<typeof signInFormSchema>

const SignIn: React.FC = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<SignInFormFormData>({
    resolver: zodResolver(signInFormSchema),
  })

  const handleSignIn = async ({ email, password }: SignInFormFormData) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      reset()
      navigate('/')
    } catch (error) {
      alert('erroo')
      reset()
      console.error(error)
    }
  }

  const email = watch('email')
  const password = watch('password')
  const isSubmitDisabled = !email || !password

  return (
    <S.Container>
      <S.Title>Entrar na Alfasoft network!</S.Title>
      <S.Form onSubmit={handleSubmit(handleSignIn)}>
        <label htmlFor="email">E-mail:</label>
        <S.Input
          type="email"
          placeholder="John Doe"
          {...register('email')}
          autoComplete="off"
        />
        {errors.email && <span>{errors.email.message}</span>}

        <label htmlFor="password">Senha:</label>
        <S.Input
          type="password"
          placeholder="********"
          {...register('password')}
          autoComplete="off"
        />
        {errors.password && <span>{errors.password.message}</span>}

        <S.Button type="submit" disabled={isSubmitDisabled}>
          Entrar
        </S.Button>
      </S.Form>
      <S.Links to="/signup">Não possui login? Inscrever-se!</S.Links>
    </S.Container>
  )
}

export default SignIn
