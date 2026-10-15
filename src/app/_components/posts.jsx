import { cards } from "../_constants/cards";
import Image from "next/image";
export default function Posts() {
  return (
    <main className="w-full h-auto flex flex-col p-3 gap-5 ">
      {cards.map((value, idx) => (
        <div
          key={idx}
          className="w-full h-50 bg-white p-2 grid grid-rows-[4fr_1fr] rounded-2xl text-black gap-2"
        >
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <Image src={value.img} fill className="object-cover" alt="" />
          </div>
          <div className="w-full h-auto flex justify-between items-center p-2">
            <span className="text-sm">{value.text}</span>
            <span className="font-bold">{":"}</span>
          </div>
        </div>
      ))}
    </main>
  );
}
