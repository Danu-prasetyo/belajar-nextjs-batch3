import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

/** file _app.js dibuat otomatis oleh nextjs
 * fungsinya buat menerapkan perilaku/elemen global yang di butuhin semua halaman/aplikasi nextjs
 * 1. untuk ngatur layout global
 * 2. untuk mengelelola state global
 * 3. menggunkaan CSS global yang berlaku disemua halaman
 */
