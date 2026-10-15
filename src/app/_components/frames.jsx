'use client'
import Posts from "./posts";
import Links from "./links";
import Navigator from "./navigator";
import { useState } from "react";


export default function Frames(){
    const [frame, setframe] = useState("/links");

    return (
      <main className="w-full md:w-1/4 h-auto flex flex-col justify-center items-center gap-5">
        <Navigator frame={frame} setframe={setframe} />
        {frame === "/links" ? <Links /> : <Posts />}
      </main>
    );
}