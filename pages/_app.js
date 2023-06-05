import Footer from "@/components/footer";
import Header from "@/components/header";
import "../styles/global.css";
import Social from "@/components/social";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Social />
      <Footer />
    </>
  );
}

export default MyApp;
