import React from "react";
import bgD1 from "../image/document/7.png";
import bgD2 from "../image/document/13.png";
import bg11 from "../image/document/11.png";
import bg12 from "../image/document/12.png";
import bg4 from "../image/document/4.png";

interface Props {
  mode: string;
}
function Document({ mode }: Props) {
  const selectMode = (mode: string) => {
    if (mode === "darkMode") {
      return (
        <div className=" w-screen h-full gap-5 p-5 bg-[#1c1c1c] flex flex-col items-center justify-center">
          <label className=" text-5xl text-white z-10">DOCUMENT</label>
          <div className=" flex flex-col gap-5 w-screen h-full items-center justify-center">
            <div
              style={{ backgroundImage: `url(${bgD1})` }}
              className=" bg-[#1c1c1c] shadow-lg shadow-black w-11/12 h-full rounded-lg bg-cover flex flex-col items-center justify-center p-5 gap-2"
            >
              <h2 className="font-serif text-2xl bg-[#CAB09F] text-[#1c1c1c] px-2">
                Tailwind CSS
              </h2>
              <label className="font-mono indent-8 text-base bg-[#CAB09F] text-[#685244] px-2">
                Tailwind CSS works by scanning all of your HTML files,
                JavaScript components, and any other templates for class names,
                generating the corresponding styles and then writing them to a
                static CSS file.
              </label>
            </div>

            <div
              style={{ backgroundImage: `url(${bgD2})` }}
              className=" bg-cover bg-center shadow-lg shadow-black w-11/12 h-40 rounded-lg flex flex-col items-center justify-center"
            >
              <h3 className=" font-serif text-xl border-b-2 text-[#f5f5f5] border-[#CBC7B7]">
                LIBRARY
              </h3>
            </div>

            <div
              style={{ backgroundImage: `url(${bgD2})` }}
              className=" bg-cover bg-center shadow-lg shadow-black w-11/12 h-40 rounded-lg flex flex-col items-center justify-center"
            >
              <h3 className=" font-serif text-xl border-b-2 text-[#f5f5f5] border-[#CBC7B7]">
                ICONS
              </h3>
            </div>

            <div
              style={{ backgroundImage: `url(${bg11})` }}
              className=" bg-cover shadow-lg shadow-black w-11/12 h-60 rounded-lg flex flex-col items-center justify-start p-5"
            >
              <h3 className="font-serif">MUI</h3>
              <label className="font-mono indent-8 text-sm">
                Material UI is an open-source React component library that
                implements Google's Material Design.
              </label>
            </div>

            <div
              style={{ backgroundImage: `url(${bg12})` }}
              className=" bg-cover shadow-lg shadow-black w-11/12 h-full rounded-lg flex flex-col items-center justify-start p-8"
            >
              <h3 className="font-serif text-[#f5f5f5] text-xl">
                Figma UI design
              </h3>
              <label className="font-mono text-[#f5f5f5] indent-8 text-base">
                Material UI is an open-source React component library that
                implements Google's Material Design.
              </label>
            </div>
          </div>
        </div>
      );
    }
    if (mode === "lightMode") {
      return (
        <div className=" w-screen  h-full gap-5 p-5 bg-[#f5f5f5] flex flex-col items-center justify-center">
          <label className=" text-5xl text-black">DOCUMENT</label>
          <div className=" flex flex-col gap-5 w-screen h-full items-center justify-center">
            <div
              style={{ backgroundImage: `url(${bgD1})` }}
              className=" bg-[#1c1c1c] shadow-md shadow-[#1c1c1c] w-11/12 h-full rounded-lg bg-cover flex flex-col items-center justify-center p-5 gap-2"
            >
              <h2 className="font-serif text-2xl bg-[#CAB09F] text-[#1c1c1c] px-2">
                Tailwind CSS
              </h2>
              <label className="font-mono indent-8 text-base bg-[#CAB09F] text-[#685244] px-2">
                Tailwind CSS works by scanning all of your HTML files,
                JavaScript components, and any other templates for class names,
                generating the corresponding styles and then writing them to a
                static CSS file.
              </label>
            </div>

            <div
              style={{ backgroundImage: `url(${bg4})` }}
              className=" bg-cover bg-center shadow-md shadow-[#1c1c1c] w-11/12 h-40 rounded-lg flex flex-col items-center justify-center"
            >
              <h3 className=" font-serif text-xl border-b-2 text-[#1c1c1c] border-[#CBC7B7]">
                LIBRARY
              </h3>
            </div>

            <div
              style={{ backgroundImage: `url(${bg4})` }}
              className=" bg-cover bg-center shadow-md shadow-[#1c1c1c] w-11/12 h-40 rounded-lg flex flex-col items-center justify-center"
            >
              <h3 className=" font-serif text-xl border-b-2 text-[#1c1c1c] border-[#CBC7B7]">
                ICONS
              </h3>
            </div>

            <div
              style={{ backgroundImage: `url(${bg11})` }}
              className=" bg-cover shadow-md shadow-[#1c1c1c] w-11/12 h-60 rounded-lg flex flex-col items-center justify-start p-5"
            >
              <h3 className="font-serif">MUI</h3>
              <label className="font-mono indent-8 text-sm">
                Material UI is an open-source React component library that
                implements Google's Material Design.
              </label>
            </div>

            <div
              style={{ backgroundImage: `url(${bg12})` }}
              className=" bg-cover shadow-md shadow-[#1c1c1c] w-11/12 h-full rounded-lg flex flex-col items-center justify-start p-8"
            >
              <h3 className="font-serif text-[#f5f5f5] text-xl">
                Figma UI design
              </h3>
              <label className="font-mono text-[#f5f5f5] indent-8 text-base">
                Material UI is an open-source React component library that
                implements Google's Material Design.
              </label>
            </div>
          </div>
        </div>
      );
    }

    if (mode === "colorMode") {
      return (
        <div className=" w-screen  h-full gap-5 p-5 bg-[#E3CAC3] flex flex-col items-center justify-center">
          <label className=" text-5xl text-[#1c1c1c]">DOCUMENT</label>
          <div className=" flex flex-col gap-5 w-screen h-full items-center justify-center">
            <div
              style={{ backgroundImage: `url(${bgD1})` }}
              className=" bg-[#1c1c1c] shadow-md shadow-[#1c1c1c] w-11/12 h-full rounded-lg bg-cover flex flex-col items-center justify-center p-5 gap-2"
            >
              <h2 className="font-serif text-2xl bg-[#CAB09F] text-[#1c1c1c] px-2">
                Tailwind CSS
              </h2>
              <label className="font-mono indent-8 text-base bg-[#CAB09F] text-[#685244] px-2">
                Tailwind CSS works by scanning all of your HTML files,
                JavaScript components, and any other templates for class names,
                generating the corresponding styles and then writing them to a
                static CSS file.
              </label>
            </div>

            <div
              style={{ backgroundImage: `url(${bg4})` }}
              className=" bg-cover bg-center shadow-md shadow-[#1c1c1c] w-11/12 h-40 rounded-lg flex flex-col items-center justify-center"
            >
              <h3 className=" font-serif text-xl border-b-2 text-[#1c1c1c] border-[#CBC7B7]">
                LIBRARY
              </h3>
            </div>

            <div
              style={{ backgroundImage: `url(${bg4})` }}
              className=" bg-cover bg-center shadow-md shadow-[#1c1c1c] w-11/12 h-40 rounded-lg flex flex-col items-center justify-center"
            >
              <h3 className=" font-serif text-xl border-b-2 text-[#1c1c1c] border-[#CBC7B7]">
                ICONS
              </h3>
            </div>

            <div
              style={{ backgroundImage: `url(${bg11})` }}
              className=" bg-cover shadow-md shadow-[#1c1c1c] w-11/12 h-60 rounded-lg flex flex-col items-center justify-start p-5"
            >
              <h3 className="font-serif">MUI</h3>
              <label className="font-mono indent-8 text-sm">
                Material UI is an open-source React component library that
                implements Google's Material Design.
              </label>
            </div>

            <div
              style={{ backgroundImage: `url(${bg12})` }}
              className=" bg-cover shadow-md shadow-[#1c1c1c] w-11/12 h-full rounded-lg flex flex-col items-center justify-start p-8"
            >
              <h3 className="font-serif text-[#f5f5f5] text-xl">
                Figma UI design
              </h3>
              <label className="font-mono text-[#f5f5f5] indent-8 text-base">
                Material UI is an open-source React component library that
                implements Google's Material Design.
              </label>
            </div>
          </div>
        </div>
      );
    }
  };
  return <div>{selectMode(mode)}</div>;
}

export default Document;
