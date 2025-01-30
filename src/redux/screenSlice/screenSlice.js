import { createSlice } from "@reduxjs/toolkit";

/** createSlice : fungsi untuk bikin slice dari redux store yang berisi reducer dan action
 * yang merupakan bagian dari state
 */
const screenSlice = createSlice({
  name: "screen", // nama slice ini
  //   sama kaya const [data, ...] = useState(false)
  initialState: {
    isMobileScreen: false,
    isLargeScreen: false,
    username: "",
  },
  // reducers: objek yang berisi kumpulan reducer yang akan dipake buat ngubah state slice
  reducers: {
    // setIsMobileScreen: nama reducer
    // sama kaya const [ state.data , setData] = useState(action.payload)
    setIsMobileScreen: (state, action) => {
      // untuk mengubah/perbarui nilai state isMobileScreen menjadi nilai ynag dikirim dari action.payload
      state.isMobileScreen = action.payload;
    },
    setIsLargeScreen: (state, action) => {
      state.isLargeScreen = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

/** ekspor action creator yang bernama setIsMobileScreen dari slice screenSlice untuk ngirim action ke store redux
 * dan memicu perubahan state
 */
export const { setIsMobileScreen, setIsLargeScreen, setUsername } = screenSlice.actions;

export default screenSlice.reducer; // // export reducer biar bisa di simpen kedalam store
