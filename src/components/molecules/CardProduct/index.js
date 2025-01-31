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
        <div className="w-full h-full max-w-xs bg-white rounded-lg">{children}</div>
      </div>
    </>
  );
};

function Header({ image, link = "#" }) {
  return (
    <Link href={link}>
      <Image
        src={image}
        alt="card image"
        className="p-4 rounded-t-lg w-full aspect-video object-contain"
        width={300}
        height={300}
      />
    </Link>
  );
}

function Body({ title, desc, link = "#" }) {
  return (
    <div className="px-5 pb-5">
      <Link href={link}>
        <h3 className="text-3xl font-bold text-slate-900 line-clamp-2">{title}</h3>
        <p className="mt-3 text-slate-700 text-base text-justify line-clamp-4">{desc}</p>
      </Link>
    </div>
  );
}

function Footer({ price, handleAddToCart, id }) {
  return (
    <div className="flex flex-col items-center justify-center px-5 pb-5 mt-auto w-full">
      <span className="text-2xl font-semibold mb-2">
        {price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
      </span>
      <Button buttonClassname="bg-gradient-hover w-full" onClick={() => handleAddToCart(id)}>
        Beli
      </Button>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
