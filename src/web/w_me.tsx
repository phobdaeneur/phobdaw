import React from "react";
import bgMe from "../image/bg/bg 1.png";
import solo from "../image/bg/solo.png";
import one from "../image/bg/solo2.png";
import phob from "../image/phobdaw/darkPhob.png";
import phob2 from "../image/phobdaw/phob.png";
import { Avatar } from "@mui/material";
import {
  PersonPinCircle as PersonPinCircleIcon,
  Call as CallIcon,
  Mail as MailIcon,
  GitHub as GitHubIcon,
  Palette as PaletteIcon,
} from "@mui/icons-material";

interface Props {
  mode: string;
}
function W_ME({ mode }: Props) {
  const selectMode = (mode: string) => {
    if (mode === "darkMode") {
      return (
        <div className="h-full w-screen pb-32 bg-[#1c1c1c] flex flex-col items-center justify-center px-10">
          <div className="flex gap-3 flex-row items-start justify-center w-screen">
            <div className="w-2/5 h-screen flex flex-col gap-6">
              <label className="text-[#f5f5f5] font-serif text-5xl text-center pb-16">
                ABOUT ME
              </label>
              <label className="text-[#f5f5f5] font-serif text-5xl">
                UX/UI Designer and UX/UI Develope
              </label>
              <label className="text-[#f5f5f5] font-mono text-xl indent-10 ">
                I’m a web developer currently based in Bangkok, Thailand. I’m
                really into{" "}
                <a className="bg-[#E3CAC3] bg-opacity-80">
                  font-end design [Figma],
                </a>{" "}
                <a className="bg-[#E9D3A6] bg-opacity-80">
                  React [Tailwind CSS],
                </a>{" "}
                <a className="bg-[#C6D5B1] bg-opacity-80">Material UI</a>.
              </label>
              <label className="text-[#f5f5f5] font-serif pt-10 text-end text-3xl">
                Link design
              </label>
              <div className="flex flex-row justify-end">
                <a
                  href="https://github.com/phobdaeneur"
                  target="_blank"
                  rel="noopener"
                  className="flex flex-col items-center justify-center w-40"
                >
                  <Avatar
                    sx={{
                      bgcolor: "#1c1c1c",
                      border: "2px solid #f5f5f5",
                      width: 50,
                      height: 50,
                    }}
                  >
                    <GitHubIcon sx={{ color: "#f5f5f5", fontSize: 30 }} />
                  </Avatar>
                  <label className="text-[#f5f5f5] font-mono text-xl pt-3 cursor-pointer">
                    GitHub
                  </label>
                </a>

                <a
                  href="https://www.figma.com/files/recent?fuid=1016613335959550937"
                  target="_blank"
                  rel="noopener"
                  className="flex flex-col items-center justify-center w-40"
                >
                  <Avatar
                    sx={{
                      bgcolor: "#1c1c1c",
                      border: "2px solid #f5f5f5",
                      width: 50,
                      height: 50,
                    }}
                  >
                    <PaletteIcon sx={{ color: "#f5f5f5", fontSize: 30 }} />
                  </Avatar>
                  <label className="text-[#f5f5f5] font-mono text-xl pt-3 cursor-pointer">
                    Figma
                  </label>
                </a>
              </div>
            </div>
            <div className=" h-screen">
              <img className=" h-5/6" src={bgMe} />
            </div>
          </div>

          <div className="flex flex-row items-start justify-start w-screen ">
            <div className="px-20 flex flex-col items-center w-2/5">
              <img className="w-1/2" src={phob} />
              <label className="text-[#f5f5f5] text-xl font-mono">
                Dawruang Tanong
              </label>
              <label className="text-[#f5f5f5] text-xl font-mono">
                [Computer Engineer]
              </label>
            </div>
            <div className="flex flex-col gap-5 items-start w-3/5 pr-40">
              <div className=" grid grid-cols-2 w-full">
                {/* left */}
                <div className=" flex flex-col border-r-2 border-[#A1A1A1] gap-3">
                  {/* EDUCATION */}
                  <div className="flex flex-col gap-3">
                    <div className="bg-[#FFA446] w-3/5 h-8 flex flex-row justify-start">
                      <p className="text-2xl font-mono text-end px-5 text-[#f5f5f5]">
                        EDUCATION
                      </p>
                    </div>
                    <div className="flex flex-col ">
                      <p className=" text-base font-mono text-[#f5f5f5]">
                        2017-2021
                      </p>
                      <p className=" text-base font-mono text-[#f5f5f5]">
                        Bachelor of Engineering (B.Eng)
                      </p>
                      <p className=" text-sm font-mono text-[#A1A1A1]">
                        Program in Computer Engineering.
                      </p>
                      <p className=" text-sm font-mono text-[#A1A1A1]">
                        Naresuan University.
                      </p>
                    </div>
                  </div>
                </div>

                {/* EXPERIENCE */}
                <div className="flex flex-col gap-3 items-end">
                  <div className="bg-[#FFA446] w-3/5 h-8 flex flex-row justify-end">
                    <p className="text-2xl font-mono text-end px-5 text-[#f5f5f5]">
                      EXPERIENCE
                    </p>
                  </div>

                  <div className="flex flex-col items-end ">
                    <p className=" text-base font-mono text-[#f5f5f5]">
                      Internship
                    </p>
                    <p className=" text-base font-mono text-[#f5f5f5]">
                      April 2021 - June 2021
                    </p>

                    <p className=" text-sm font-mono text-[#A1A1A1]">
                      Bara Advanced InfoTech Co.,Ltd.
                    </p>
                    <p className=" text-sm font-mono text-[#A1A1A1]">
                      Web design
                    </p>
                  </div>

                  <div className="flex flex-col items-end ">
                    <p className=" text-base font-mono text-[#f5f5f5]">Work</p>
                    <p className=" text-base font-mono text-[#f5f5f5]">
                      September 2021 - now
                    </p>
                    <p className=" text-sm font-mono text-[#A1A1A1]">
                      KRATOS TRACKING CO., LTD.
                    </p>
                    <p className=" text-sm font-mono text-[#A1A1A1]">
                      Web develope
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-screen gap-10 pt-32">
            <label className="text-[#f5f5f5] font-serif text-5xl">
              Contact me
            </label>
            <div className="flex flex-row gap-28 items-start">
              <div className="flex flex-col items-center justify-center w-72">
                <Avatar
                  sx={{
                    bgcolor: "#1c1c1c",
                    border: "2px solid #f5f5f5",
                    width: 70,
                    height: 70,
                  }}
                >
                  <PersonPinCircleIcon
                    sx={{ color: "#f5f5f5", fontSize: 40 }}
                  />
                </Avatar>
                <label className="text-[#f5f5f5] font-mono text-xl pt-3">
                  Address
                </label>
                <a
                  href="https://github.com/phobdaeneur"
                  target="_blank"
                  rel="noopener"
                  className="text-[#f5f5f5] font-mono text-lg"
                >
                  968 U Chu Liang Building Fl. 5, Rama 4 Rd, Silom, Bangrak,
                  Bangkok 10500
                </a>
              </div>

              <div className="flex flex-col items-center justify-center w-72">
                <Avatar
                  sx={{
                    bgcolor: "#1c1c1c",
                    border: "2px solid #f5f5f5",
                    width: 70,
                    height: 70,
                  }}
                >
                  <CallIcon sx={{ color: "#f5f5f5", fontSize: 40 }} />
                </Avatar>
                <label className="text-[#f5f5f5] font-mono text-xl pt-3">
                  Call me
                </label>
                <label className="text-[#f5f5f5] font-mono text-lg">
                  064-3532-XXX
                </label>
              </div>

              <div className="flex flex-col items-center justify-center w-72">
                <Avatar
                  sx={{
                    bgcolor: "#1c1c1c",
                    border: "2px solid #f5f5f5",
                    width: 70,
                    height: 70,
                  }}
                >
                  <MailIcon sx={{ color: "#f5f5f5", fontSize: 40 }} />
                </Avatar>
                <label className="text-[#f5f5f5] font-mono text-xl pt-3">
                  E-Mail
                </label>
                <label className="text-[#f5f5f5] font-mono text-lg">
                  phobdawneur@gmail.com
                </label>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (mode === "lightMode") {
      return (
        <div className="h-full w-screen pb-32 bg-[#f5f5f5] flex flex-col items-center justify-center px-10">
          <div className="flex gap-3 flex-row items-start justify-center w-screen">
            <div className="w-2/5 h-screen flex flex-col gap-6">
              <label className="text-[#1c1c1c] font-serif text-5xl text-center pb-16">
                ABOUT ME
              </label>
              <label className="text-[#1c1c1c] font-serif text-5xl">
                UX/UI Designer and UX/UI Develope
              </label>
              <label className="text-[#1c1c1c] font-mono text-xl indent-10 ">
                I’m a web developer currently based in Bangkok, Thailand. I’m
                really into{" "}
                <a className="bg-[#E3CAC3] bg-opacity-80 ">
                  font-end design [Figma],
                </a>{" "}
                <a className="bg-[#E9D3A6] bg-opacity-80">
                  React [Tailwind CSS],
                </a>{" "}
                <a className="bg-[#C6D5B1] bg-opacity-80">Material UI</a>.
              </label>
              <label className="text-[#1c1c1c] font-serif pt-10 text-end text-3xl">
                Link design
              </label>
              <div className="flex flex-row justify-end">
                <a
                  href="https://github.com/phobdaeneur"
                  target="_blank"
                  rel="noopener"
                  className="flex flex-col items-center justify-center w-40"
                >
                  <Avatar
                    sx={{
                      bgcolor: "#f5f5f5",
                      border: "2px solid #1c1c1c",
                      width: 50,
                      height: 50,
                    }}
                  >
                    <GitHubIcon sx={{ color: "#1c1c1c", fontSize: 30 }} />
                  </Avatar>
                  <label className="text-[#1c1c1c] font-mono text-xl pt-3 cursor-pointer">
                    GitHub
                  </label>
                </a>

                <a
                  href="https://www.figma.com/files/recent?fuid=1016613335959550937"
                  target="_blank"
                  rel="noopener"
                  className="flex flex-col items-center justify-center w-40"
                >
                  <Avatar
                    sx={{
                      bgcolor: "#f5f5f5",
                      border: "2px solid #1c1c1c",
                      width: 50,
                      height: 50,
                    }}
                  >
                    <PaletteIcon sx={{ color: "#1c1c1c", fontSize: 30 }} />
                  </Avatar>
                  <label className="text-[#1c1c1c] font-mono text-xl pt-3 cursor-pointer">
                    Figma
                  </label>
                </a>
              </div>
            </div>
            <div className=" h-screen">
              <img className=" h-5/6" src={solo} />
            </div>
          </div>

          <div className="flex flex-row items-start justify-start w-screen ">
            <div className="px-20 flex flex-col items-center w-2/5">
              <img className="w-1/2" src={phob2} />
              <label className="text-[#1c1c1c] text-xl font-mono">
                Dawruang Tanong
              </label>
              <label className="text-[#1c1c1c] text-xl font-mono">
                [Computer Engineer]
              </label>
            </div>
            <div className="flex flex-col gap-5 items-start w-3/5 pr-40">
              <div className=" grid grid-cols-2 w-full">
                {/* left */}
                <div className=" flex flex-col border-r-2 border-[#A1A1A1] gap-3">
                  {/* EDUCATION */}
                  <div className="flex flex-col gap-3">
                    <div className="bg-[#FFA446] w-3/5 h-8 flex flex-row justify-start">
                      <p className="text-2xl font-mono text-end px-5 text-[#1c1c1c]">
                        EDUCATION
                      </p>
                    </div>
                    <div className="flex flex-col ">
                      <p className=" text-base font-mono text-[#1c1c1c]">
                        2017-2021
                      </p>
                      <p className=" text-base font-mono text-[#1c1c1c]">
                        Bachelor of Engineering (B.Eng)
                      </p>
                      <p className=" text-sm font-mono text-[#A1A1A1]">
                        Program in Computer Engineering.
                      </p>
                      <p className=" text-sm font-mono text-[#A1A1A1]">
                        Naresuan University.
                      </p>
                    </div>
                  </div>
                </div>

                {/* EXPERIENCE */}
                <div className="flex flex-col gap-3 items-end">
                  <div className="bg-[#FFA446] w-3/5 h-8 flex flex-row justify-end">
                    <p className="text-2xl font-mono text-end px-5 text-[#1c1c1c]">
                      EXPERIENCE
                    </p>
                  </div>

                  <div className="flex flex-col items-end ">
                    <p className=" text-base font-mono text-[#1c1c1c]">
                      Internship
                    </p>
                    <p className=" text-base font-mono text-[#1c1c1c]">
                      April 2021 - June 2021
                    </p>

                    <p className=" text-sm font-mono text-[#A1A1A1]">
                      Bara Advanced InfoTech Co.,Ltd.
                    </p>
                    <p className=" text-sm font-mono text-[#A1A1A1]">
                      Web design
                    </p>
                  </div>

                  <div className="flex flex-col items-end ">
                    <p className=" text-base font-mono text-[#1c1c1c]">Work</p>
                    <p className=" text-base font-mono text-[#1c1c1c]">
                      September 2021 - now
                    </p>
                    <p className=" text-sm font-mono text-[#A1A1A1]">
                      KRATOS TRACKING CO., LTD.
                    </p>
                    <p className=" text-sm font-mono text-[#A1A1A1]">
                      Web develope
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-screen gap-10 pt-32">
            <label className="text-[#1c1c1c] font-serif text-5xl">
              Contact me
            </label>
            <div className="flex flex-row gap-28 items-start">
              <div className="flex flex-col items-center justify-center w-72">
                <Avatar
                  sx={{
                    bgcolor: "#f5f5f5",
                    border: "2px solid #1c1c1c",
                    width: 70,
                    height: 70,
                  }}
                >
                  <PersonPinCircleIcon
                    sx={{ color: "#1c1c1c", fontSize: 40 }}
                  />
                </Avatar>
                <label className="text-[#1c1c1c] font-mono text-xl pt-3">
                  Address
                </label>
                <a
                  href="https://github.com/phobdaeneur"
                  target="_blank"
                  rel="noopener"
                  className="text-[#1c1c1c] font-mono text-lg"
                >
                  968 U Chu Liang Building Fl. 5, Rama 4 Rd, Silom, Bangrak,
                  Bangkok 10500
                </a>
              </div>

              <div className="flex flex-col items-center justify-center w-72">
                <Avatar
                  sx={{
                    bgcolor: "#f5f5f5",
                    border: "2px solid #1c1c1c",
                    width: 70,
                    height: 70,
                  }}
                >
                  <CallIcon sx={{ color: "#1c1c1c", fontSize: 40 }} />
                </Avatar>
                <label className="text-[#1c1c1c] font-mono text-xl pt-3">
                  Call me
                </label>
                <label className="text-[#1c1c1c] font-mono text-lg">
                  064-3532-XXX
                </label>
              </div>

              <div className="flex flex-col items-center justify-center w-72">
                <Avatar
                  sx={{
                    bgcolor: "#f5f5f5",
                    border: "2px solid #1c1c1c",
                    width: 70,
                    height: 70,
                  }}
                >
                  <MailIcon sx={{ color: "#1c1c1c", fontSize: 40 }} />
                </Avatar>
                <label className="text-[#1c1c1c] font-mono text-xl pt-3">
                  E-Mail
                </label>
                <label className="text-[#1c1c1c] font-mono text-lg">
                  phobdawneur@gmail.com
                </label>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (mode === "colorMode") {
      return (
        <div className="h-full w-screen pb-32 bg-[#E3CAC3] flex flex-col items-center justify-center px-10">
          <div className="flex gap-3 flex-row items-start justify-center w-screen">
            <div className="w-2/5 h-screen flex flex-col gap-6">
              <label className="text-[#43645A] font-serif text-5xl text-center pb-16">
                ABOUT ME
              </label>
              <label className="text-[#854456] font-serif text-5xl">
                UX/UI Designer and UX/UI Develope
              </label>
              <label className="text-[#1c1c1c] font-mono text-xl indent-10 ">
                I’m a web developer currently based in Bangkok, Thailand. I’m
                really into,{" "}
                <a className="bg-[#f5f5f5] bg-opacity-80 ">
                  font-end design [Figma]
                </a>{" "}
                <a className="bg-[#E9D3A6] bg-opacity-80">
                  React [Tailwind CSS],
                </a>{" "}
                <a className="bg-[#C6D5B1] bg-opacity-80">Material UI</a>.
              </label>
              <label className="text-[#43645A] font-serif pt-10 text-end text-3xl">
                Link design
              </label>
              <div className="flex flex-row justify-end">
                <a
                  href="https://github.com/phobdaeneur"
                  target="_blank"
                  rel="noopener"
                  className="flex flex-col items-center justify-center w-40"
                >
                  <Avatar
                    sx={{
                      bgcolor: "#E3CAC3",
                      border: "2px solid #43645A",
                      width: 50,
                      height: 50,
                    }}
                  >
                    <GitHubIcon sx={{ color: "#43645A", fontSize: 30 }} />
                  </Avatar>
                  <label className="text-[#43645A] font-mono text-xl pt-3 cursor-pointer">
                    GitHub
                  </label>
                </a>

                <a
                  href="https://www.figma.com/files/recent?fuid=1016613335959550937"
                  target="_blank"
                  rel="noopener"
                  className="flex flex-col items-center justify-center w-40"
                >
                  <Avatar
                    sx={{
                      bgcolor: "#E3CAC3",
                      border: "2px solid #43645A",
                      width: 50,
                      height: 50,
                    }}
                  >
                    <PaletteIcon sx={{ color: "#43645A", fontSize: 30 }} />
                  </Avatar>
                  <label className="text-[#43645A] font-mono text-xl pt-3 cursor-pointer">
                    Figma
                  </label>
                </a>
              </div>
            </div>
            <div className=" h-screen">
              <img className=" h-5/6" src={one} />
            </div>
          </div>

          <div className="flex flex-row items-start justify-start w-screen ">
            <div className="px-20 flex flex-col items-center w-2/5">
              <img className="w-1/2" src={phob} />
              <label className="text-[#1c1c1c] text-xl font-mono">
                Dawruang Tanong
              </label>
              <label className="text-[#1c1c1c] text-xl font-mono">
                [Computer Engineer]
              </label>
            </div>
            <div className="flex flex-col gap-5 items-start w-3/5 pr-40">
              <div className=" grid grid-cols-2 w-full">
                {/* left */}
                <div className=" flex flex-col border-r-2 border-[#A1A1A1] gap-3">
                  {/* EDUCATION */}
                  <div className="flex flex-col gap-3">
                    <div className="bg-[#FFA446] w-3/5 h-8 flex flex-row justify-start">
                      <p className="text-2xl font-mono text-end px-5 text-[#1c1c1c]">
                        EDUCATION
                      </p>
                    </div>
                    <div className="flex flex-col ">
                      <p className=" text-base font-mono text-[#1c1c1c]">
                        2017-2021
                      </p>
                      <p className=" text-base font-mono text-[#1c1c1c]">
                        Bachelor of Engineering (B.Eng)
                      </p>
                      <p className=" text-sm font-mono text-[#A1A1A1]">
                        Program in Computer Engineering.
                      </p>
                      <p className=" text-sm font-mono text-[#A1A1A1]">
                        Naresuan University.
                      </p>
                    </div>
                  </div>
                </div>

                {/* EXPERIENCE */}
                <div className="flex flex-col gap-3 items-end">
                  <div className="bg-[#FFA446] w-3/5 h-8 flex flex-row justify-end">
                    <p className="text-2xl font-mono text-end px-5 text-[#1c1c1c]">
                      EXPERIENCE
                    </p>
                  </div>

                  <div className="flex flex-col items-end ">
                    <p className=" text-base font-mono text-[#1c1c1c]">
                      Internship
                    </p>
                    <p className=" text-base font-mono text-[#1c1c1c]">
                      April 2021 - June 2021
                    </p>

                    <p className=" text-sm font-mono text-[#A1A1A1]">
                      Bara Advanced InfoTech Co.,Ltd.
                    </p>
                    <p className=" text-sm font-mono text-[#A1A1A1]">
                      Web design
                    </p>
                  </div>

                  <div className="flex flex-col items-end ">
                    <p className=" text-base font-mono text-[#1c1c1c]">Work</p>
                    <p className=" text-base font-mono text-[#1c1c1c]">
                      September 2021 - now
                    </p>
                    <p className=" text-sm font-mono text-[#A1A1A1]">
                      KRATOS TRACKING CO., LTD.
                    </p>
                    <p className=" text-sm font-mono text-[#A1A1A1]">
                      Web develope
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-screen gap-10 pt-32">
            <label className="text-[#854456] font-serif text-5xl">
              Contact me
            </label>
            <div className="flex flex-row gap-28 items-start">
              <div className="flex flex-col items-center justify-center w-72">
                <Avatar
                  sx={{
                    bgcolor: "#E3CAC3",
                    border: "2px solid #854456",
                    width: 70,
                    height: 70,
                  }}
                >
                  <PersonPinCircleIcon
                    sx={{ color: "#854456", fontSize: 40 }}
                  />
                </Avatar>
                <label className="text-[#854456] font-mono text-xl pt-3">
                  Address
                </label>
                <a
                  href="https://github.com/phobdaeneur"
                  target="_blank"
                  rel="noopener"
                  className="text-[#854456] font-mono text-lg"
                >
                  968 U Chu Liang Building Fl. 5, Rama 4 Rd, Silom, Bangrak,
                  Bangkok 10500
                </a>
              </div>

              <div className="flex flex-col items-center justify-center w-72">
                <Avatar
                  sx={{
                    bgcolor: "#E3CAC3",
                    border: "2px solid #854456",
                    width: 70,
                    height: 70,
                  }}
                >
                  <CallIcon sx={{ color: "#854456", fontSize: 40 }} />
                </Avatar>
                <label className="text-[#854456] font-mono text-xl pt-3">
                  Call me
                </label>
                <label className="text-[#854456] font-mono text-lg">
                  064-3532-XXX
                </label>
              </div>

              <div className="flex flex-col items-center justify-center w-72">
                <Avatar
                  sx={{
                    bgcolor: "#E3CAC3",
                    border: "2px solid #854456",
                    width: 70,
                    height: 70,
                  }}
                >
                  <MailIcon sx={{ color: "#854456", fontSize: 40 }} />
                </Avatar>
                <label className="text-[#854456] font-mono text-xl pt-3">
                  E-Mail
                </label>
                <label className="text-[#854456] font-mono text-lg">
                  phobdawneur@gmail.com
                </label>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  return <div>{selectMode(mode)}</div>;
}

export default W_ME;
