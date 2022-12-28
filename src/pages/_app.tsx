/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import AxiosInterceptor from "common/components/wrapper/AxiosInterceptor";
import { wrapper } from "store";

function App({ Component, pageProps }) {
  return (
    <AxiosInterceptor>
      <Component {...pageProps} />
    </AxiosInterceptor>
  );
}

export default wrapper.withRedux(App);
