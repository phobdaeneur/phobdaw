import React from "react";
import Menus from "../mobile/menu";
import W_Menu from "../web/w_menu";
function Phobdaw() {
  return (
    <div>
      <div className=" hidden md:block h-screen w-screen">
        <W_Menu />
      </div>
      <div className=" block md:hidden h-screen w-screen">
        <Menus />
      </div>
    </div>
  );
}

export default Phobdaw;
