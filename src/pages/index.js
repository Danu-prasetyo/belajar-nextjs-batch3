import { isMobileScreenAtom } from "@/atoms/atoms";
import { useLogin } from "@/hooks/useLogin";
import { useAtom } from "jotai";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  //  anggap state ini nyimpen data yang di kirim dari API
  const [data, setData] = useState(true);
  const username = useLogin();
  // const { isMobileScreen } = useSelector((state) => state.screen);
  // useAtom buat make state global
  const [isMobileScreen] = useAtom(isMobileScreenAtom);
  console.log("mobile : ", isMobileScreen);

  // fungsi untuk memperbarui nilai state
  const handleChange = () => {
    // mengubah state data dari nilai awal true menjadi false
    // setData(false);

    // fungsi anonymous yang akan ngerubah nilai boolean dari true ke false lalu dari false ke true dan seterusnya
    setData((prevState) => !prevState);
  };

  return (
    <>
      <div className={`flex flex-col justify-center items-center h-screen gap-4 ${data ? "bg-black" : "bg-slate-200"}`}>
        {data ? (
          <h1 className="text-6xl font-bold bg-black p-8 text-white">Data</h1>
        ) : (
          <h1 className="text-6xl font-bold bg-blue-500 p-8">Updated Data</h1>
        )}
        {isMobileScreen && <p className="text-red-500 font-bold text-2xl">ini ukuran Mobile</p>}
        <button onClick={handleChange} className="mt-4 p-4 bg-blue-500 text-white font-bold rounded">
          change mode
        </button>

        <p className="text-8xl font-bold">Hi, {username}</p>
      </div>
    </>
  );
}
