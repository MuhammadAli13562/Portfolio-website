import React from "react";

const SizeMarker = () => {
  return (
    <div className="flex absolute top-0 left-0 w-full">
      <div className="hidden 2xl:flex">2xl</div>
      <div className="hidden xl:flex 2xl:hidden">xl</div>
      <div className="hidden  lg:flex xl:hidden">lg</div>
      <div className="hidden md:flex lg:hidden">md</div>
      <div className="hidden sm:flex md:hidden">sm</div>
    </div>
  );
};

export default SizeMarker;
