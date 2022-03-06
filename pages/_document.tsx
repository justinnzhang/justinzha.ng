import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { theme } from '../theme';

const APP_NAME = "👋 Hi! I'm Justin Zhang";
const PREVIEW_IMAGE = '/preview-image.png';
const PREVIEW_ALT = 'Hi, my name is Justin Zhang. Welcome to my landing site!';
const APP_DESCRIPTION = 'My landing page with a collection of links';
const APP_URL = 'https://justinzha.ng';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='application-name' content={APP_NAME} />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          <meta name='apple-mobile-web-app-title' content={APP_NAME} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content='#3182CE' />

          {/* add your own app-icon */}
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link rel="shortcut icon" href="/app-icon.png" /> */}
          <link rel='manifest' href='/manifest.json' />

          <meta name='description' content={APP_DESCRIPTION} />

          <meta itemProp='name' content={APP_NAME} />
          <meta itemProp='description' content={APP_DESCRIPTION} />
          <meta itemProp='image' content={PREVIEW_IMAGE} />

          <meta name='twitter:card' content='summary_large_image' />
          {/* <meta name='twitter:site' content='@justinnzhang' /> */}
          <meta name='twitter:title' content={APP_NAME} />
          <meta name='twitter:description' content={APP_DESCRIPTION} />
          <meta name='twitter:creator' content='@justinnzhang' />
          <meta name='twitter:image' content={PREVIEW_IMAGE} />
          <meta name='twitter:image:alt' content={PREVIEW_ALT} />

          <meta property='og:title' content={APP_NAME} />
          <meta property='og:type' content='website' />
          <meta property='og:url' content={APP_URL} />
          <meta property='og:image' content={PREVIEW_IMAGE} />
          <meta property='og:image:url' content={PREVIEW_IMAGE} />
          <meta property='og:image:alt' content={PREVIEW_ALT} />
          <meta property='og:description' content={APP_DESCRIPTION} />
          <meta property='og:site_name' content={APP_NAME} />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
