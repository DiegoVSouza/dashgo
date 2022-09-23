import { Flex, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'
import { Input } from '../components/form/Input'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <Flex width='100vw' height='100vh' justify='center' align='center'>
      <Flex as='form' width='100%' maxWidth='368px' flexDir='column' bg='gray.800' p='8' borderRadius='8px'>
        <Stack spacing='4'>
          <Input name='email' label='E-Mail' type='email' />
          <Input name='password' label='Password' type='password' />
        </Stack>

        <Button type='submit' mt='6' colorScheme='pink'> Entrar </Button>
      </Flex>
    </Flex>
  )
}
