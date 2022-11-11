import React from "react";
interface Props {
  mode: string;
}
function W_Home({ mode }: Props) {
  const selectMode = (mode: string) => {
    if (mode === "darkMode") {
      return (
        <div className="h-screen bg-[#1c1c1c] flex flex-col items-center justify-center">
          <label className=" text-5xl text-white">HOME</label>
        </div>
      );
    }
    if (mode === "lightMode") {
      return (
        <div className="h-screen bg-[#f5f5f5] flex flex-col items-center justify-center">
          <label className=" text-5xl text-black">HOME</label>
        </div>
      );
    }

    if (mode === "colorMode") {
      return (
        <div className="h-screen bg-[#E3CAC3] flex flex-col items-center justify-center">
          <label className=" text-5xl text-[#1c1c1c]">HOME</label>
        </div>
      );
    }
  };
  return <div>{selectMode(mode)}</div>;
}

export default W_Home;
