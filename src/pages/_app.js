import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { useEffect } from "react";
import { setIsLargeScreen, setIsMobileScreen } from "@/redux/screenSlice/screenSlice";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    function handleResize() {
      //  dispatch : untuk ngirim aksi yang memicu pembaruan nilai state
      store.dispatch(setIsMobileScreen(window.innerWidth < 768));
      store.dispatch(setIsLargeScreen(window.innerWidth >= 1240));
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

/** file _app.js dibuat otomatis oleh nextjs
 * fungsinya buat menerapkan perilaku/elemen global yang di butuhin semua halaman/aplikasi nextjs
 * 1. untuk ngatur layout global
 * 2. untuk mengelelola state global
 * 3. menggunkaan CSS global yang berlaku disemua halaman
 */
