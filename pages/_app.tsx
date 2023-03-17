import '../styles/global.css'
import type { AppProps } from 'next/app'
import Layout from '../layout'
import { SecurityContextProvider } from '../context/SecurityContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SecurityContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SecurityContextProvider>
  )
}
