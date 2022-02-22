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
} from '@chakra-ui/react';
import { AiOutlineReload } from 'react-icons/ai';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import Head from 'next/head';
import Link from 'next/link';
import { useUsers } from '../../services/hook/useUsers';
import { useHasMounted } from '../../services/hook/useHasMounted';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Pagination } from '../../components/Pagination';
import { useState } from 'react';

export default function UserList() {
  const hasMounted = useHasMounted();

  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error, refetch } = useUsers(page);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Head>
        <title>Usuários | Dashgo</title>
      </Head>
      <Box>
        {hasMounted && <Header />}

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={['4', '4', '6']}>
          {hasMounted && <Sidebar />}

          <Box flex="1" borderRadius={8} bg="gray.800" p={['4', '4', '8']}>
            <Flex mb="8" justify="space-between" align="center">
              <Heading size="lg" fontWeight="normal">
                Usuários
                {!isLoading && isFetching && (
                  <Spinner size="sm" color="gray.500" ml="4" />
                )}
              </Heading>

              <Flex>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  mr="4"
                  colorScheme="purple"
                  _hover={{ cursor: 'pointer' }}
                  leftIcon={<Icon as={AiOutlineReload} fontSize="16" />}
                  onClick={() => refetch()}
                >
                  Atualizar
                </Button>

                <Link href="/users/create" passHref>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="pink"
                    _hover={{ cursor: 'pointer' }}
                    leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                  >
                    Criar Novo
                  </Button>
                </Link>
              </Flex>
            </Flex>

            {isLoading ? (
              <Flex justify="center">
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex justify="center">
                <Text>Falha ao obter dados dos usuários.</Text>
              </Flex>
            ) : (
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th px={['1', '1', '6']} color="gray.300" w="8">
                        <Checkbox colorScheme="pink" />
                      </Th>
                      <Th>Usuário</Th>
                      {isWideVersion && <Th>Data de cadastro</Th>}
                      <Th w="8"></Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    {data.users.map((user) => (
                      <Tr key={user.id}>
                        <Td px={['1', '1', '6']}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="sm" color="gray.300">
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        {isWideVersion && <Td>{user.createdAt}</Td>}
                        <Td>
                          <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="purple"
                            _hover={{ cursor: 'pointer' }}
                            leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                          >
                            {isWideVersion && 'Editar'}
                          </Button>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>

                <Pagination
                  totalCountOfRegisters={data.totalCount}
                  currentPage={page}
                  onPageChange={setPage}
                />
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
}
