import Image from "next/image";
import { LuShare } from "react-icons/lu";
import { About } from "../_constants/about";
import { References } from "../_constants/references";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full md:w-1/4 h-auto grid grid-rows-[1fr_auto] p-3 rounded ">
      <div className="w-full h-auto flex justify-end items-center gap-1">
        <button className="w-20 h-10 bg-black rounded p-1 flex justify-center items-center">
          Subscribe
        </button>
        <button className="w-10 h-10 bg-gray-100 rounded p-1 flex justify-center items-center text-black">
          <LuShare />
        </button>
      </div>
      <div className="w-full h-auto flex flex-col justify-between items-center gap-1">
        <Image
          src={"/minha-foto.jpeg"}
          width={130}
          height={130}
          alt="profile foto"
          className="rounded-full"
          loading="eager"
        />
        <h1 className="text-3xl font-extrabold">{About.name}</h1>
        <p className="text-xl font-extrabold">{About.hardSkills}</p>
        <div className="w-full h-auto flex flex-row p-5">
          {References.map((value, idx) => (
            <Link
              key={idx}
              href={value.link}
              className="w-full h-auto flex flex-col text-xl"
            >
              {value.icon}
              <button></button>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
