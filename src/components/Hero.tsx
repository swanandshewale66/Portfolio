import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import myImage from "../images/InstaSquare_202331921958567.jpg";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Swanand!",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media.licdn.com/dms/image/D4D03AQGKmaub6A3Mog/profile-displayphoto-shrink_800_800/0/1679296301538?e=2147483647&v=beta&t=j7M6Nn9SRD2k2LBm81rvuS85owTEPsEeqC2MJoM96U8"
        alt="my-picture"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1>
          <span className="text-5xl lg:text-6xl font-semibold px-10">
            {text}
          </span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButtons">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButtons">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButtons">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButtons">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
