import Ticker, { TICKER_DIRECTION_RIGHT } from "framer-motion-ticker";
import React from "react";

export const FrontEnd_Ticker = ({
  stack,
  duration,
}: {
  stack: string[];
  duration: number;
}) => {
  return (
    <div className="Ticker-frontend">
      <Ticker duration={duration}>
        {stack.map((item) => {
          return <div className="mr-12 text-[150px] font-russo ">{item}</div>;
        })}
      </Ticker>
    </div>
  );
};
export const BackEnd_Ticker = ({
  stack,
  duration,
}: {
  stack: string[];
  duration: number;
}) => {
  return (
    <div className="mb-32 Ticker-backend">
      <Ticker duration={duration} direction={TICKER_DIRECTION_RIGHT}>
        {stack.map((item) => {
          return <div className="mr-12 text-[150px] font-russo">{item}</div>;
        })}
      </Ticker>
    </div>
  );
};
