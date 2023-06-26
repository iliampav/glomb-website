import type { AppProps, NextWebVitalsMetric } from 'next/app'
import '../styles/globals.scss'
import "swiper/css";

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (metric.label === 'web-vital') {
    
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
