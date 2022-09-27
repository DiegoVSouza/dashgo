import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Link,
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
import { QueryClient, useQuery } from 'react-query'
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { getUsers, useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";
import { GetServerSideProps } from "next";

export default function UserList() {
  const [page, setPage] = useState(1)
  const { data, isLoading, error, isFetching } = useUsers(page)


  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`/users/${userId}`)
      return response.data
    }, {
      staleTime: 1000 * 60 * 10
    })
  }

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth="1480px" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius="8px" bg="gray.800" p={["6", "8"]}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg"> Usuários
              {!isLoading && isFetching && <Spinner size='sm' color="gray.500" ml='4' />}
            </Heading>
            <NextLink href='/users/create' passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
              >
                {isWideVersion ? "Criar novo Usuário" : "Criar Usuario"}
              </Button>
            </NextLink>

          </Flex>
          {isLoading ? (
            <Flex justify='center' >
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify='center'>
              <Text>Falha a obter os dados do usuario</Text>
            </Flex>
          ) : (
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
                  {data.users.map(user => (
                    <Tr>
                      <Td px={["4", "4", "6"]}>
                        <Checkbox colorScheme="pink" />
                      </Td>

                      <Td>
                        <Box>
                          <Link color='purple.400' onMouseEnter={() => handlePrefetchUser(user.id)}>
                            <Text fontSize="sm">{user.email}</Text>
                          </Link>
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
              <Pagination totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />

            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

