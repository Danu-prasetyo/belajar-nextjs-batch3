import CardProduct from "@/components/molecules/CardProduct";
import React from "react";

const ProductPage = () => {
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

  return (
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
  );
};

export default ProductPage;
