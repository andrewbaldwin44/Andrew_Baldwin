import Head from 'next/head';
import 'styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon-32x32.png' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
