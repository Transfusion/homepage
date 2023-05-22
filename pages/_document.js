import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from 'styled-components'

const themeInitializerScript = `
  (function () {
    document.body.dataset.theme = window.localStorage.getItem("theme") || "light";
    console.log("frog", document.body.dataset.theme);
    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', document.body.dataset.theme === 'dark' ? '#000' : '#fffffe');
  })();
`;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>

          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />

          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#fff" />

          {/* OGP */}

          <meta property="og:title" content="Bryan Kok's Portfolio" />
          <meta property="og:description" content="Software engineer passionate about modern microservice-oriented backend technologies. Seeking opportunities to implement distributed, scalable, and maintainable systems." />

        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: themeInitializerScript }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;