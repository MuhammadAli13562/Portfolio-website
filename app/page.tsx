"use client";

import FirstScroll from "@/shared/ui/FirstScroll";
import FourthScroll from "@/shared/ui/FourthScroll";
import Intro from "@/shared/ui/Intro";
import Navbar from "@/shared/ui/Navbar";
import SecondScroll from "@/shared/ui/SecondScroll";
import ThridScroll from "@/shared/ui/ThridScroll";

export default function Home() {
  return (
    <div>
      <Intro />
      <Navbar />
      <FirstScroll />
      <SecondScroll />
      <ThridScroll />
      <FourthScroll />
    </div>
  );
}
