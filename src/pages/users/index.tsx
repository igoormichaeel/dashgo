import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  console.log(isWideVersion);

  return (
    <>
      <Head>
        <title>Usuários | Dashgo</title>
      </Head>
      <Box>
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={['4', '4', '6']}>
          <Sidebar />

          <Box flex="1" borderRadius={8} bg="gray.800" p={['4', '4', '8']}>
            <Flex mb="8" justify="space-between" align="center">
              <Heading size="lg" fontWeight="normal">
                Usuários
              </Heading>

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

            <Table colorScheme="whiteAlpha">
              <Thead>
                <Th px={['1', '1', '6']} color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th w="8"></Th>
              </Thead>

              <Tbody>
                <Tr>
                  <Td px={['1', '1', '6']}>
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Igor Michael</Text>
                      <Text fontSize="sm" color="gray.300">
                        igormichael120@gmail.com
                      </Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>04 de Janeiro, 2022</Td>}
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
                <Tr>
                  <Td px={['1', '1', '6']}>
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Igor Michael</Text>
                      <Text fontSize="sm" color="gray.300">
                        igormichael120@gmail.com
                      </Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>04 de Janeiro, 2022</Td>}
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
                <Tr>
                  <Td px={['1', '1', '6']}>
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Igor Michael</Text>
                      <Text fontSize="sm" color="gray.300">
                        igormichael120@gmail.com
                      </Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>04 de Janeiro, 2022</Td>}
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
                <Tr>
                  <Td px={['1', '1', '6']}>
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Igor Michael</Text>
                      <Text fontSize="sm" color="gray.300">
                        igormichael120@gmail.com
                      </Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>04 de Janeiro, 2022</Td>}
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
              </Tbody>
            </Table>

            <Pagination />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
