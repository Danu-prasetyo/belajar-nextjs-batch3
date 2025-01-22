import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

/** file _document.js dibuat otomatis di folder /src
 * fungsinya untuk menyesuaikan atau menambahkan informasi tambahan ke projek kita
 * strukturnya seperti <head> pada HTML
 *
 * kapan digunakannya?
 * 1. saat mau nambahin elemen ke dalam <head> yang berlaku untuk seluruh halaman(global)
 * kaya inject tag <script>, install google analytic, google tag manager dll
 * 2. saat menerapkan konfigurasi SEO(Seacrh Engine Optimization)
 */
