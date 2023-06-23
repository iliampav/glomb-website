import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import "swiper/css";
import "swiper/css/navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
