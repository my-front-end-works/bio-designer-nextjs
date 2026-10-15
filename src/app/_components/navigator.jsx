"use client";

import { Links } from "../_constants/links";
import { useState } from "react";
import { useEffect } from "react";

export default function Navigator({frame, setframe}) {

  return (
    <main className="w-auto h-auto rounded-full grid grid-cols-2 justify-center items-center bg-black/20">
      {Links.map((value) => (
        <button
          key={value.link}
          className={`relative z-10 rounded-full p-3 transition-colors duration-300 ${
            frame === value.link ? "bg-white rounded-full text-black" : ""
          } `}
          onClick={() => setframe(value.link)}
        >
          {value.title}
        </button>
      ))}
    </main>
  );
}
