"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./globals.css";
import { propagateServerField } from "next/dist/server/lib/render-server";

// function Next() {
//   const [click, setClick] = useState<number>(0);
//   const [hover, setHover] = useState<boolean>(false);
//   const handleClick = () => {
//     setClick((prevClick) => prevClick + 1);
//   };
//   const resetClick = () => {
//     setClick(0);
//   };
//   return (
//     <>
//       <ClickButton
//         click={click}
//         handleClick={handleClick}
//         handleHover={() => setHover((Hover) => !Hover)}
//         hover={hover}
//         resetClick={resetClick}
//       ></ClickButton>
//     </>
//   );
// }
// function ClickButton({
//   click,
//   handleClick,
//   hover,
//   handleHover,
//   resetClick,
// }: {
//   click: number;
//   handleClick: () => void;
//   hover: boolean;
//   handleHover: () => void;
//   resetClick: () => void;
// }) {
//   return (
//     <div
//       className={`flex flex-col gap-[20px] bg-[green] items-center h-[500px] justify-center ${
//         hover ? "bg-[blue]" : "bg-rose-900"
//       }`}
//       onMouseEnter={handleHover}
//       onMouseLeave={handleHover}
//     >
//       <button
//         className="bg-white text-black h-32 w-32 rounded hover:bg-black hover:text-white"
//         onClick={handleClick}
//       >
//         Click {click} {hover ? "hovering" : "not hovering"}
//       </button>
//       <button
//         className="bg-white rounded text-black hover:bg-black hover:text-white"
//         onClick={resetClick}
//       >
//         Reset
//       </button>
//     </div>
//   );
// }
export default function ChangeColor() {
  const [color, setColor] = useState<string>("");
  const getColor = (inputColor: string) => {
    setColor(inputColor);
  };
  console.log(color);
  return (
    <div className="flex npm flex-col items-center justify-center h-screen gap-10">
      <div
        className={`h-[300px] w-[300px] border-white border-2 bg-[${color}]`}
      ></div>
      <UserColor getColor={getColor}></UserColor>
    </div>
  );
}
function UserColor({ getColor }: { getColor: (inputColor: string) => void }) {
  const [activeColor, setActivecolor] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(e.target.value);
    setActivecolor(value);
    getColor(value);
  };
  return (
    <input
      className="rounded focus:outline-none"
      type="text"
      onChange={handleChange}
      value={activeColor}
    />
  );
}
