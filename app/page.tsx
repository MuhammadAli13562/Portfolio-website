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
import { useAnimationControls } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const thirdAnimationControls = useAnimationControls();
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);

  return (
    <div className="relative">
      <Intro />
      <Navbar thirdAnimationControls={thirdAnimationControls} />
      <FirstScroll />
      <SecondScroll />

      <ThridScroll thirdAnimationControls={thirdAnimationControls} />
      <FourthScroll />

      <Cursor />
    </div>
  );
}
