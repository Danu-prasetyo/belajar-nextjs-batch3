import Button from "@/components/atoms/Button";
import CardProduct from "@/components/molecules/CardProduct";
import React, { useEffect, useState } from "react";

// anggap data dari API/BE
const data = [
  {
    id: 1,
    image: "/images/odeng.jpg",
    title: "Odeng 1",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, temporibus?",
    price: 12345678,
  },
  {
    id: 2,
    image: "/images/odeng.jpg",
    title: "Odeng 2",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, temporibus?",
    price: 12345678,
  },
  {
    id: 3,
    image: "/images/odeng.jpg",
    title: "Odeng 3",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, temporibus?",
    price: 12345678,
  },
];

const ProductPage = () => {
  const [username, setUsername] = useState("");
  // useState sebutan variabel di react
  let name = "danu";
  name = "dani";

  // useEffect buat nanganin side effect/efek dari perubahan suatu data yang dijalankan tiap kali halaman di load
  useEffect(() => {
    const getUsername = localStorage.getItem("username");

    if (getUsername) {
      setUsername(getUsername);
    }
  }, []); /** [] dependensi array : kalo kosong buat mastiin kalo useEffect dijalanin cuma sekali setiap kali halaman diload
  kalo ada state didalam dependensi array maka fungsinya untuk mantau perubahan di state tsb*/
  useEffect(() => {
    if (username) {
      console.log("username adalah ", username);
    } else {
      console.log("username not found");
    }
  }, [username]);

  // event handler untuk menjalankan fungsi logout dan ngapus data username & password dari localStorage
  function handleLogout() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.href = "/login";
  }
  return (
    <>
      <div className="flex justify-between items-center bg-black text-white font-bold px-5 py-4">
        <h1 className="text-xl">Hi, {username}</h1>
        <Button buttonClassname={"bg-red-500 hover:bg-red-700"} onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center items-center min-h-screen gap-2">
        {/* nested component */}
        <CardProduct>
          <CardProduct.Header image="/images/odeng.jpg" />
          <CardProduct.Body
            title={"Odeng"}
            desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, temporibus?"
          />
          <CardProduct.Footer price={"2000"} />
        </CardProduct>
        {/* Rendering list : teknik untuk nampilin beberapa elemen UI tertentu
      berdasarkan data dinamis yang di simpan dalam sebuah JSON */}
        {data.map((item) => (
          <CardProduct key={item.id}>
            <CardProduct.Header image={item.image} />
            <CardProduct.Body title={item.title} desc={item.description} />
            <CardProduct.Footer price={item.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
