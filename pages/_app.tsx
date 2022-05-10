import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { configureStoreInitial } from '../redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Provider store={configureStoreInitial}>
    <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
