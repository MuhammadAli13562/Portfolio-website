"use client";

import Cursor from "@/shared/ui/Cursor";
import Intro from "@/shared/ui/Intro";
import Navbar from "@/shared/ui/Navbar";
import {
  FirstScroll,
  FourthScroll,
  SecondScroll,
  ThridScroll,
} from "@/shared/ui/sections";

export default function Home() {
  return (
    <div className="relative">
      <Intro />
      <Navbar />
      <FirstScroll />
      <SecondScroll />
      <ThridScroll />
      <FourthScroll />
      <Cursor />
    </div>
  );
}
