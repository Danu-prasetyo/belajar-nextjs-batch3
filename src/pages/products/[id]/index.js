import { formatCurrency } from "@/helpers/util/formatCurrency";
import { getProductById } from "@/services/products";
import React from "react";

const ProductDetailPage = ({ detailProduct }) => {
  return (
    <>
      <div className="flex flex-col px-5 py-5 bg-gradient-to-b from-black to-blue-900 min-h-screen">
        <h1 className="text-4xl font-bold text-white">Detail Produk</h1>
        <div className="p-4 mt-5 rounded-2xl bg-white bg-opacity-20 max-w-xl">
          <h2 className="text-2xl font-bold text-white">{detailProduct?.title}</h2>
          <p className="text-white font-semibold mt-5">{detailProduct.description}</p>
          <p className="text-white text-xl font-bold mt-5">{formatCurrency(detailProduct.price, "en-US", "USD")}</p>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const id = context.query.id;
  const { query } = context;
  console.log(query.id);

  try {
    const detailProduct = await getProductById(id);

    // validasi kalo misal data tidak ditemukan kembalikan 404
    if (!detailProduct) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        detailProduct,
      },
    };
  } catch (error) {
    console.log(error);

    //cara kedua 404 handling di level catch
    // if (error.response.data.status === 404) {
    //   return {
    //     notFound: true,
    //   };
    // }

    // 500 page
    return {
      props: {
        error: "error",
      },
    };
  }
}

export default ProductDetailPage;
