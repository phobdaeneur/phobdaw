import React from "react";
import { Tooltip } from "@mui/material";
import phob from "../image/phobdaw/darkPhob.png";
import bgphob from "../image/phobdaw/4.png";

interface Props {
  mode: string;
}
function W_Home({ mode }: Props) {
  const selectMode = (mode: string) => {
    if (mode === "darkMode") {
      return (
        <div className="h-screen pb-32 bg-[#1c1c1c] flex flex-col items-start justify-center px-10">
          {/* <label className=" text-5xl text-white">HOME</label> */}
          <img src={bgphob} className="rotate w-1/4" />
        </div>
      );
    }
    if (mode === "lightMode") {
      return (
        <div className="h-screen pb-32 bg-[#f5f5f5] flex flex-col items-center justify-center">
          <label className=" text-5xl text-black">HOME</label>
        </div>
      );
    }

    if (mode === "colorMode") {
      return (
        <div className="h-screen pb-32 bg-[#E3CAC3] flex flex-col items-center justify-center">
          <label className=" text-5xl text-[#1c1c1c]">HOME</label>
        </div>
      );
    }
  };
  return <div>{selectMode(mode)}</div>;
}

export default W_Home;
