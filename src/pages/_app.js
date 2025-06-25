import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/Scroll-to-top";
import LoadingScreen from "../components/Loading-Screen";
import '@fortawesome/fontawesome-free/css/all.min.css';

import "../styles/globals.css";

// ⬇️ Import your layout
import AppLayout from "../layouts/AppLayout";

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Head>
        <title>OZI</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <Cursor />
      <LoadingScreen />
      <ScrollToTop />
      <Component {...pageProps} />

      {/* Required Scripts */}
      <Script strategy="beforeInteractive" id="wow" src="/js/wow.min.js" />
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      />
      <Script
        id="simpleParallax"
        src="/js/simpleParallax.min.js"
      ></Script>
      <Script strategy="beforeInteractive" id="isotope" src="/js/isotope.pkgd.min.js" />
      <Script strategy="lazyOnload" id="initwow" src="/js/initWow.js" />
    </AppLayout>
  );
}

export default MyApp;
