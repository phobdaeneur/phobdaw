import React from "react";
import ReactCurvedText from "react-curved-text";

function WhiteRotate() {
  return (
    <ReactCurvedText
      width={500}
      height={500}
      cx={250}
      cy={250}
      rx={200}
      ry={200}
      startOffset={0}
      reversed={false}
      text="P H O B D A W N E U R. I HOPE YOU CAN FIND YOUR OWN."
      textProps={{ style: { fontSize: 45 } }}
      textPathProps={{ style: { fill: "#1c1c1c" } }}
      tspanProps={{ dy: "40" }}
      ellipseProps={null}
      svgProps={null}
    />
  );
}

export default WhiteRotate;
