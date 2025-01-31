import { formatCurrency } from "@/helpers/util/formatCurrency";
import { getProductById } from "@/services/products";
import axios from "axios";
import React from "react";
import useSWR from "swr";

/** useSWR(Stale while revalidate) : hooks third party dari tim vercel untuk fetching data, caching dan revalidate di sisi klien
 * rumus : const { data, error, isLoading, isValidating } = useSWR(key(endpoint), dataFetcher)
 * srw pnya beberapa properti
 * data : Data yang diambil dari API
 * error : error handling saat ambil data
 * isLoading: status loading
 * isValidating : status validasi ulang data(perbarui data)
 */
const ProductDetailPage = ({ detailProduct }) => {
  const api = process.env.NEXT_PUBLIC_API;

  const { data, error, isLoading, isValidating } = useSWR(
    `${api}/products/${detailProduct?.id}`,
    async () => {
      const res = await axios.get(`${api}/products/${detailProduct?.id}`);
      return res.data;
    },
    {
      initialData: detailProduct,
      refreshInterval: 1000,
    }
  );

  if (error) return <div className="h-screen text-8xl text-center">Gagal mengambil data</div>;
  if (isLoading) return <div className="h-screen text-8xl text-center">Sedang memuat data ...</div>;

  return (
    <>
      <div className="flex flex-col px-5 py-5 bg-gradient-to-b from-black to-blue-900 min-h-screen">
        <h1 className="text-4xl font-bold text-white">Detail Produk</h1>
        <div className="p-4 mt-5 rounded-2xl bg-white bg-opacity-20 max-w-xl">
          <h2 className="text-2xl font-bold text-white">{data?.title}</h2>
          <p className="text-white font-semibold mt-5">{data?.description}</p>
          <p className="text-white text-xl font-bold mt-5">{formatCurrency(data?.price, "en-US", "USD")}</p>
        </div>
        {isValidating && <p className="text-white font-bold text-6xl mt-4">Memperbarui data ...</p>}
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
