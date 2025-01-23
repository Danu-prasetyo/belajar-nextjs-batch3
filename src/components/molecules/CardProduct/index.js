import Button from "@/components/atoms/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

/** Nested component : fungsinya sebagai wadah/container untuk beberapa komponen anak(header,body,footer)
 * komponen ini akan jadi kompone pembungkus untuk komponen children
 */

const CardProduct = ({ children }) => {
  return (
    <>
      <div className="rounded-lg bg-gradient-aigen shadow-xl p-1">
        <div className="w-full max-w-xs bg-white rounded-lg">{children}</div>
      </div>
    </>
  );
};

function Header({ image }) {
  return (
    <Link href="#">
      <Image src={image} alt="card image" className="p-4 rounded-t-lg w-full" width={300} height={300} />
    </Link>
  );
}

function Body({ title, desc }) {
  return (
    <div className="px-5 pb-5">
      <Link href="#">
        <h3 className="text-3xl font-bold text-slate-900">{title}</h3>
        <p className="mt-3 text-slate-700 text-base text-justify">{desc}</p>
      </Link>
    </div>
  );
}

function Footer({ price }) {
  return (
    <div className="flex flex-col items-center justify-center px-5 pb-5">
      <span className="text-2xl font-semibold mb-2">{price}</span>
      <Button buttonClassname="bg-gradient-hover w-full">Beli</Button>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
