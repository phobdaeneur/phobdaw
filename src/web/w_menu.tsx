import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import {
  Box,
  Backdrop,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  Modal,
  Button,
  Typography,
  SwipeableDrawer,
} from "@mui/material";
import {
  Home as HomeIcon,
  Star as StarIcon,
  Code as CodeIcon,
  CalendarMonth as CalendarIcon,
  Settings as SettingIcon,
  Nightlight as MoonIcon,
  LightMode as SunIcon,
  ColorLens as ColorIcon,
  Dehaze as DehazeIcon,
} from "@mui/icons-material";
import W_Home from "./w_home";
import W_ME from "./w_me";
import W_Document from "./w_document";
import W_Work from "./w_work";
import logoW from "../image/phobdaw/logoW.png";
import logoD from "../image/phobdaw/logoD.png";
import sunIcon from "../image/icon/sun.png";
import moonIcon from "../image/icon/moon.png";
import colorIcon from "../image/icon/color.png";

export default function W_Menu() {
  const [selected, setSelected] = useState("home");
  const [mode, setMode] = useState("darkMode");
  const [state, setState] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setState(newOpen);
  };

  const list = (mode: string) => {
    if (mode === "darkMode") {
      return (
        <Box
          sx={{
            width: 250,
            height: "100%",
            bgcolor: "#1c1c1c",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <div className="flex flex-col items-start justify-center pt-5 gap-5  px-5">
            <label className="text-xl font-mono text-[#f5f5f5] text-center">
              Select mode
            </label>
            <div className="flex flex-row gap-4 items-center justify-start px-5">
              <MoonIcon sx={{ color: "#f5f5f5" }} />
              <button
                onClick={() => {
                  return [setMode("darkMode")];
                }}
                className="bg-[#1c1c1c] text-[#f5f5f5] rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-[#f5f5f5] hover:text-[#1c1c1c] focus:outline-none focus:shadow-outline shadow-md shadow-[#000000]"
              >
                Dark
              </button>
            </div>

            <div className="flex flex-row gap-4 items-center justify-start px-5">
              <SunIcon sx={{ color: "#f5f5f5" }} />
              <button
                onClick={() => {
                  return [setMode("lightMode")];
                }}
                className="bg-[#1c1c1c] text-[#f5f5f5] rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-[#f5f5f5] hover:text-[#1c1c1c] focus:outline-none focus:shadow-outline shadow-md shadow-[#000000]"
              >
                Light
              </button>
            </div>

            <div className="flex flex-row gap-4 items-center justify-start px-5">
              <ColorIcon sx={{ color: "#f5f5f5" }} />
              <button
                onClick={() => {
                  return [setMode("colorMode")];
                }}
                className="bg-[#1c1c1c] text-[#f5f5f5] rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-[#f5f5f5] hover:text-[#1c1c1c] focus:outline-none focus:shadow-outline shadow-md shadow-[#000000]"
              >
                Color
              </button>
            </div>
          </div>
        </Box>
      );
    }
    if (mode === "lightMode") {
      return (
        <Box
          sx={{
            width: 250,
            height: "100%",
            bgcolor: "#f5f5f5",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <div className="flex flex-col items-start justify-center pt-5 gap-5  px-5">
            <label className="text-xl font-mono text-[#1c1c1c] text-center">
              Select mode
            </label>
            <div className="flex flex-row gap-4 items-center justify-start px-5">
              <MoonIcon sx={{ color: "#1c1c1c" }} />
              <button
                onClick={() => {
                  return [setMode("darkMode")];
                }}
                className="bg-[#f5f5f5] text-[#1c1c1c] rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-[#1c1c1c] hover:text-[#f5f5f5] focus:outline-none focus:shadow-outline shadow-md shadow-[#1c1c1c]/40"
              >
                Dark
              </button>
            </div>

            <div className="flex flex-row gap-4 items-center justify-start px-5">
              <SunIcon sx={{ color: "#1c1c1c" }} />
              <button
                onClick={() => {
                  return [setMode("lightMode")];
                }}
                className="bg-[#f5f5f5] text-[#1c1c1c] rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-[#1c1c1c] hover:text-[#f5f5f5] focus:outline-none focus:shadow-outline shadow-md shadow-[#1c1c1c]/40"
              >
                Light
              </button>
            </div>

            <div className="flex flex-row gap-4 items-center justify-start px-5">
              <ColorIcon sx={{ color: "#1c1c1c" }} />
              <button
                onClick={() => {
                  return [setMode("colorMode")];
                }}
                className="bg-[#f5f5f5] text-[#1c1c1c] rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-[#1c1c1c] hover:text-[#f5f5f5] focus:outline-none focus:shadow-outline shadow-md shadow-[#1c1c1c]/40"
              >
                Color
              </button>
            </div>
          </div>
        </Box>
      );
    }

    if (mode === "colorMode") {
      return (
        <Box
          sx={{
            width: 250,
            height: "100%",
            bgcolor: "#E3CAC3",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <div className="flex flex-col items-start justify-center pt-5 gap-5  px-5">
            <label className="text-xl font-mono text-[#7B86B3] text-center">
              Select mode
            </label>
            <div className="flex flex-row gap-4 items-center justify-start px-5">
              <img src={moonIcon} className="w-8" />
              <button
                onClick={() => {
                  return [setMode("darkMode")];
                }}
                className="border border-[#C6D5B1] shadow-md bg-[#C6D5B1] text-[#f5f5f5] rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-[#f5f5f5] hover:text-[#C6D5B1] focus:outline-none focus:shadow-outline"
              >
                Dark
              </button>
            </div>

            <div className="flex flex-row gap-4 items-center justify-start px-5">
              <img src={sunIcon} className="w-8" />
              <button
                onClick={() => {
                  return [setMode("lightMode")];
                }}
                className="border border-[#F8ABB3] shadow-md bg-[#F8ABB3] text-[#f5f5f5] rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-[#f5f5f5] hover:text-[#F8ABB3] focus:outline-none focus:shadow-outline"
              >
                Light
              </button>
            </div>

            <div className="flex flex-row gap-4 items-center justify-start px-5">
              <img src={colorIcon} className="w-8" />
              <button
                onClick={() => {
                  return [setMode("colorMode")];
                }}
                className="border border-[#94CDEC] shadow-md bg-[#94CDEC] text-[#f5f5f5] rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-[#f5f5f5] hover:text-[#94CDEC] focus:outline-none focus:shadow-outline"
              >
                Color
              </button>
            </div>
          </div>
        </Box>
      );
    }
  };

  const selectMode = (mode: string) => {
    if (mode === "darkMode") {
      return (
        <Tab.Group>
          <Tab.List className="flex flex-row items-center justify-between h-16 fixed px-10 z-10 w-screen bg-[#1c1c1c]">
            <img src={logoW} className=" h-16 w-auto" />
            <div className="flex flex-row gap-10 items-center justify-center bg-[#1c1c1c]">
              <Tab value="me" onClick={() => setSelected("me")}>
                {selected === "me" ? (
                  <div className="flex flex-row items-center justify-center gap-2 border-b-2 border-[#f5f5f5]">
                    <StarIcon sx={{ color: "#f5f5f5" }} />
                    <label className="text-lg font-mono text-[#f5f5f5]">
                      ABOUT ME
                    </label>
                  </div>
                ) : (
                  <label className="text-lg font-mono text-[#f5f5f5] cursor-pointer hover:text-[#9a9a9a]">
                    ABOUT ME
                  </label>
                )}
              </Tab>
              <Tab value="document" onClick={() => setSelected("document")}>
                {selected === "document" ? (
                  <div className="flex flex-row items-center justify-center gap-2 border-b-2 border-[#f5f5f5]">
                    <CodeIcon sx={{ color: "#f5f5f5" }} />
                    <label className="text-lg font-mono text-[#f5f5f5]">
                      TEMPLATE
                    </label>
                  </div>
                ) : (
                  <label className="text-lg font-mono text-[#f5f5f5] cursor-pointer hover:text-[#9a9a9a]">
                    TEMPLATE
                  </label>
                )}
              </Tab>
              <Tab value="work" onClick={() => setSelected("work")}>
                {selected === "work" ? (
                  <div className="flex flex-row items-center justify-center gap-2 border-b-2 border-[#f5f5f5]">
                    <CalendarIcon sx={{ color: "#f5f5f5" }} />
                    <label className="text-lg font-mono text-[#f5f5f5]">
                      MY WORK
                    </label>
                  </div>
                ) : (
                  <label className="text-lg font-mono text-[#f5f5f5] cursor-pointer hover:text-[#9a9a9a]">
                    MY WORK
                  </label>
                )}
              </Tab>
              <div className="cursor-pointer">
                <DehazeIcon
                  sx={{ color: "#f5f5f5" }}
                  onClick={toggleDrawer(true)}
                />
                <SwipeableDrawer
                  anchor="right"
                  open={state}
                  onClose={toggleDrawer(false)}
                  onOpen={toggleDrawer(true)}
                >
                  {list(mode)}
                </SwipeableDrawer>
              </div>
            </div>
          </Tab.List>
          <Tab.Panels className="bg-[#1c1c1c] pt-20">
            <Tab.Panel>
              <W_ME mode={mode} />
            </Tab.Panel>

            <Tab.Panel>
              <W_Document mode={mode} />
            </Tab.Panel>

            <Tab.Panel>
              <W_Work mode={mode} />
              {/* <Drawer /> */}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      );
    }
    if (mode === "lightMode") {
      return (
        <Tab.Group>
          <Tab.List className="flex flex-row items-center justify-between h-16 fixed px-10 z-10 w-screen bg-[#f5f5f5]">
            <img src={logoD} className=" h-16 w-auto" />
            <div className="flex flex-row gap-10 items-center justify-center">
              <Tab value="me" onClick={() => setSelected("me")}>
                {selected === "me" ? (
                  <div className="flex flex-row items-center justify-center gap-2 border-b-2 border-[#1c1c1c]">
                    <StarIcon sx={{ color: "#1c1c1c" }} />
                    <label className="text-lg font-mono text-[#1c1c1c]">
                      ABOUT ME
                    </label>
                  </div>
                ) : (
                  <label className="text-lg font-mono text-[#1c1c1c] cursor-pointer hover:text-[#1c1c1c]/50">
                    ABOUT ME
                  </label>
                )}
              </Tab>
              <Tab value="document" onClick={() => setSelected("document")}>
                {selected === "document" ? (
                  <div className="flex flex-row items-center justify-center gap-2 border-b-2 border-[#1c1c1c]">
                    <CodeIcon sx={{ color: "#1c1c1c" }} />
                    <label className="text-lg font-mono text-[#1c1c1c]">
                      TEMPLATE
                    </label>
                  </div>
                ) : (
                  <label className="text-lg font-mono text-[#1c1c1c] cursor-pointer hover:text-[#1c1c1c]/50">
                    TEMPLATE
                  </label>
                )}
              </Tab>
              <Tab value="work" onClick={() => setSelected("work")}>
                {selected === "work" ? (
                  <div className="flex flex-row items-center justify-center gap-2 border-b-2 border-[#1c1c1c]">
                    <CalendarIcon sx={{ color: "#1c1c1c" }} />
                    <label className="text-lg font-mono text-[#1c1c1c]">
                      MY WORK
                    </label>
                  </div>
                ) : (
                  <label className="text-lg font-mono text-[#1c1c1c] cursor-pointer hover:text-[#1c1c1c]/50">
                    MY WORK
                  </label>
                )}
              </Tab>
              <div className="cursor-pointer">
                <DehazeIcon
                  sx={{ color: "#1c1c1c" }}
                  onClick={toggleDrawer(true)}
                />
                <SwipeableDrawer
                  anchor="right"
                  open={state}
                  onClose={toggleDrawer(false)}
                  onOpen={toggleDrawer(true)}
                >
                  {list(mode)}
                </SwipeableDrawer>
              </div>
            </div>
          </Tab.List>
          <Tab.Panels className="bg-[#f5f5f5] pt-20">
            <Tab.Panel>
              <W_ME mode={mode} />
            </Tab.Panel>

            <Tab.Panel>
              <W_Document mode={mode} />
            </Tab.Panel>

            <Tab.Panel>
              <W_Work mode={mode} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      );
    }
    if (mode === "colorMode") {
      return (
        <Tab.Group>
          <Tab.List className="flex flex-row items-center justify-between h-16 fixed z-10 w-screen px-10 bg-[#E3CAC3]">
            <img src={logoD} className=" h-16 w-auto" />
            <div className="flex flex-row gap-10 items-center justify-center">
              <Tab value="me" onClick={() => setSelected("me")}>
                {selected === "me" ? (
                  <div className="flex flex-row items-center justify-center gap-2 border-b-2 border-[#F8ABB3]">
                    <StarIcon sx={{ color: "#F8ABB3" }} />
                    <label className="text-lg font-mono text-[#F8ABB3]">
                      ABOUT ME
                    </label>
                  </div>
                ) : (
                  <label className="text-lg font-mono text-[#f5f5f5] cursor-pointer hover:text-[#1c1c1c]/50">
                    ABOUT ME
                  </label>
                )}
              </Tab>
              <Tab value="document" onClick={() => setSelected("document")}>
                {selected === "document" ? (
                  <div className="flex flex-row items-center justify-center gap-2 border-b-2 border-[#80bbda]">
                    <CodeIcon sx={{ color: "#80bbda" }} />
                    <label className="text-lg font-mono text-[#80bbda]">
                      TEMPLATE
                    </label>
                  </div>
                ) : (
                  <label className="text-lg font-mono text-[#f5f5f5] cursor-pointer hover:text-[#1c1c1c]/50">
                    TEMPLATE
                  </label>
                )}
              </Tab>
              <Tab value="work" onClick={() => setSelected("work")}>
                {selected === "work" ? (
                  <div className="flex flex-row items-center justify-center gap-2 border-b-2 border-[#7B86B3]">
                    <CalendarIcon sx={{ color: "#7B86B3" }} />
                    <label className="text-lg font-mono text-[#7B86B3]">
                      MY WORK
                    </label>
                  </div>
                ) : (
                  <label className="text-lg font-mono text-[#f5f5f5] cursor-pointer hover:text-[#1c1c1c]/50">
                    MY WORK
                  </label>
                )}
              </Tab>
              <div className="cursor-pointer">
                <DehazeIcon
                  sx={{ color: "#f5f5f5" }}
                  onClick={toggleDrawer(true)}
                />
                <SwipeableDrawer
                  anchor="right"
                  open={state}
                  onClose={toggleDrawer(false)}
                  onOpen={toggleDrawer(true)}
                >
                  {list(mode)}
                </SwipeableDrawer>
              </div>
            </div>
          </Tab.List>
          <Tab.Panels className="bg-[#E3CAC3] pt-20">
            <Tab.Panel>
              <W_ME mode={mode} />
            </Tab.Panel>

            <Tab.Panel>
              <W_Document mode={mode} />
            </Tab.Panel>

            <Tab.Panel>
              <W_Work mode={mode} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      );
    }
  };
  return <div>{selectMode(mode)}</div>;
}
