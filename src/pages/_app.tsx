import '@styles/global.css';
import '@styles/navbar.css';
import type {AppProps} from 'next/app';

export default function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}
