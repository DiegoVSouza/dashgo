import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useQuery } from 'react-query'
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { useUsers } from "../../services/hooks/useUsers";

export default function UserList() {
  const {data, isLoading, error , isFetching} = useUsers()


  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })


  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth="1480px" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius="8px" bg="gray.800" p={["6","8"]}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg"> Usuários 
            {!isLoading && isFetching && <Spinner size='sm' color="gray.500" ml='4'/>}
            </Heading>
            <Link href='/users/create' passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
              >
                {isWideVersion ? "Criar novo Usuário" : "Criar Usuario"}
              </Button>
            </Link>

          </Flex>
          { isLoading ? (
            <Flex justify='center' >
              <Spinner/>
            </Flex>
          ): error ? (
            <Flex justify='center'>
              <Text>Falha a obter os dados do usuario</Text>
            </Flex>
          ): (
            <>
            <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de Cadastro</Th>}
                <Th width='8'></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(user=>(
                <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">{user.name}</Text>
                    <Text fontSize="sm">{user.email}</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>{user.created_at}</Td>}
                <Td>
                  {isWideVersion && <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="gray"
                    color='gray.900'
                    leftIcon={<Icon as={RiPencilLine} fontSize='16' color='gray.900' />}
                  >
                    Editar
                  </Button>}

                </Td>
              </Tr>
              ))}
            </Tbody>
          </Table>
          <Pagination />

            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
