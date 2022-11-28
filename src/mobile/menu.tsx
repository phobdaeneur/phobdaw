import "@fontsource/akshar";
import React, { useState } from "react";
import {
  Star as StarIcon,
  Code as CodeIcon,
  CalendarMonth as CalendarIcon,
  Home as HomeIcon,
  Nightlight as MoonIcon,
  LightMode as SunIcon,
  ColorLens as ColorIcon,
  Settings as SettingIcon,
  LightMode,
} from "@mui/icons-material";

import {
  Box,
  Backdrop,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  Modal,
  Button,
  Typography,
} from "@mui/material";
import { shadows } from "@mui/system";
import Me from "./me";
import Work from "./work";
import Home from "./home";
import Document from "./document";
import sunIcon from "../image/icon/sun.png";
import moonIcon from "../image/icon/moon.png";
import colorIcon from "../image/icon/color.png";

const actionsDark = [
  {
    icon: <HomeIcon sx={{ color: "#f5f5f5" }} />,
    name: "HOME",
    operation: "home",
  },
  { icon: <StarIcon sx={{ color: "#f5f5f5" }} />, name: "ME", operation: "me" },
  {
    icon: <CodeIcon sx={{ color: "#f5f5f5" }} />,
    name: "DOCUMENT",
    operation: "document",
  },
  {
    icon: <CalendarIcon sx={{ color: "#f5f5f5" }} />,
    name: "WORK",
    operation: "work",
  },
  {
    icon: <SettingIcon sx={{ color: "#f5f5f5" }} />,
    name: "MODE",
    operation: "mode",
  },
];

const actions = [
  {
    icon: <HomeIcon sx={{ color: "#1c1c1c" }} />,
    name: "HOME",
    operation: "home",
  },
  { icon: <StarIcon sx={{ color: "#1c1c1c" }} />, name: "ME", operation: "me" },
  {
    icon: <CodeIcon sx={{ color: "#1c1c1c" }} />,
    name: "DOCUMENT",
    operation: "document",
  },
  {
    icon: <CalendarIcon sx={{ color: "#1c1c1c" }} />,
    name: "WORK",
    operation: "work",
  },
  {
    icon: <SettingIcon sx={{ color: "#1c1c1c" }} />,
    name: "MODE",
    operation: "mode",
  },
];

const actionsColor = [
  {
    icon: <HomeIcon sx={{ color: "#1c1c1c" }} />,
    name: "HOME",
    operation: "home",
  },
  { icon: <StarIcon sx={{ color: "#1c1c1c" }} />, name: "ME", operation: "me" },
  {
    icon: <CodeIcon sx={{ color: "#1c1c1c" }} />,
    name: "DOCUMENT",
    operation: "document",
  },
  {
    icon: <CalendarIcon sx={{ color: "#1c1c1c" }} />,
    name: "WORK",
    operation: "work",
  },
  {
    icon: <SettingIcon sx={{ color: "#1c1c1c" }} />,
    name: "MODE",
    operation: "mode",
  },
];

const actionsMode = [
  { icon: <MoonIcon />, mame: "darkMode" },
  { icon: <SunIcon />, name: "lightMode" },
  { icon: <ColorIcon />, name: "colorMode" },
];

