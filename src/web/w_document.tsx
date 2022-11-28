import React from "react";
import bg from "../image/document/7.png";
import bg2 from "../image/document/4.png";
import bg3 from "../image/document/3.png";
import bg6 from "../image/document/5.png";
import bg7 from "../image/document/2.png";
import bg8 from "../image/document/8.png";
import bg9 from "../image/document/9.png";

import bg10 from "../image/document/10.png";
import bg11 from "../image/document/11.png";
import bg12 from "../image/document/12.png";
import bg13 from "../image/document/13.png";

import bg4 from "../image/phobdaw/logoD.png";
import bg5 from "../image/phobdaw/logoW.png";
interface Props {
  mode: string;
}

function W_Document({ mode }: Props) {
  const selectMode = (mode: string) => {
    if (mode === "darkMode") {
      return (
        <div className="h-screen w-screen px-10 bg-[#1c1c1c] flex flex-row items-center justify-center">
          <div className="h-full w-screen p-5 grid grid-rows-2 gap-4 ">
            <div className="row-span-2 grid h-3/6 grid-cols-5 gap-4">
              <div
                style={{ backgroundImage: `url(${bg})` }}
                className="row-span-2 p-2 bg-cover flex flex-col items-center justify-center gap-4 shadow-md hover:scale-125 cursor-pointer ease-in-out duration-700"
              >
                <h2 className="font-serif text-2xl bg-[#CAB09F] text-[#1c1c1c] px-2 cursor-pointer">
                  Tailwind CSS
                </h2>
                <label className="font-mono indent-8 text-base bg-[#CAB09F] text-[#685244] px-2 cursor-pointer">
                  Tailwind CSS works by scanning all of your HTML files,
                  JavaScript components, and any other templates for class
                  names, generating the corresponding styles and then writing
                  them to a static CSS file.
                </label>
              </div>
              <div
                style={{ backgroundImage: `url(${bg10})` }}
                className="row-span-2 p-4 bg-right-bottom bg-cover flex flex-col items-center justify-center"
              >
                {/* <h3 className="font-serif">From [Information]</h3> */}
              </div>

              <div className="row-span-1 p-4 bg-[#413131] bg-opacity-80 shadow-md cursor-no-drop"></div>

              <div
                style={{ backgroundImage: `url(${bg13})` }}
                className=" p-4 bg-cover shadow-md hover:scale-125  ease-in-out duration-700 flex flex-col items-center justify-center cursor-pointer"
              >
                <h3 className=" font-serif text-xl hover:border-b-2 text-[#f5f5f5] hover:border-[#CBC7B7] cursor-pointer">
                  LIBRARY
                </h3>
              </div>

              <div
                style={{ backgroundImage: `url(${bg11})` }}
                className="row-span-2 p-4 shadow-md bg-cover bg-bottom flex flex-col items-center justify-start gap-2 hover:scale-125 cursor-pointer ease-in-out duration-700"
              >
                <h3 className="font-serif">MUI</h3>
                <label className="font-mono indent-8 text-sm cursor-pointer">
                  Material UI is an open-source React component library that
                  implements Google's Material Design.
                </label>
              </div>

              <div
                style={{ backgroundImage: `url(${bg13})` }}
                className=" p-4 bg-cover shadow-md flex flex-col items-center justify-center hover:scale-125 ease-in-out duration-700 cursor-pointer"
              >
                <h3 className=" font-serif text-xl hover:border-b-2 text-[#f5f5f5] hover:border-[#CBC7B7] cursor-pointer">
                  ICONS
                </h3>
              </div>

              <div className=" p-4 font-serif bg-[#4e6d7c] bg-opacity-30 shadow-md cursor-no-drop"></div>
            </div>

            <div className="grid h-60 grid-cols-2 gap-4 pt-4">
              <div
                style={{ backgroundImage: `url(${bg12})` }}
                className=" p-4 bg-cover gap-2 bg-center shadow-md hover:scale-125 cursor-pointer ease-in-out duration-700 flex flex-col items-center justify-center"
              >
                <h3 className="font-serif text-[#f5f5f5] text-xl">
                  Figma UI design
                </h3>
                <label className="font-mono text-[#f5f5f5] indent-8 text-base px-20 cursor-pointer">
                  Material UI is an open-source React component library that
                  implements Google's Material Design.
                </label>
              </div>

              <div className="p-4 flex items-center justify-center">
                <img src={bg5} className="" />
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (mode === "lightMode") {
      return (
        <div className="h-screen w-screen px-10 bg-[#f5f5f5] flex flex-row items-center justify-center">
          <div className="h-full w-screen p-5 grid grid-rows-2 gap-4">
            <div className="row-span-2 grid h-3/6 grid-cols-5 gap-4">
              <div
                style={{ backgroundImage: `url(${bg})` }}
                className="row-span-2 p-2 bg-cover flex flex-col items-center justify-center gap-4 shadow-md hover:scale-125 cursor-pointer ease-in-out duration-700"
              >
                <h2 className="font-serif text-2xl bg-[#CAB09F] text-[#1c1c1c] px-2 cursor-pointer">
                  Tailwind CSS
                </h2>
                <label className="font-mono indent-8 text-base bg-[#CAB09F] text-[#685244] px-2 cursor-pointer">
                  Tailwind CSS works by scanning all of your HTML files,
                  JavaScript components, and any other templates for class
                  names, generating the corresponding styles and then writing
                  them to a static CSS file.
                </label>
              </div>

              <div className="row-span-1 p-4 bg-[#f3b7b7] bg-opacity-80 shadow-md cursor-no-drop"></div>

              <div
                style={{ backgroundImage: `url(${bg8})` }}
                className="row-span-2 p-4 bg-right-bottom bg-cover flex flex-col items-center justify-center"
              >
                {/* <h3 className="font-serif">From [Information]</h3> */}
              </div>

              <div
                style={{ backgroundImage: `url(${bg2})` }}
                className=" p-4 bg-cover shadow-md hover:scale-125 cursor-pointer ease-in-out duration-700 flex flex-col items-center justify-center"
              >
                <h3 className=" font-serif text-xl hover:border-b-2 hover:border-[#CBC7B7]">
                  LIBRARY
                </h3>
              </div>

              <div
                style={{ backgroundImage: `url(${bg6})` }}
                className="row-span-2 p-4 shadow-md bg-cover bg-bottom flex flex-col items-center justify-start gap-2 hover:scale-125 cursor-pointer ease-in-out duration-700"
              >
                <h3 className="font-serif">MUI</h3>
                <label className="font-mono indent-8 text-sm">
                  Material UI is an open-source React component library that
                  implements Google's Material Design.
                </label>
              </div>

              <div
                style={{ backgroundImage: `url(${bg3})` }}
                className=" p-4 bg-cover bg-center shadow-md flex flex-col items-center justify-center hover:scale-125 ease-in-out duration-700 cursor-pointer"
              >
                <h3 className=" font-serif hover:border-b-2 hover:border-[#567577]">
                  ICONS
                </h3>
              </div>
              <div className=" p-4 font-serif bg-[#80BBD9] bg-opacity-30 shadow-md cursor-no-drop"></div>
            </div>

            <div className="grid h-60 grid-cols-2 gap-4 pt-4">
              <div
                style={{ backgroundImage: `url(${bg7})` }}
                className=" p-4 bg-cover gap-2 bg-center shadow-md hover:scale-125 cursor-pointer ease-in-out duration-700 flex flex-col items-center justify-center"
              >
                <h3 className="font-serif text-[#f5f5f5] text-xl">
                  Figma UI design
                </h3>
                <label className="font-mono text-[#f5f5f5] indent-8 text-base px-20">
                  Material UI is an open-source React component library that
                  implements Google's Material Design.
                </label>
              </div>

              <div className="p-4 flex items-center justify-center">
                <img src={bg4} className="" />
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (mode === "colorMode") {
      return (
        <div className="h-screen w-screen px-10 bg-[#E3CAC3] flex flex-row items-center justify-center">
          <div className="h-full w-screen p-5 grid grid-rows-2 gap-4 ">
            <div className="row-span-2 grid h-3/6 grid-cols-5 gap-4 bg-[#E3CAC3]">
              <div
                style={{ backgroundImage: `url(${bg})` }}
                className="row-span-2 p-2 bg-cover flex flex-col items-center justify-center gap-4 shadow-md hover:scale-125 cursor-pointer ease-in-out duration-700"
              >
                <h2 className="font-serif text-2xl bg-[#CAB09F] text-[#1c1c1c] px-2 cursor-pointer">
                  Tailwind CSS
                </h2>
                <label className="font-mono indent-8 text-base bg-[#CAB09F] text-[#685244] px-2 cursor-pointer">
                  Tailwind CSS works by scanning all of your HTML files,
                  JavaScript components, and any other templates for class
                  names, generating the corresponding styles and then writing
                  them to a static CSS file.
                </label>
              </div>

              <div className="row-span-1 p-4 bg-[#f3b7b7] bg-opacity-80 shadow-md cursor-no-drop"></div>

              <div
                style={{ backgroundImage: `url(${bg9})` }}
                className="row-span-2 p-4 bg-right-bottom bg-cover flex flex-col items-center justify-center"
              >
                {/* <h3 className="font-serif">From [Information]</h3> */}
              </div>

              <div
                style={{ backgroundImage: `url(${bg2})` }}
                className=" p-4 bg-cover shadow-md hover:scale-125 cursor-pointer ease-in-out duration-700 flex flex-col items-center justify-center"
              >
                <h3 className=" font-serif text-xl hover:border-b-2 hover:border-[#CBC7B7]">
                  LIBRARY
                </h3>
              </div>

              <div
                style={{ backgroundImage: `url(${bg6})` }}
                className="row-span-2 p-4 shadow-md bg-cover bg-bottom flex flex-col items-center justify-start gap-2 hover:scale-125 cursor-pointer ease-in-out duration-700"
              >
                <h3 className="font-serif">MUI</h3>
                <label className="font-mono indent-8 text-sm">
                  Material UI is an open-source React component library that
                  implements Google's Material Design.
                </label>
              </div>

              <div
                style={{ backgroundImage: `url(${bg3})` }}
                className=" p-4 bg-cover bg-center shadow-md flex flex-col items-center justify-center hover:scale-125 ease-in-out duration-700 cursor-pointer"
              >
                <h3 className=" font-serif hover:border-b-2 hover:border-[#567577]">
                  ICONS
                </h3>
              </div>
              <div className=" p-4 font-serif bg-[#80BBD9] bg-opacity-30 shadow-md cursor-no-drop"></div>
            </div>

            <div className="grid h-60 grid-cols-2 gap-4 pt-4">
              <div
                style={{ backgroundImage: `url(${bg7})` }}
                className=" p-4 bg-cover gap-2 bg-center shadow-md hover:scale-125 cursor-pointer ease-in-out duration-700 flex flex-col items-center justify-center"
              >
                <h3 className="font-serif text-[#f5f5f5] text-xl">
                  Figma UI design
                </h3>
                <label className="font-mono text-[#f5f5f5] indent-8 text-base px-20">
                  Material UI is an open-source React component library that
                  implements Google's Material Design.
                </label>
              </div>

              <div className="p-4 flex items-center justify-center">
                <img src={bg4} className="" />
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{selectMode(mode)}</div>;
}

export default W_Document;
