import { explorer } from "../_constants/explore";
import { ShortReferences } from "../_constants/references";
import Image from "next/image";
export default function Links() {
  return (
    <main className="w-full h-auto flex flex-col gap-1 p-5">
      {ShortReferences.map((value, idx) => (
        <button
          className="w-full h-15 bg-white rounded-xl text-black flex justify-between items-center pr-5 pl-3 cursor-pointer"
          key={idx}
        >
          <span className="text-xl">{value.icon}</span>
          <span className="text-sm">{value.text}</span>
          <span className="font-bold">{":"}</span>
        </button>
      ))}
      <div className="w-full h-auto flex justify-center items-center">
        <h1>Reach me & explore everthing I create :)</h1>
      </div>
      <div className="w-full h-auto flex flex-col gap-1">
        {explorer.map((value, idx) => (
          <button
            className="w-full h-15 bg-white rounded-xl text-black flex justify-between items-center pr-5 pl-2 cursor-pointer"
            key={idx}
          >
            <Image
              src={value.img}
              width={35}
              height={0}
              alt=""
              className="rounded"
            />
            <span className="text-sm">{value.text}</span>
            <span className="font-bold">{":"}</span>
          </button>
        ))}
      </div>
    </main>
  );
}
