import React from "react";

interface Props {
  mode: string;
}
function Document({ mode }: Props) {
  const selectMode = (mode: string) => {
    if (mode === "darkMode") {
      return (
        <div className=" w-screen h-full gap-5 p-5 bg-[#1c1c1c] flex flex-col items-center justify-center">
          <label className=" text-5xl text-white">DOCUMENT</label>
          <div className=" flex flex-col gap-5 w-screen h-full items-center justify-center">
            <div className=" bg-[#1c1c1c] shadow-lg shadow-black w-11/12 h-40 rounded-lg"></div>
            <div className=" bg-[#1c1c1c] shadow-lg shadow-black w-11/12 h-40 rounded-lg"></div>
            <div className=" bg-[#1c1c1c] shadow-lg shadow-black w-11/12 h-40 rounded-lg"></div>
            <div className=" bg-[#1c1c1c] shadow-lg shadow-black w-11/12 h-40 rounded-lg"></div>
          </div>
        </div>
      );
    }
    if (mode === "lightMode") {
      return (
        <div className=" w-screen h-screen bg-[#f5f5f5] flex flex-col items-center justify-center">
          <label className=" text-5xl text-black">DOCUMENT</label>
        </div>
      );
    }

    if (mode === "colorMode") {
      return (
        <div className=" w-screen h-screen bg-[#E3CAC3] flex flex-col items-center justify-center">
          <label className=" text-5xl text-[#1c1c1c]">DOCUMENT</label>
        </div>
      );
    }
  };
  return <div>{selectMode(mode)}</div>;
}

export default Document;
