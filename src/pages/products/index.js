import Button from "@/components/atoms/Button";
import CardProduct from "@/components/molecules/CardProduct";
import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { data } from "@/constant/products";
import Icons from "@/components/atoms/icons";

const ProductPage = () => {
  // useState sebutan variabel di react
  const [username, setUsername] = useState("");
  const [cart, setCart] = useState([]);
  // const [total, setTotal] = useState(0); // useMemo ga butuh state
  const footerRef = useRef();
  const [showBackToTop, setShowBackToTop] = useState(false);
  /** useRef : hooks untuk membuat referensi ke elemen DOM/fungsi untuk mengakses elemen DOM */

  // useEffect buat nanganin side effect/efek dari perubahan suatu data yang dijalankan tiap kali halaman di load
  useEffect(() => {
    const getUsername = localStorage.getItem("username");

    if (getUsername) {
      setUsername(getUsername);
    }

    // ambil data dari localStorage lalu parsing, tambahin logic || [] biar ga error ketika data dari localStorage kosong
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []); /** [] dependensi array : kalo kosong buat mastiin kalo useEffect dijalanin cuma sekali setiap kali halaman diload
  kalo ada state didalam dependensi array maka fungsinya untuk mantau perubahan di state tsb*/

  // fungsi untuk emnambahkan produk ke cart
  const handleAddToCart = (id) => {
    // logic untuk ngecek kalo priduk dengan id yang sama di tambahkan lebih dari 1 maka akan menambahkan jumlah qty +1
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      // kalo fungsi cuma sekali ditrigger maka cuma nambagin satu produk doang ke cart
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  /** useCallback : hooks buat nyimpen fungsi ke dalam cache,
   * tujuannya biar fungsi tsb ga perlu dijalanin/dihitung ulang ketika tidak ada perubahan pada nilainya
   */
  const calculateTotal = useCallback(() => {
    return cart.reduce((total, item) => {
      const product = data.find((product) => product.id === item.id);
      return total + product.price * item.qty;
    }, 0);
  }, [cart]); // dependency array

  // panggil fungsi useCallback buat daperin nilai total
  const cartTotal = calculateTotal();

  useEffect(() => {
    if (cart.length > 0) {
      // const sumTotal = cart.reduce((total, item) => {
      //   const product = data.find((product) => product.id === item.id);
      //   return total + product.price * item.qty;
      // }, 0);
      // setTotal(sumTotal);

      //  simpen data cart ke localStoragelalu convert data cart ke JSON krna localStorage cuma bisa nyimpen data JSON
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // event handler untuk menjalankan fungsi logout dan ngapus data username & password dari localStorage
  function handleLogout() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("cart");
    window.location.href = "/login";
  }

  useEffect(() => {
    function handleScroll() {
      // ambil nilai offsetTop(posisi vertikal) dari elemen footer yang direferensikan oleh footerRef
      const footerTop = footerRef.current.offsetTop; //ambil batas atas komponen

      // ambil tinggi innerHeight dari objek window(tinggi viewport tanpa toolbar & scrollbar)
      const viewportHeight = window.innerHeight;

      // ambil nilai scrollY dari objek window(posisi scroll vertikal(sumbu Y) dilayar)
      const scrollPosition = window.scrollY;

      // logic untuk ngecek apakah posisi scroll dilayar telah mencapai elemen footer
      if (scrollPosition + viewportHeight >= footerTop) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    }

    // event listener buat jalanin fungsi handleScroll setiap event scroll terjadi
    window.addEventListener("scroll", handleScroll);

    // unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [footerRef]); // jalanin side effect ini tiap kali nilai footerRef berubah

  function handleBackToTop() {
    // balikin scroll keatas dengan animasi smooth
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <div className="flex justify-between items-center bg-black text-white font-bold px-5 py-4">
        <h1 className="text-xl">Hi, {username}</h1>
        <Button buttonClassname={"bg-red-500 hover:bg-red-700"} onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex px-5 py-8">
        {/* products */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-blue-500 uppercase mb-4">Products</h1>
          <div className="flex flex-wrap gap-4">
            {data.map((item) => (
              <CardProduct key={item.id}>
                <CardProduct.Header image={item.image} />
                <CardProduct.Body title={item.title} desc={item.description} />
                <CardProduct.Footer price={item.price} handleAddToCart={handleAddToCart} id={item.id} />
              </CardProduct>
            ))}
          </div>
        </div>

        {/* cart */}
        {cart.length > 0 && (
          <div className="w-2/6">
            <h1 className="text-3xl font-bold text-blue-500 mb-4 uppercase">Cart</h1>
            <div className="flex flex-col gap-2">
              {cart.map((item) => {
                const datas = data.find((data) => data.id === item.id);
                return (
                  <div className="flex p-4 border rounded-lg" key={item.id}>
                    <Image className="rounded" width={100} height={100} src={datas.image} alt="cart image" />
                    <div className="flex justify-between w-full">
                      <div className="flex flex-col justify-between ml-3">
                        <span className="font-bold text-xl">{datas.title}</span>
                        <span className="font-semibold">{datas.price}</span>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <span className="mb-1">Qty</span>
                        <span className="flex justify-center items-center font-semibold p-2 border rounded-sm text-center w-10 h-10">
                          {item.qty}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between px-4 py-2 border mt-2 font-semibold rounded-lg">
              <span>Total</span>
              <span>{cartTotal}</span>
            </div>
          </div>
        )}
      </div>

      {/* footer */}
      {showBackToTop && (
        <div onClick={handleBackToTop} className="fixed bottom-20 right-5 bg-gradient-hover p-2 rounded-full">
          <Icons.DoubleArrowUp />
        </div>
      )}
      <footer ref={footerRef} className="text-center p-5 bg-black text-white w-full">
        All right reserved &copy; || by Danu
      </footer>
    </>
  );
};

export default ProductPage;
