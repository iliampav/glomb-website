import type { AppProps, NextWebVitalsMetric } from 'next/app'
import Script from 'next/script'

import '../styles/globals.scss'
import "swiper/css";

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (metric.label === 'web-vital') {
    console.log(metric) // The metric object ({ id, name, startTime, value, label }) is logged to the console
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Component {...pageProps} />
        <Script src="https://fonts.googleapis.com/css2?family=Inter:wght@;400;500;600;700&family=Poppins:wght@400;600;700" rel="stylesheet" />
      </>
  )
}

export default MyApp
