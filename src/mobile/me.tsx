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
        <div className=" w-screen h-screen pb-32 pt-16 bg-[#f5f5f5] flex flex-col items-center justify-center">
          <div className="flex flex-col px-5 w-screen items-center">
            <img className="w-1/2 md:w-1/3" src={phob} />
            <label className="text-[#1c1c1c] text-base font-mono">
              Dawruang Tanong
            </label>
            <label className="text-[#1c1c1c] text-base font-mono">
              [Computer Engineer]
            </label>
            <label className="text-[#1c1c1c] font-serif text-xl pt-4">
              UX/UI Designer and UX/UI Develope
            </label>
            <label className="text-[#1c1c1c] font-mono text-base indent-10 pb-4">
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

            <div className=" bg-[#f5f5f5] h-full w-screen px-5 pb-5">
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
        <div className=" w-screen h-screen pb-32 pt-16 bg-[#1c1c1c] flex flex-col items-center justify-center">
          <div className="flex flex-col px-5 w-screen items-center">
            <img className="w-1/2 md:w-1/3" src={phob2} />
            <label className="text-[#f5f5f5] text-base font-mono">
              Dawruang Tanong
            </label>
            <label className="text-[#f5f5f5] text-base font-mono">
              [Computer Engineer]
            </label>
            <label className="text-[#f5f5f5] font-serif text-xl pt-4">
              UX/UI Designer and UX/UI Develope
            </label>
            <label className="text-[#f5f5f5] font-mono text-base indent-10 pb-4">
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

            <div className=" bg-[#1c1c1c] h-full w-screen px-5 pb-5">
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
                          bgcolor: "#000000",
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
                          bgcolor: "#000000",
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
                          bgcolor: "#000000",
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
                          bgcolor: "#000000",
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
                          bgcolor: "#000000",
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
        <div className=" w-screen h-screen pb-32 pt-16 bg-[#E3CAC3] flex flex-col items-center justify-center">
          <div className="flex flex-col px-5 w-screen items-center ">
            <img className="w-1/2 md:w-1/3" src={phob2} />
            <label className="text-[#f5f5f5] text-base font-mono">
              Dawruang Tanong
            </label>
            <label className="text-[#f5f5f5] text-base font-mono">
              [Computer Engineer]
            </label>
            <label className="text-[#f5f5f5] font-serif text-xl pt-4">
              UX/UI Designer and UX/UI Develope
            </label>
            <label className="text-[#f5f5f5] font-mono text-base indent-10 pb-4">
              I’m a web developer currently based in Bangkok, Thailand. I’m
              really into{" "}
              <a className="bg-[#a4d6dd] bg-opacity-80 ">
                font-end design [Figma],
              </a>{" "}
              <a className="bg-[#E9D3A6] bg-opacity-80">
                React [Tailwind CSS],
              </a>{" "}
              <a className="bg-[#C6D5B1] bg-opacity-80">Material UI</a>.
            </label>

            <div className="h-full w-screen px-5 pb-5">
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
                          bgcolor: "#E3CAC3",
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