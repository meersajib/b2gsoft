import '../styles/globals.css'
import { StatusProvider } from '../Context/StatusContext';
import Layout from '../components/Layout/Layout';




function MyApp({ Component, pageProps }) {
  return (
    <StatusProvider>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </StatusProvider>
  )
}

export default MyApp
