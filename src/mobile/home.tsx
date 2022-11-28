import React from "react";
import bgDark from "../image/bg/2.png";
import bgWhite from "../image/bg/3.png";
import bgColor from "../image/bg/4.png";

interface Props {
  mode: string;
}

function Home({ mode }: Props) {
  const selectMode = (mode: string) => {
    if (mode === "darkMode") {
      return (
        <div
          style={{ backgroundImage: `url(${bgDark})` }}
          className=" w-screen h-screen bg-left-bottom bg-cover flex flex-col items-center justify-center"
        >
          <label className=" text-2xl text-[#f5f5f5] font-mono tracking-widest pt-36">
            P H O B D A W N E U R.
          </label>
          <label className=" text-base text-[#f5f5f5] font-mono indent-8 px-5 md:px-10">
            ดาวเหนือ มีชื่อจริงๆว่า ดาวโพลาริส (Polaris) เป็นดาวฤกษ์
            สว่างในกลุ่มดาวหมีเล็ก (Ursa Minor) แต่ที่เรามักเรียกว่า ดาวเหนือ
            นั่นก็เพราะดาวโพลาริสเป็นดาวฤกษ์ที่ปรากฏใกล้ “ขั้วฟ้าเหนือ”
            เป็นบริเวณที่แกนหมุนของโลกชี้ไปบนท้องฟ้าพอดีทำให้เป็นดาวที่ไม่ขึ้นไม่ตก
            และปรากฏอยู่นิ่งๆ เหนือขอบฟ้าทางทิศเหนือตลอดทั้งคืน
            เเล้วคุณเคยได้ยินประโยคที่บอกว่า
            "เมื่อคุณเดินหลงทางให้มองหาดาวเหนือไหม"
            ดังนั้นเราจึงหวังว่าคุณจะพบดาวเหนือ (Phobdawneur)
            ของคุณเองในสักวัน...
          </label>
        </div>
      );
    }
    if (mode === "lightMode") {
      return (
        <div
          style={{ backgroundImage: `url(${bgWhite})` }}
          className=" w-screen h-screen bg-cover bg-center flex flex-col items-center justify-end"
        >
          <label className=" text-xl text-[#1c1c1c] font-mono tracking-widest">
            P H O B D A W N E U R.
          </label>
          <label className=" text-sm text-[#1c1c1c] font-mono indent-8 pb-20 px-14">
            ดาวเหนือ มีชื่อจริงๆว่า ดาวโพลาริส (Polaris) เป็นดาวฤกษ์
            สว่างในกลุ่มดาวหมีเล็ก (Ursa Minor) แต่ที่เรามักเรียกว่า ดาวเหนือ
            นั่นก็เพราะดาวโพลาริสเป็นดาวฤกษ์ที่ปรากฏใกล้ “ขั้วฟ้าเหนือ”
            เป็นบริเวณที่แกนหมุนของโลกชี้ไปบนท้องฟ้าพอดีทำให้เป็นดาวที่ไม่ขึ้นไม่ตก
            และปรากฏอยู่นิ่งๆ เหนือขอบฟ้าทางทิศเหนือตลอดทั้งคืน
            เเล้วคุณเคยได้ยินประโยคที่บอกว่า
            "เมื่อคุณเดินหลงทางให้มองหาดาวเหนือไหม"
            ดังนั้นเราจึงหวังว่าคุณจะพบดาวเหนือ (Phobdawneur)
            ของคุณเองในสักวัน...
          </label>
        </div>
      );
    }

    if (mode === "colorMode") {
      return (
        <div
          style={{ backgroundImage: `url(${bgColor})` }}
          className=" w-screen h-screen bg-right-bottom bg-cover flex flex-col items-center justify-start"
        >
          <label className=" text-xl text-[#1c1c1c] font-mono tracking-widest pt-40">
            P H O B D A W N E U R.
          </label>
          <label className=" text-sm text-[#1c1c1c] font-mono indent-8 px-6">
            ดาวเหนือ มีชื่อจริงๆว่า ดาวโพลาริส (Polaris) เป็นดาวฤกษ์
            สว่างในกลุ่มดาวหมีเล็ก (Ursa Minor) แต่ที่เรามักเรียกว่า ดาวเหนือ
            นั่นก็เพราะดาวโพลาริสเป็นดาวฤกษ์ที่ปรากฏใกล้ “ขั้วฟ้าเหนือ”
            เป็นบริเวณที่แกนหมุนของโลกชี้ไปบนท้องฟ้าพอดีทำให้เป็นดาวที่ไม่ขึ้นไม่ตก
            และปรากฏอยู่นิ่งๆ เหนือขอบฟ้าทางทิศเหนือตลอดทั้งคืน
            เเล้วคุณเคยได้ยินประโยคที่บอกว่า
            "เมื่อคุณเดินหลงทางให้มองหาดาวเหนือไหม"
            ดังนั้นเราจึงหวังว่าคุณจะพบดาวเหนือ (Phobdawneur)
            ของคุณเองในสักวัน...
          </label>
        </div>
      );
    }
  };
  return <div>{selectMode(mode)}</div>;
}

export default Home;
