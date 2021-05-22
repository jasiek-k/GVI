/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import Sketch from "react-p5";

import { getLineOffset, getDivider } from "../../../services/helpers";
import { verticalOffset, horizontalOffset } from "../../../data/data";
import { DEFAULT_LOGO_CONFIG } from '../../../config';

const GenerativeLogo = ({ roadsData, config, reverseColors = false }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { areaIndex, vertical, horizontal, oblique } = roadsData;
  const currentConfig = config || DEFAULT_LOGO_CONFIG;
  let canvasDim = (windowWidth / 100) * getDivider(windowWidth, currentConfig);
  const unit = canvasDim / 10;
  const stroke = canvasDim / 20;
  const backgroundColor = !!reverseColors ? "#000" : "#fff";
  const linesColor = !!reverseColors ? "#fff" : "#000";

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const setup = (p5, canvasParentRef) =>
    p5.createCanvas(canvasDim, canvasDim).parent(canvasParentRef);
  // p5.createCanvas(undefined, undefined).parent(canvasParentRef);

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

    oblique.map((item) => {
      const { order, start } = item;
      let startPoint = start * unit * 10;
      let endPoint = (start + 7) * unit * 10;
      let startY = 0;
      let endY = 10 * unit;

      if (order % 2 === 0) {
        startY = endY;
        endY = 0;
      }

      p5.stroke(p5.color(linesColor));
      p5.strokeWeight(stroke * 2);
      p5.line(startPoint, startY, endPoint, endY);
    });
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
