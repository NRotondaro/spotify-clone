import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider sessions={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
