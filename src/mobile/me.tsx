import React, { useState } from "react";
import bg from "../image/bg/bg.png";
import phob from "../image/phobdaw/phob.png";
import phob2 from "../image/phobdaw/darkPhob.png";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Avatar,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  GitHub as GitHubIcon,
  Palette as PaletteIcon,
  PersonPinCircle as PersonPinCircleIcon,
  Call as CallIcon,
  Mail as MailIcon,
} from "@mui/icons-material";

interface Props {
  mode: string;
}
function Me({ mode }: Props) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const selectMode = (mode: string) => {
    if (mode === "lightMode") {
      return (
        <div className=" w-screen h-full pb-32 pt-10 bg-[#f5f5f5] flex flex-col items-center justify-center">
          <div className="flex flex-col px-5 w-screen items-center">
            <img className="w-1/2 md:w-1/3" src={phob} />
            <label className="text-[#1c1c1c] text-base font-mono">
              Dawruang Tanong
            </label>
            <label className="text-[#1c1c1c] text-base font-mono">
              [Computer Engineer]
            </label>
            <label className="text-[#1c1c1c] font-serif text-xl md:text-3xl pt-4 text-start w-screen px-5 md:px-10">
              UX/UI Designer and UX/UI Develope
            </label>
            <label className="text-[#1c1c1c] font-mono text-base md:text-lg indent-10 px-5 md:px-10 w-screen">
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

            <div className="flex flex-col gap-3 pt-10 w-screen px-10">
              <div className="bg-[#FFA446] w-3/5 h-6 flex flex-row justify-start items-center">
                <p className="text-xl font-mono text-end px-5 text-[#f5f5f5]">
                  EDUCATION
                </p>
              </div>
              <div className="flex flex-col ">
                <p className=" text-base font-mono text-[#1c1c1c]">2017-2021</p>
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

            <div className="flex flex-col gap-3 items-end pt-10 w-screen px-10">
              <div className="bg-[#FFA446] w-3/5 h-6 flex flex-row justify-end items-center">
                <p className="text-xl font-mono text-end px-5 text-[#f5f5f5]">
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
                <p className=" text-sm font-mono text-[#A1A1A1]">Web design</p>
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

            <div className=" bg-[#f5f5f5] h-full w-screen px-5 pb-5 pt-10">
              <Accordion
                expanded={expanded === "link"}
                onChange={handleChange("link")}
                sx={{ bgcolor: "#f5f5f5", boxShadow: 12 }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    LINK
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    UI design example.
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex flex-row justify-center">
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
                          width: 40,
                          height: 40,
                        }}
                      >
                        <GitHubIcon sx={{ color: "#1c1c1c", fontSize: 20 }} />
                      </Avatar>
                      <label className="text-[#1c1c1c] font-mono text-lg cursor-pointer">
                        GitHub
                      </label>
                    </a>

                    <a
                      href="https://www.figma.com/file/iRygEtcgTE5VXP3ocJnWXc/UI-design-phobdaw?node-id=0%3A1&t=uw6XwA1fJ5r4Jj7V-0"
                      target="_blank"
                      rel="noopener"
                      className="flex flex-col items-center justify-center w-40"
                    >
                      <Avatar
                        sx={{
                          bgcolor: "#f5f5f5",
                          border: "2px solid #1c1c1c",
                          width: 40,
                          height: 40,
                        }}
                      >
                        <PaletteIcon sx={{ color: "#1c1c1c", fontSize: 20 }} />
                      </Avatar>
                      <label className="text-[#1c1c1c] font-mono text-lg cursor-pointer">
                        Figma
                      </label>
                    </a>
                  </div>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "contact"}
                onChange={handleChange("contact")}
                sx={{ bgcolor: "#f5f5f5", boxShadow: 12 }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Contact
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    ................
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex flex-col items-center justify-center w-4/5">
                      <Avatar
                        sx={{
                          bgcolor: "#f5f5f5",
                          border: "2px solid #1c1c1c",
                        }}
                      >
                        <PersonPinCircleIcon sx={{ color: "#1c1c1c" }} />
                      </Avatar>
                      <label className="text-[#1c1c1c] font-mono text-base">
                        Address
                      </label>
                      <a
                        href="https://github.com/phobdaeneur"
                        target="_blank"
                        rel="noopener"
                        className="text-[#1c1c1c] font-mono text-sm"
                      >
                        968 U Chu Liang Building Fl. 5, Rama 4 Rd, Silom,
                        Bangrak, Bangkok 10500
                      </a>
                    </div>

                    <div className="flex flex-col items-center justify-center w-4/5">
                      <Avatar
                        sx={{
                          bgcolor: "#f5f5f5",
                          border: "2px solid #1c1c1c",
                        }}
                      >
                        <CallIcon sx={{ color: "#1c1c1c" }} />
                      </Avatar>
                      <label className="text-[#1c1c1c] font-mono text-base">
                        Call me
                      </label>
                      <label className="text-[#1c1c1c] font-mono text-sm">
                        064-3532-XXX
                      </label>
                    </div>

                    <div className="flex flex-col items-center justify-center w-4/5">
                      <Avatar
                        sx={{
                          bgcolor: "#f5f5f5",
                          border: "2px solid #1c1c1c",
                        }}
                      >
                        <MailIcon sx={{ color: "#1c1c1c" }} />
                      </Avatar>
                      <label className="text-[#1c1c1c] font-mono text-base">
                        E-Mail
                      </label>
                      <label className="text-[#1c1c1c] font-mono text-sm">
                        phobdawneur@gmail.com
                      </label>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      );
    }
    if (mode === "darkMode") {
      return (
        <div className=" w-screen h-full pb-32 pt-10 bg-[#1c1c1c] flex flex-col items-center justify-center">
          <div className="flex flex-col w-screen items-center">
            <img className="w-1/2 md:w-1/3" src={phob2} />
            <label className="text-[#f5f5f5] text-base font-mono">
              Dawruang Tanong
            </label>
            <label className="text-[#f5f5f5] text-base font-mono">
              [Computer Engineer]
            </label>
            <label className="text-[#f5f5f5] font-serif text-xl md:text-3xl pt-4 text-start w-screen px-5 md:px-10">
              UX/UI Designer and UX/UI Develope
            </label>
            <label className="text-[#f5f5f5] font-mono text-base md:text-lg indent-10 px-5 md:px-10 w-screen">
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

            <div className="flex flex-col gap-3 pt-10 w-screen px-10">
              <div className="bg-[#FFA446] w-3/5 h-6 flex flex-row justify-start items-center">
                <p className="text-xl font-mono text-end px-5 text-[#f5f5f5]">
                  EDUCATION
                </p>
              </div>
              <div className="flex flex-col ">
                <p className=" text-base font-mono text-[#f5f5f5]">2017-2021</p>
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

            <div className="flex flex-col gap-3 items-end pt-10 w-screen px-10">
              <div className="bg-[#FFA446] w-3/5 h-6 flex flex-row justify-end items-center">
                <p className="text-xl font-mono text-end px-5 text-[#f5f5f5]">
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
                <p className=" text-sm font-mono text-[#A1A1A1]">Web design</p>
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

            <div className=" bg-[#1c1c1c] h-full w-screen px-5 pb-5 pt-10">
              <Accordion
                expanded={expanded === "link"}
                onChange={handleChange("link")}
                sx={{ bgcolor: "#1c1c1c", boxShadow: 12 }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#f5f5f5" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    sx={{ width: "33%", flexShrink: 0, color: "#f5f5f5" }}
                  >
                    LINK
                  </Typography>
                  <Typography sx={{ color: "#f5f5f5" }}>
                    UI design example.
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex flex-row justify-center">
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
                          width: 40,
                          height: 40,
                        }}
                      >
                        <GitHubIcon sx={{ color: "#f5f5f5", fontSize: 20 }} />
                      </Avatar>
                      <label className="text-[#f5f5f5] font-mono text-lg cursor-pointer">
                        GitHub
                      </label>
                    </a>

                    <a
                      href="https://www.figma.com/file/iRygEtcgTE5VXP3ocJnWXc/UI-design-phobdaw?node-id=0%3A1&t=uw6XwA1fJ5r4Jj7V-0"
                      target="_blank"
                      rel="noopener"
                      className="flex flex-col items-center justify-center w-40"
                    >
                      <Avatar
                        sx={{
                          bgcolor: "#1c1c1c",
                          border: "2px solid #f5f5f5",
                          width: 40,
                          height: 40,
                        }}
                      >
                        <PaletteIcon sx={{ color: "#f5f5f5", fontSize: 20 }} />
                      </Avatar>
                      <label className="text-[#f5f5f5] font-mono text-lg cursor-pointer">
                        Figma
                      </label>
                    </a>
                  </div>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "contact"}
                onChange={handleChange("contact")}
                sx={{ bgcolor: "#1c1c1c", boxShadow: 12 }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#f5f5f5" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    sx={{ width: "33%", flexShrink: 0, color: "#f5f5f5" }}
                  >
                    Contact
                  </Typography>
                  <Typography sx={{ color: "#f5f5f5" }}>
                    ................
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex flex-col items-center justify-center gap-4 ">
                    <div className="flex flex-col items-center justify-center w-4/5">
                      <Avatar
                        sx={{
                          bgcolor: "#1c1c1c",
                          border: "2px solid #f5f5f5",
                        }}
                      >
                        <PersonPinCircleIcon sx={{ color: "#f5f5f5" }} />
                      </Avatar>
                      <label className="text-[#f5f5f5] font-mono text-base">
                        Address
                      </label>
                      <a
                        href="https://github.com/phobdaeneur"
                        target="_blank"
                        rel="noopener"
                        className="text-[#f5f5f5] font-mono text-sm"
                      >
                        968 U Chu Liang Building Fl. 5, Rama 4 Rd, Silom,
                        Bangrak, Bangkok 10500
                      </a>
                    </div>

                    <div className="flex flex-col items-center justify-center w-4/5">
                      <Avatar
                        sx={{
                          bgcolor: "#1c1c1c",
                          border: "2px solid #f5f5f5",
                        }}
                      >
                        <CallIcon sx={{ color: "#f5f5f5" }} />
                      </Avatar>
                      <label className="text-[#f5f5f5] font-mono text-base">
                        Call me
                      </label>
                      <label className="text-[#f5f5f5] font-mono text-sm">
                        064-3532-XXX
                      </label>
                    </div>

                    <div className="flex flex-col items-center justify-center w-4/5">
                      <Avatar
                        sx={{
                          bgcolor: "#1c1c1c",
                          border: "2px solid #f5f5f5",
                        }}
                      >
                        <MailIcon sx={{ color: "#f5f5f5" }} />
                      </Avatar>
                      <label className="text-[#f5f5f5] font-mono text-base">
                        E-Mail
                      </label>
                      <label className="text-[#f5f5f5] font-mono text-sm">
                        phobdawneur@gmail.com
                      </label>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      );
    }

    if (mode === "colorMode") {
      return (
        <div className=" w-screen h-full pb-32 pt-10 bg-[#E3CAC3] flex flex-col items-center justify-center">
          <div className="flex flex-col px-5 w-screen items-center ">
            <img className="w-1/2 md:w-1/3" src={phob2} />
            <label className="text-[#f5f5f5] text-base font-mono">
              Dawruang Tanong
            </label>
            <label className="text-[#f5f5f5] text-base font-mono">
              [Computer Engineer]
            </label>
            <label className="text-[#f5f5f5] font-serif text-xl md:text-3xl pt-4 text-start w-screen px-5 md:px-10">
              UX/UI Designer and UX/UI Develope
            </label>
            <label className="text-[#f5f5f5] font-mono text-base md:text-lg indent-10 px-5 md:px-10 w-screen">
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

            <div className="flex flex-col gap-3 pt-10 w-screen px-10">
              <div className="bg-[#FFA446] w-3/5 h-6 flex flex-row justify-start items-center">
                <p className="text-xl font-mono text-end px-5 text-[#f5f5f5]">
                  EDUCATION
                </p>
              </div>
              <div className="flex flex-col ">
                <p className=" text-base font-mono text-[#f5f5f5]">2017-2021</p>
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

            <div className="flex flex-col gap-3 items-end pt-10 w-screen px-10">
              <div className="bg-[#FFA446] w-3/5 h-6 flex flex-row justify-end items-center">
                <p className="text-xl font-mono text-end px-5 text-[#f5f5f5]">
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
                <p className=" text-sm font-mono text-[#A1A1A1]">Web design</p>
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

            <div className="h-full w-screen px-5 pb-5 pt-10">
              <Accordion
                expanded={expanded === "link"}
                onChange={handleChange("link")}
                sx={{ bgcolor: "#E3CAC3", boxShadow: 12 }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#f5f5f5" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    sx={{ width: "33%", flexShrink: 0, color: "#f5f5f5" }}
                  >
                    LINK
                  </Typography>
                  <Typography sx={{ color: "#f5f5f5" }}>
                    UI design example.
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex flex-row justify-center">
                    <a
                      href="https://github.com/phobdaeneur"
                      target="_blank"
                      rel="noopener"
                      className="flex flex-col items-center justify-center w-40"
                    >
                      <Avatar
                        sx={{
                          bgcolor: "#E3CAC3",
                          border: "2px solid #f5f5f5",
                          width: 40,
                          height: 40,
                        }}
                      >
                        <GitHubIcon sx={{ color: "#f5f5f5", fontSize: 20 }} />
                      </Avatar>
                      <label className="text-[#f5f5f5] font-mono text-lg cursor-pointer">
                        GitHub
                      </label>
                    </a>

                    <a
                      href="https://www.figma.com/file/iRygEtcgTE5VXP3ocJnWXc/UI-design-phobdaw?node-id=0%3A1&t=uw6XwA1fJ5r4Jj7V-0"
                      target="_blank"
                      rel="noopener"
                      className="flex flex-col items-center justify-center w-40"
                    >
                      <Avatar
                        sx={{
                          bgcolor: "#E3CAC3",
                          border: "2px solid #f5f5f5",
                          width: 40,
                          height: 40,
                        }}
                      >
                        <PaletteIcon sx={{ color: "#f5f5f5", fontSize: 20 }} />
                      </Avatar>
                      <label className="text-[#f5f5f5] font-mono text-lg cursor-pointer">
                        Figma
                      </label>
                    </a>
                  </div>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "contact"}
                onChange={handleChange("contact")}
                sx={{ bgcolor: "#E3CAC3", boxShadow: 12 }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#f5f5f5" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    sx={{ width: "33%", flexShrink: 0, color: "#f5f5f5" }}
                  >
                    Contact
                  </Typography>
                  <Typography sx={{ color: "#f5f5f5" }}>
                    ................
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex flex-col items-center justify-center w-4/5">
                      <Avatar
                        sx={{
                          bgcolor: "#E3CAC3",
                          border: "2px solid #f5f5f5",
                        }}
                      >
                        <PersonPinCircleIcon sx={{ color: "#f5f5f5" }} />
                      </Avatar>
                      <label className="text-[#f5f5f5] font-mono text-base">
                        Address
                      </label>
                      <a
                        href="https://github.com/phobdaeneur"
                        target="_blank"
                        rel="noopener"
                        className="text-[#f5f5f5] font-mono text-sm"
                      >
                        968 U Chu Liang Building Fl. 5, Rama 4 Rd, Silom,
                        Bangrak, Bangkok 10500
                      </a>
                    </div>

                    <div className="flex flex-col items-center justify-center w-4/5">
                      <Avatar
                        sx={{
                          bgcolor: "#E3CAC3",
                          border: "2px solid #f5f5f5",
                        }}
                      >
                        <CallIcon sx={{ color: "#f5f5f5" }} />
                      </Avatar>
                      <label className="text-[#f5f5f5] font-mono text-base">
                        Call me
                      </label>
                      <label className="text-[#f5f5f5] font-mono text-sm">
                        064-3532-XXX
                      </label>
                    </div>

                    <div className="flex flex-col items-center justify-center w-4/5">
                      <Avatar
                        sx={{
                          bgcolor: "#E3CAC3",
                          border: "2px solid #f5f5f5",
                        }}
                      >
                        <MailIcon sx={{ color: "#f5f5f5" }} />
                      </Avatar>
                      <label className="text-[#f5f5f5] font-mono text-base">
                        E-Mail
                      </label>
                      <label className="text-[#f5f5f5] font-mono text-sm">
                        phobdawneur@gmail.com
                      </label>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      );
    }
  };
  return <div>{selectMode(mode)}</div>;
}

export default Me;
