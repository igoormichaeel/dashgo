import * as yup from 'yup';
import Head from 'next/head';
import type { NextPage } from 'next';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Flex, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Input } from '../components/Form/Input';
import Router from 'next/router';

type SignInFormData = {
  email?: string;
  password?: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

const SignIn: NextPage = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    Router.push('/dashboard');
  };

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
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack>
            <Input
              type="email"
              label="E-mail"
              error={errors.email}
              {...register('email')}
            />

            <Input
              type="password"
              label="Senha"
              error={errors.password}
              {...register('password')}
            />
          </Stack>

          <Button
            type="submit"
            mt="6"
            colorScheme="pink"
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default SignIn;
