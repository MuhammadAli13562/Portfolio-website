import { backendstack, frontendstack } from "../constants";
import { BackEnd_Ticker, FrontEnd_Ticker } from "./TechStack_Ticker";

const SecondScroll = () => {
  return (
    <div
      id="techstack"
      className="relative flex flex-col  h-screen w-full secondsection"
    >
      <div className="absolute secondsectionbg border-[20px] border-solid border-black p-2 flex flex-col justify-between w-[1600px] h-[800px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 primary-color-bg">
        <span className=" ticker-label">FRONT-END</span>
        <span className=" ticker-label self-end">BACK-END</span>
      </div>
      <div className="flex flex-col gap-[250px] mt-32">
        <div className="w-full text-center ">
          <FrontEnd_Ticker stack={frontendstack} duration={8} />
        </div>
        <div className="w-full text-center ">
          <BackEnd_Ticker stack={backendstack} duration={10} />
        </div>
      </div>
    </div>
  );
};

export default SecondScroll;
