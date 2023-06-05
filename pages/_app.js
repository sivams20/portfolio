import Footer from "@/components/footer";
import Header from "@/components/header";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
