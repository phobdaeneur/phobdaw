import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import work from "../component/work";

const localizer = momentLocalizer(moment);
interface Props {
  mode: string;
}
function W_Work({ mode }: Props) {
  const selectMode = (mode: string) => {
    if (mode === "darkMode") {
      return (
        <div className="h-screen bg-[#1c1c1c] flex flex-col items-center justify-start w-screen px-10">
          <div>
            <Calendar
              localizer={localizer}
              events={work}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500, color: "#f5f5f5", width: 1200 }}
            />
          </div>
        </div>
      );
    }
    if (mode === "lightMode") {
      return (
        <div className="h-screen bg-[#f5f5f5] flex flex-col items-center justify-start w-screen px-10">
          <div>
            <Calendar
              localizer={localizer}
              events={work}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500, color: "#1c1c1c", width: 1200 }}
            />
          </div>
        </div>
      );
    }

    if (mode === "colorMode") {
      return (
        <div className="h-screen bg-[#E3CAC3] flex flex-col items-center justify-start w-screen px-10">
          <div>
            <Calendar
              localizer={localizer}
              events={work}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500, color: "#1c1c1c", width: 1200 }}
            />
          </div>
        </div>
      );
    }
  };
  return <div>{selectMode(mode)}</div>;
}

export default W_Work;
