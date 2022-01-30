import { Button, Flex, Stack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Input } from '../components/Form/Input';

const SignIn: NextPage = () => {
  return (
    <>
      <Head>
        <title>SignIn | Dashgo</title>
      </Head>
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          w="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDirection="column"
        >
          <Stack>
            <Input name="email" type="email" label="E-mail" />

            <Input name="password" type="password" label="Senha" />
          </Stack>

          <Button type="submit" mt="6" colorScheme="pink" size="lg">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default SignIn;
