import Button from "@/components/Button";
import ButtonWithProps from "@/components/ButtonWithProps";
import Card from "@/components/CardWithChildren";
import Image from "next/image";

export default function Home() {
  // anggap ini data dari API
  const data = {
    text: "klik aku",
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen gap-4">
        {/* button biasa */}
        <button className="h-10 px-6 font-semibold bg-blue-500 hover:bg-blue-700 text-white">Click me!</button>
        {/* button dengan basis komponen (single close tag) */}
        <Button />
        {/* komponen button dengan props */}
        <ButtonWithProps text={data.text} className="bg-red-500 hover:bg-red-700" />
        {/* kompnen dengan props children */}
        <Card cardClassname={"p-4 border"}>
          <Image src="/images/aigenlogoblack.png" alt="nextjs logo" width={300} height={300} />
          <h2 className="text-xl font-bold my-3">Card Title</h2>
          <p className="mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, animi?</p>
          <ButtonWithProps text={"test"} className="w-full bg-yellow-500 hover:bg-yellow-700" />
        </Card>
      </div>
    </>
  );
}
