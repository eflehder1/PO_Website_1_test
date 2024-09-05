import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const montserrat = Montserrat({
  subsets: ['latin'],
});

// Replace 'G-XXXXXXXXXX' with your Google Analytics Measurement ID
const GA_TRACKING_ID = 'G-VM01F6JMXE';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      });
    };

    // Subscribe to route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup the event listener
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className={montserrat.className}>
      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-setup" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      {/* Render the rest of your application */}
      <Component {...pageProps} />
    </div>
  );
}

