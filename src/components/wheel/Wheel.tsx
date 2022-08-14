import { Box } from "@mui/material";
import { useRef, useState, useEffect, FC } from "react";
import wheel from "../assets/wheel.png";

export const wheelSize = 220;

type WheelProps = {
  setColorCode: ({ hex }: { hex: string }) => void;
};

export const Wheel: FC<WheelProps> = ({ setColorCode }) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const [xy, set] = useState({ x: 0, y: 0 });

  const blue = [155, 0, 255];

  const mouseMove = (e: any, context: any) => {
    const x = e.offsetX;
    const y = e.offsetY;
    set({ x: x - 10, y: y - 10 });
    if (context) {
      const p = context?.getImageData(x, y, 1, 1).data;
      const hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
      setColorCode({ hex });
    }
  };

  useEffect(() => {
    if (ref.current) {
      const canvas = ref.current;
      const context = canvas.getContext("2d");

      for (let i = 0; i < wheelSize; i++) {
        for (let j = 0; j < wheelSize; j++) {
          const color = context!.getImageData(j, i, 1, 1).data;
          if (
            color[0] === blue[0] &&
            color[1] === blue[1] &&
            color[2] === blue[2]
          ) {
            set({ x: j - 10, y: i - 10 });
            const hex =
              "#" +
              ("000000" + rgbToHex(color[0], color[1], color[2])).slice(-6);
            setColorCode({
              hex,
            });

            return;
          }
        }
      }

      const img = new Image();

      img.src = wheel;
      if (img.complete) context?.drawImage(img, 0, 0, wheelSize, wheelSize);

      canvas.addEventListener("mousemobe", (e) => mouseMove(e, context));
    }
  }, []);

  return (
    <Box
      sx={{
        maxWidth: wheelSize,
        maxHeight: wheelSize,
        position: "relative",
        margin: "auto",
      }}
    >
      <div
        style={{
          position: "absolute",
          background: "#fff",
          borderRadius: "50%",
          width: "20px",
          border: "1px solid #000",
          height: "20px",
          top: xy.y,
          left: xy.x,
        }}
      />
      <canvas
        ref={ref}
        id="example"
        width={wheelSize}
        height={wheelSize}
        style={{
          margin: "0 auto",
          borderRadius: "50%",
          maxWidth: wheelSize,
          maxHeight: wheelSize,
        }}
      ></canvas>
    </Box>
  );
};

export function rgbToHex(r: number, g: number, b: number) {
  if (r > 255 || g > 255 || b > 255) return;
  return ((r << 16) | (g << 8) | b).toString(16);
}
