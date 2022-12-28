/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://images.meesho.com" />
          <link rel="dns-prefetch" href="https://images.meesho.com" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="dns-prefetch" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://connect.facebook.net" />
          <link rel="dns-prefetch" href="https://connect.facebook.net" />

          <link
            rel="preload"
            as="style"
            href={`${process.env.NEXT_FONTS_URL}/css/mier-fonts.css?display=swap`}
          />
          <link
            href={`${process.env.NEXT_FONTS_URL}/css/mier-fonts.css?display=swap`}
            rel="stylesheet"
          />
          <link rel="manifest" href="/manifest.json" />
          <script async type="text/javascript" src="/perf.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
