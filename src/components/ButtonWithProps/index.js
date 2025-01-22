import React from "react";

/** Props (singkatan dari properties)
 * cara untuk ngirim data/state dari komponen satu ke komponen lain
 * props bisa dipake buat kustomisassi gaya, ngirim atau nerima data dari API dan sebagainya
 */
const ButtonWithProps = ({ text, className = "bg-blue-500 hover:bg-blue-700" }) => {
  return <button className={`h-10 px-6 font-semibold text-white ${className}`}>{text}</button>;
};

export default ButtonWithProps;
