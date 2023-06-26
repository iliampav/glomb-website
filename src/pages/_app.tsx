import type { AppProps, NextWebVitalsMetric } from 'next/app'
import {Inter, Poppins} from 'next/font/google' 

import '../styles/globals.scss'
import "swiper/css";

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (metric.label === 'web-vital') {
    console.log(metric) // The metric object ({ id, name, startTime, value, label }) is logged to the console
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const inter = Inter({ subsets: ['latin'] })
  const poppins = Poppins({ weight: ['400', '500', '600', '700'] ,subsets: ['latin'] })

  return (
      <>
        <main className={`${inter.className} ${poppins.className}`}> 

          <Component {...pageProps} />
        </main>
      </>
  )
}

export default MyApp
