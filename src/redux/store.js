import { configureStore } from "@reduxjs/toolkit";
import screenSlice from "./screenSlice/screenSlice";

/** Store : objek yang nyimpen semua state aplikasi
 * dan menyediakan method untuk dispacth(ngirim) action dan mengakses state
 */

export const store = configureStore({
  reducer: {
    // panggil reducer-reducer yang udah dibuat
    screen: screenSlice,
  },
});

export default store;
