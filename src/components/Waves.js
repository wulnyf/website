import React, { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import theme from "../theme";
import hexToRgb from "../utils/hexToRgb";

const CanvasContainer = styled.div`
  width: 100%;
  padding-bottom: 10%;
  height: 0;
  position: relative;
  overflow: hidden;
`;
const Canvas = styled.canvas`
  position: absolute;
  width: 103%;
  height: 100%;
`;

export const Waves = ({ ...rest }) => {
  const canvasRef = useRef(null);

  const drawWave = (ctx, height, width, formula, color) => {
    ctx.beginPath();
    ctx.moveTo(0, formula(0));
    for (let i = 1; i < width; i++) {
      ctx.lineTo(i, formula(i));
    }
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  };

  const animateWaves = useCallback((ctx, canvas, time, exp) => {
    const height = canvas.height;
    const width = canvas.width;
    // Clear
    ctx.clearRect(0, 0, width, height);
    const x = hexToRgb(theme.palette.secondary2);
    const y = hexToRgb(theme.palette.primary2);
    const z = hexToRgb(theme.palette.primary1);

    // Draw
    drawWave(
      ctx,
      height,
      width,
      (input) =>
        height / 4 +
        (height / 5) *
          Math.sin((input + time / (width / 7)) / (width / 12) + width / 10),
      `rgba(${x.r},${x.g},${x.b},1)`
    );
    drawWave(
      ctx,
      height,
      width,
      (input) =>
        height / 3 +
        (height / 6) *
          Math.sin((input - time / (width / 5)) / (width / 8) + width / 15),
      `rgba(${y.r},${y.g},${y.b},.8)`
    );
    drawWave(
      ctx,
      height,
      width,
      (input) =>
        height / 1.8 +
        (height / 5) *
          Math.sin((input + time / (width / 5)) / (width / 10) + width / 4),
      `rgba(${z.r},${z.g},${z.b},.8)`
    );

    // Call again
    window.requestAnimationFrame((time) =>
      animateWaves(ctx, canvas, time, exp)
    );
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      window.requestAnimationFrame((time) =>
        animateWaves(
          ctx,
          canvas,
          time,
          (input) => 100 + 40 * Math.sin(input / 30)
        )
      );
    }
  }, [animateWaves]);

  return (
    <CanvasContainer {...rest}>
      <Canvas ref={canvasRef}></Canvas>
    </CanvasContainer>
  );
};

export default Waves;
