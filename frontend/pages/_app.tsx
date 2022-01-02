import Head from 'next/head';
import 'styles/globals.css';

interface IApp {
  Component: React.ElementType;
  pageProps: { [key: string]: any };
}

export default function App({ Component, pageProps }: IApp) {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon-32x32.png' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}