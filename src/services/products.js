//  import library axios untuk bikin request HTTP
import axios from "axios";

const api = process.env.NEXT_PUBLIC_API;

// fungsi buat ambil  semua data produk dari fake api
export const getProducts = async () => {
  // jalanin di dalem blok tryCatch
  try {
    // request GET ke url API pake axios.get
    const response = await axios.get(`${api}/products`);

    //kembaliin data produk yang di simpan daam response
    return response.data;
  } catch (error) {
    // error handling
    throw new Error("Failed to fetch data : ", error);
  }
};

export const getProductById = async (id) => {
  try {
    const res = await axios.get(`${api}/products/${id}`);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data : ", error);
  }
};
