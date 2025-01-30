import { useLogin } from "@/hooks/useLogin";
import { useEffect, useState } from "react";

export default function Home() {
  //  anggap state ini nyimpen data yang di kirim dari API
  const [data, setData] = useState(true);
  const [isMobile, setIsMobile] = useState({
    width: 0,
    height: 0,
    mobile: false,
  });
  const username = useLogin();
  /** useState : hooks react untuk membuat state ke functional component
   * state: variabel yang dipake buat nyimpen data
   * data : state yang nyimpen nilai awal data
   * setData : fungsi untuk memperbarui nilai data
   * true (boolean) : tipe data dari nilai awal state data
   * ketika setData dipanggil dengan nilai baru, react akan merender ulang komponen dengan nilai state yang baru
   */

  // fungsi untuk memperbarui nilai state
  const handleChange = () => {
    // mengubah state data dari nilai awal true menjadi false
    // setData(false);

    // fungsi anonymous yang akan ngerubah nilai boolean dari true ke false lalu dari false ke true dan seterusnya
    setData((prevState) => !prevState);
  };

  useEffect(() => {
    // mounting
    setIsMobile({
      width: window.innerWidth,
      height: window.innerHeight,
      mobile: false,
    });

    // updating
    window.addEventListener("resize", (event) => {
      setIsMobile({
        width: event.target.innerWidth,
        height: event.target.innerHeight,
        mobile: window.innerWidth < 450 ? true : false,
      });
    });

    // unmounting
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [isMobile.mobile]);
  /** UseEffect : hooks di react buat nambahin side effect ke state
   * useEffect biasanya dipake buat memperbarui data/komponen ketika ada perubahan pada state
   * [] (array kosong/dependency array : jika array kosong maka argumen tersebut untuk menjalankan useEffect sekali,
   jika ada state didalam array tsb maka untuk memantau setiap ada perubahan pada state tsb dan menjalankan useEffect ketika state berubah)
   */
  console.log(isMobile.width);
  console.log(isMobile.mobile);

  return (
    <>
      <div className={`flex flex-col justify-center items-center h-screen gap-4 ${data ? "bg-black" : "bg-slate-200"}`}>
        {data ? (
          <h1 className="text-6xl font-bold bg-black p-8 text-white">Data</h1>
        ) : (
          <h1 className="text-6xl font-bold bg-blue-500 p-8">Updated Data</h1>
        )}
        {isMobile.mobile && <p className="text-red-500 font-bold text-2xl">ini ukuran Mobile</p>}
        <button onClick={handleChange} className="mt-4 p-4 bg-blue-500 text-white font-bold rounded">
          change mode
        </button>

        <p className="text-8xl font-bold">Hi, {username}</p>
      </div>
    </>
  );
}
