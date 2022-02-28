import type { AppProps } from 'next/app';
import { makeServer } from '../services/mirage';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider } from 'react-query';
import { SideBarDrawerProvider } from '../context/SidebarDrawerContext';

import { theme } from '../styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { queryClient } from '../services/queryClient';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SideBarDrawerProvider>
          <Component {...pageProps} />
        </SideBarDrawerProvider>
      </ChakraProvider>

      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}

export default MyApp;
