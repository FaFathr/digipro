import { PersistGate } from "redux-persist/integration/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ReduxPersistStore, persistor } from "../redux/ReduxPersistStore";
import { Store } from "@/redux/Store";
import "../styles/globals.css";
import localFont from "next/font/local";
import { Provider } from "react-redux";

export const iranSanseWeb  = localFont({
  src: "../public/fonts/IRANSansWeb.woff",
}); 
function MyApp({ Component, pageProps }){
  return (
    
    <>
    <Provider store={ReduxPersistStore}>
      <PersistGate loading={<h1>loading...</h1>} persistor={persistor}>
        <main className={iranSanseWeb.className}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </main>
      </PersistGate>
    </Provider>
  </>
);
}
export default MyApp;