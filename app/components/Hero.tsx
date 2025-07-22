"use client";
import { Typewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  function handleType(count: number): void {
    // Log the current word index being typed
    console.log(`Currently typing word #${count + 1}`);
  }

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full mx-auto object-cover border bg-purple-100 border-purple-200"
        src="/profile.jpg"
        alt="Profile picture"
        width={128}
        height={128}
      />

      <div className="z-20">

      <h1 className="text-5xl lg:text-6xl font-semibold px-10 text-gray-500 uppercase tracking-[20px]">Yattish Ramhorry</h1>
      <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
        Software Engineer{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>
          <Typewriter
            words={["Eat", "Sleep", "Code", "Repeat!"]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h2>

      <div className="pt-5">
        
        <Link href="#about"> <button className="heroButton">About</button></Link>
        
        <Link href="#experience"><button className="heroButton">Experience</button></Link>
        
        <Link href="#skills"><button className="heroButton">Skills</button></Link>
        
        <Link href="#projects"><button className="heroButton">Projects</button></Link>
      </div>
      </div>

    </div>
  );
}

export default Hero;
