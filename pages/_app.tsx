import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

console.log('ENVIRONMENT is', process.env.ENVIRONMENT);

const styles = {
  container: 'container mx-auto',
};

function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
      <div className={styles.container}>
        <div className={styles.container}>
          <Head>
            <title>Tokey NFT Marketplace</title>
          </Head>
          {/* <Header /> */}
          <Component {...pageProps} />
        </div>
        <div>{/* <Footer /> */}</div>
      </div>
    </ThirdwebProvider>
  );
}

export default App;
