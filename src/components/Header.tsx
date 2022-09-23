import { Flex, Text, Input, Icon } from "@chakra-ui/react";
import { RiSearchLine } from 'react-icons/ri'
export default function Header() {
    return (
        <Flex w='100%' as='header' maxWidth='1480px' height='20' mx='auto' mt='4' px='6' align='center'>
            <Text fontSize='3xl' fontWeight='bold' letterSpacing='tight' w='64'>
                dashgo
                <Text color='pink.500' as='span' ml='1'>
                    .
                </Text>
            </Text>
            <Flex as='label' flex='1' py='4' px='8' ml='6' maxWidth='400px' alignSelf='center' color='gray.200' position='relative' bg='gray.800' borderRadius='full'>
                <Input color='gray.50' variant='unstyled' placeholder="Buscar na Plataforma" _placeholder={{ color: 'gray.400' }} px='4' mr='4' />
                <Icon as={RiSearchLine} fontSize='20' />
            </Flex>
        </Flex>
    )
}