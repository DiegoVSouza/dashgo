import { Flex, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'

type SignInFormData = {
  emai: string;
  password: string
}
export default function Home() {
  const { register, handleSubmit, formState } = useForm()
  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
  }
  return (
    <Flex width='100vw' height='100vh' justify='center' align='center'>
      <Flex as='form' width='100%' maxWidth='368px' flexDir='column' bg='gray.800' p='8' borderRadius='8px' onSubmit={handleSubmit(handleSignIn)}>
        <Stack spacing='4'>
          <Input name='email' label='E-Mail' type='email' {...register('email')} />
          <Input name='password' label='Password' type='password' {...register('password')} />
        </Stack>

        <Button type='submit' mt='6' colorScheme='pink' isLoading={formState.isSubmitting}> Entrar </Button>
      </Flex>
    </Flex>
  )
}
