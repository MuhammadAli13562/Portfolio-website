import Ticker, { TICKER_DIRECTION_RIGHT } from "framer-motion-ticker";
import Image, { StaticImageData } from "next/image";
import React from "react";

export const FrontEnd_Ticker = ({
  stack,
  duration,
}: {
  stack: StaticImageData[];
  duration: number;
}) => {
  return (
    <div className="relative ">
      <div className="">
        <Ticker duration={duration}>
          {stack.map((item) => {
            return (
              <div className="col-center ">
                <Image
                  src={item}
                  className="w-[300px] h-auto "
                  width={200}
                  height={200}
                  alt="logo"
                />
              </div>
            );
          })}
        </Ticker>
      </div>
      {/* <div className="absolute top-0 left-0 h-full w-[400px] ">
        <div className="place-center text-[60px] text-gray-500 font-russo">
          FRONTEND
        </div>
      </div> */}
    </div>
  );
};
export const BackEnd_Ticker = ({
  stack,
  duration,
}: {
  stack: StaticImageData[];
  duration: number;
}) => {
  return (
    <div className="relative">
      <div className="">
        <Ticker duration={duration} direction={TICKER_DIRECTION_RIGHT}>
          {stack.map((item) => {
            return (
              <div className="col-center mr-12">
                <Image
                  src={item}
                  className="  w-[290px] h-auto "
                  width={200}
                  height={200}
                  alt="logo"
                />
              </div>
            );
          })}
        </Ticker>
      </div>
      {/* <div className="absolute top-0 left-0 h-full w-[400px] ">
        <div className="place-center text-[60px] text-gray-500 font-russo">
          BACKEND
        </div>
      </div> */}
    </div>
  );
};
