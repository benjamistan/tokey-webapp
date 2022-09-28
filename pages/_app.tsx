import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import '../styles/globals.css';

console.log('ENVIRONMENT is', process.env.ENVIRONMENT);

function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
      <div>
        <div className="container max-w-screen-xl">
          <Head>
            <title>Tokey NFT Marketplace</title>
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </div>
    </ThirdwebProvider>
  );
}

export default App;
