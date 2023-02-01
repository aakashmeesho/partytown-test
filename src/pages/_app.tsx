/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import AxiosInterceptor from "common/components/wrapper/AxiosInterceptor";
import Script from "next/script";
import { wrapper } from "store";

function App({ Component, pageProps }) {
  return (
    <AxiosInterceptor>
      <Component {...pageProps} />

      <Script
        strategy="worker"
        // defer
        src={`https://www.googletagmanager.com/gtag/js?id=UA-113318580-5`}
      />

      <Script
        strategy="worker"
        // defer
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              window.gtag = function gtag(){window.dataLayer.push(arguments);}
              window.gtag('js', new Date());

              window.gtag('config', 'UA-113318580-5', {
                page_path: window.location.pathname,
              });
          `,
        }}
      />

      {/* <Script
        strategy="worker"
        // defer
        dangerouslySetInnerHTML={{
          __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.defer=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-P26GWWS');
    `,
        }}
      /> */}
    </AxiosInterceptor>
  );
}

export default wrapper.withRedux(App);
