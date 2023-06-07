import Footer from "@/components/footer";
import Header from "@/components/header";
import "../styles/global.css";
import Social from "@/components/social";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Baluraj</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Social />
      <Footer />
    </>
  );
}

export default MyApp;