function Menus() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [mode, setMode] = useState("darkMode");
  // console.log(mode);
  const selectMode = (mode: string) => {
    if (mode === "lightMode") {
      return (
        <div>
          <Modal
            open={modalMode}
            onClose={handleModeClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute" as "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 350,
                bgcolor: "#f5f5f5",
                // border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography
                className=" text-[#1c1c1c]"
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                Select mode
              </Typography>
              <div className="flex flex-row items-center justify-center pt-5">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <MoonIcon sx={{ color: "#1c1c1c" }} />
                  <button
                    onClick={() => {
                      return [
                        setMode("darkMode"),
                        setModalMode(false),
                        setOpen(false),
                      ];
                    }}
                    className="border border-[#f5f5f5] bg-[#f5f5f5] text-[#1c1c1c] rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline shadow-md shadow-[#1c1c1c]/40"
                  >
                    Dark
                  </button>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center">
                  <SunIcon sx={{ color: "#1c1c1c" }} />
                  <button
                    onClick={() => {
                      return [
                        setMode("lightMode"),
                        setModalMode(false),
                        setOpen(false),
                      ];
                    }}
                    className="border border-[#f5f5f5] bg-[#f5f5f5] text-[#1c1c1c] rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline shadow-md shadow-[#1c1c1c]/40"
                  >
                    Light
                  </button>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center">
                  <ColorIcon sx={{ color: "#1c1c1c" }} />
                  <button
                    onClick={() => {
                      return [
                        setMode("colorMode"),
                        setModalMode(false),
                        setOpen(false),
                      ];
                    }}
                    className="border border-[#f5f5f5] bg-[#f5f5f5] text-[#1c1c1c] rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline shadow-md shadow-[#1c1c1c]/40"
                  >
                    Color
                  </button>
                </div>
              </div>
            </Box>
          </Modal>
          <div className="flex flex-col fixed bg-[#f5f5f5] h-screen lg:hidden z-20">
            <Box
              className=" z-10"
              sx={{ transform: "translateZ(0px)", flexGrow: 1 }}
            >
              <Backdrop open={open} />
              <SpeedDial
                FabProps={{
                  size: "large",
                  style: { backgroundColor: "#1c1c1c" },
                }}
                ariaLabel="SpeedDial tooltip example"
                sx={{ position: "absolute", bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
              >
                {actionsDark.map((action) => (
                  <SpeedDialAction
                    FabProps={{
                      style: { backgroundColor: "#1c1c1c" },
                    }}
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    //   tooltipOpen
                    onClick={() => {
                      return handleClick(action.operation);
                    }}
                  />
                ))}
              </SpeedDial>
            </Box>
          </div>
        </div>
      );
    }

    if (mode === "darkMode") {
      return (
        <div>
          <Modal
            open={modalMode}
            onClose={handleModeClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute" as "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 350,
                bgcolor: "#1c1c1c",
                // border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography
                className=" text-[#f5f5f5]"
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                Select mode
              </Typography>
              <div className="flex flex-row items-center justify-center pt-5">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <MoonIcon sx={{ color: "#f5f5f5" }} />
                  <button
                    onClick={() => {
                      return [
                        setMode("darkMode"),
                        setModalMode(false),
                        setOpen(false),
                      ];
                    }}
                    className="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                  >
                    Dark
                  </button>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center">
                  <SunIcon sx={{ color: "#f5f5f5" }} />
                  <button
                    onClick={() => {
                      return [
                        setMode("lightMode"),
                        setModalMode(false),
                        setOpen(false),
                      ];
                    }}
                    className="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                  >
                    Light
                  </button>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center">
                  <ColorIcon sx={{ color: "#f5f5f5" }} />
                  <button
                    onClick={() => {
                      return [
                        setMode("colorMode"),
                        setModalMode(false),
                        setOpen(false),
                      ];
                    }}
                    className="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                  >
                    Color
                  </button>
                </div>
              </div>
            </Box>
          </Modal>
          <div className="flex flex-col fixed bg-[#1c1c1c] h-screen lg:hidden">
            <Box
              className=" z-10"
              sx={{ transform: "translateZ(0px)", flexGrow: 1 }}
            >
              <Backdrop open={open} />
              <SpeedDial
                FabProps={{
                  size: "large",
                  style: { backgroundColor: "#f5f5f5" },
                }}
                ariaLabel="SpeedDial tooltip example"
                sx={{ position: "absolute", bottom: 16, right: 16 }}
                icon={<SpeedDialIcon sx={{ color: "#1c1c1c" }} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
              >
                {actions.map((action) => (
                  <SpeedDialAction
                    FabProps={{
                      style: { backgroundColor: "#f5f5f5" },
                    }}
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    //   tooltipOpen
                    onClick={() => {
                      handleClick(action.operation);
                    }}
                  />
                ))}
              </SpeedDial>
            </Box>
          </div>
        </div>
      );
    }

    if (mode === "colorMode") {
      return (
        <div>
          <Modal
            open={modalMode}
            onClose={handleModeClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute" as "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 350,
                bgcolor: "#E3CAC3",
                // border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography
                className=" text-[#7B86B3]"
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                Select mode
              </Typography>
              <div className="flex flex-row items-center justify-center pt-5">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <img src={moonIcon} className="w-8" />
                  <button
                    onClick={() => {
                      return [
                        setMode("darkMode"),
                        setModalMode(false),
                        setOpen(false),
                      ];
                    }}
                    className="border border-[#C6D5B1] shadow-md bg-[#C6D5B1] text-[#f5f5f5] rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                  >
                    Dark
                  </button>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center">
                  <img src={sunIcon} className="w-8" />
                  <button
                    onClick={() => {
                      return [
                        setMode("lightMode"),
                        setModalMode(false),
                        setOpen(false),
                      ];
                    }}
                    className="border border-[#F8ABB3] shadow-md bg-[#F8ABB3] text-[#f5f5f5] rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                  >
                    Light
                  </button>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center">
                  <img src={colorIcon} className="w-8" />
                  <button
                    onClick={() => {
                      return [
                        setMode("colorMode"),
                        setModalMode(false),
                        setOpen(false),
                      ];
                    }}
                    className="border border-[#94CDEC] shadow-md bg-[#94CDEC] text-[#f5f5f5] rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                  >
                    Color
                  </button>
                </div>
              </div>
            </Box>
          </Modal>
          <div className="flex flex-col fixed bg-[#f5f5f5] h-screen lg:hidden">
            <Box
              className=" z-10"
              sx={{ transform: "translateZ(0px)", flexGrow: 1 }}
            >
              <Backdrop open={open} />
              <SpeedDial
                FabProps={{
                  size: "large",
                  style: { backgroundColor: "#7b86b3" },
                }}
                ariaLabel="SpeedDial tooltip example"
                sx={{ position: "absolute", bottom: 16, right: 16 }}
                icon={<SpeedDialIcon sx={{ color: "#f5f5f5" }} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
              >
                <SpeedDialAction
                  FabProps={{
                    style: { backgroundColor: "#e9d3a6" },
                  }}
                  key="HOME"
                  icon={<HomeIcon sx={{ color: "#f5f5f5" }} />}
                  tooltipTitle="HOME"
                  //   tooltipOpen
                  onClick={() => {
                    handleClick("home");
                  }}
                />
                <SpeedDialAction
                  FabProps={{
                    style: { backgroundColor: "#c6d5b1" },
                  }}
                  key="ME"
                  icon={<StarIcon sx={{ color: "#f5f5f5" }} />}
                  tooltipTitle="ME"
                  //   tooltipOpen
                  onClick={() => {
                    handleClick("me");
                  }}
                />

                <SpeedDialAction
                  FabProps={{
                    style: { backgroundColor: "#f8abb3" },
                  }}
                  key="DOCUMENT"
                  icon={<CodeIcon sx={{ color: "#f5f5f5" }} />}
                  tooltipTitle="DOCUMENT"
                  //   tooltipOpen
                  onClick={() => {
                    handleClick("document");
                  }}
                />

                <SpeedDialAction
                  FabProps={{
                    style: { backgroundColor: "#94cdec" },
                  }}
                  key="WORK"
                  icon={<CalendarIcon sx={{ color: "#f5f5f5" }} />}
                  tooltipTitle="WORK"
                  //   tooltipOpen
                  onClick={() => {
                    handleClick("work");
                  }}
                />

                <SpeedDialAction
                  FabProps={{
                    style: { backgroundColor: "#f0af9e" },
                  }}
                  key="MODE"
                  icon={<SettingIcon sx={{ color: "#f5f5f5" }} />}
                  tooltipTitle="MODE"
                  //   tooltipOpen
                  onClick={() => {
                    handleClick("mode");
                  }}
                />
              </SpeedDial>
            </Box>
          </div>
        </div>
      );
    }
  };
  const [operations, setOperation] = useState("home");
  const [modalMode, setModalMode] = useState(false);
  const handleModeClose = () => setModalMode(false);

  const handleClick = (operation: string) => {
    // console.log(operation);
    if (operation === "home") {
      return setOperation("home");
    } else if (operation === "me") {
      return setOperation("me");
    } else if (operation === "document") {
      return setOperation("document");
    } else if (operation === "work") {
      return setOperation("work");
    } else if (operation === "mode") {
      return setModalMode(true);
    }
  };

  return (
    <div>
      {operations === "me" ? <Me mode={mode} /> : null}
      {operations === "work" ? <Work mode={mode} /> : null}
      {operations === "home" ? <Home mode={mode} /> : null}
      {operations === "document" ? <Document mode={mode} /> : null}
      {/* MENU */}
      <div className="z-20  h-screen absolute bottom-5 right-5">
        {selectMode(mode)}
      </div>
    </div>
  );
}

export default Menus;
