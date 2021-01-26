/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useEffect, useState, useRef } from "react";
import Sketch from "react-p5";

const verticalOffset = [
  { offset: 1, id: [2, 7, 12] },
  { offset: 3, id: [0, 5, 10, 15] },
  { offset: 5, id: [3, 8, 13] },
  { offset: 7, id: [1, 6, 11, 16] },
  { offset: 9, id: [4, 9, 14] },
];

const horizontalOffset = [
  { offset: 2, id: [2] },
  { offset: 4, id: [0] },
  { offset: 6, id: [3] },
  { offset: 8, id: [1] },
];

// TO DO
const getDivider = (windowSize) => {
  if (windowSize >= 1024) return 14.8277083333;
  else if (windowSize < 1024 && windowSize >= 600) return 10;
  else return 5;
};

const getLineOffset = (lineId, offsetArray) => {
  for (let i = 0; i < offsetArray.length; i++) {
    if (offsetArray[i].id.includes(lineId)) return offsetArray[i].offset;
  }
};

// TO DO
// Róznicowanie grubości linii (linia i kierunek)
// Kolory i ich odwracanie
// WYnieść rzeczy do helpersów
const GenerativeLogo = ({ roadsData, reverseColors = false }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { areaIndex, vertical, horizontal, oblique } = roadsData;
  let canvasDim = (windowWidth / 100) * getDivider(windowWidth);
  const unit = canvasDim / 10;
  const stroke = canvasDim / 20;
  const backgroundColor = !!reverseColors ? "#000" : "#fff";
  const linesColor = !!reverseColors ? "#fff" : "#000";

  console.log(roadsData);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [canvasDim]);

  const setup = (p5, canvasParentRef) =>
    p5.createCanvas(canvasDim, canvasDim).parent(canvasParentRef);

  // NOTE: Do not use setState in the draw function or in functions that are executed in the draw function
  const draw = (p5) => {
    p5.background(backgroundColor);

    // x1 y1 x2 y2
    vertical.map((item) => {
      const { length, order, start } = item;
      const vertPosition = getLineOffset(order, verticalOffset) * unit;
      const startPoint = (start % 10) * unit;
      const endPoint = length * unit + startPoint;

      p5.stroke(p5.color(linesColor));
      p5.strokeCap("ROUND");
      p5.strokeWeight(areaIndex <= 6 ? stroke : stroke * 3);
      p5.line(vertPosition, startPoint, vertPosition, endPoint);
    });

    horizontal.map((item) => {
      const { length, order, start } = item;
      const horiPosition = getLineOffset(order, horizontalOffset) * unit;
      const startPoint = (start % 10) * unit;
      const endPoint = length * unit + startPoint;

      p5.stroke(p5.color(linesColor));
      p5.strokeCap("ROUND");
      p5.strokeWeight(areaIndex <= 6 ? 3 * stroke : stroke);
      p5.line(startPoint, horiPosition, endPoint, horiPosition);
    });

    /*
    oblique.map((item) => {
      const { length, order, start } = item;
      const horiPosition = getLineOffset(order, horizontalOffset) * unit;
      const startPoint = (start % 10) * unit;
      const endPoint = length * unit + startPoint;

      p5.strokeWeight(2 * stroke);
      p5.line(startPoint, horiPosition, endPoint, horiPosition);
    });
    */
  };

  return (
    <Sketch
      setup={setup}
      draw={draw}
      windowResized={(p5) => p5.resizeCanvas(canvasDim, canvasDim)}
    />
  );
};

export default GenerativeLogo;
