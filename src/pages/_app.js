import Footer from "@/Footer";
import NavigationB from "@/NavigationB";
import "@/styles/globals.css";
// import index from "./Home/index.js";

export default function App({ Component, pageProps }) {
  return <>
    {/* <index.js /> */}
    <NavigationB/>
    <Component {...pageProps} />
    <Footer/>
  </>
}
