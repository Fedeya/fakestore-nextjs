import 'tailwindcss/tailwind.css';
import { FC, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AppProps } from 'next/app';
import { Page } from '@/lib/page';

type AppPropsWithLayout = AppProps & {
  Component: Page;
};

const App: FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {getLayout(
          <>
            <Component {...pageProps} />
            <ReactQueryDevtools />
          </>
        )}
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
