import '../styles/global.css'
import Footer from '../components/Footer'
import { useRouter } from "next/router"
import { useEffect } from "react"
import Head from "next/head";
import CookieConsent from 'react-cookie-consent';


// const dotenv = require('dotenv');
// dotenv.config();

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = url => {
      window.gtag('config', 'G-8EBET01HNJ', {
        page_path: url,
      });
    }
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events]);

  return (
    <>
    <Head>
        <link rel="shortcut icon" type ="image/x-icon" href="/images/logodry.ico?" />
    </Head>
    

    <CookieConsent
      enableDeclineButton
      flipButtons
      location="bottom"
      buttonText="Consent"
      declineButtonText="Refuse"
      cookieName="dry-cookie"
      style={{ background: 'blue' }}
      buttonStyle={{
        color: 'white',
        fontSize: '15px',
        background: 'Magenta',
        borderRadius: '5px',
        width: '120px',
        height: '50px',
      }}
      declineButtonStyle={{
        color: 'white',
        fontSize: '15px',
        background: 'Plum',
        borderRadius: '5px',
        width: '120px',
        height: '50px',
      }}
      expires={450}
    >
      Cookies are utilized on this website to improve the user experience.
  </CookieConsent>
    
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}
