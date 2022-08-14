import { Slider } from "@mui/material";
import { FC } from "react";
import { hexToRGB } from "./Wheel";

export const OpacitySlider: FC<{
  color: string;
  value: number;
  onChange: (_: Event, value: number | number[]) => void;
}> = ({ color, onChange, value }) => {
  return (
    <Slider
      value={value}
      onChange={onChange}
      disableSwap
      defaultValue={100}
      sx={{
        width: "305px",
        mt: 3,
        "& .MuiSlider-rail": {
          background: "#fff",
          backgroundImage: `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,

          opacity: 1,
          height: "20px",
          "&:before": {
            position: "absolute",
            content: "' '",
            height: "20px",
            width: "100%",
            borderRadius: 20,
            backgroundImage: `linear-gradient(90deg, ${hexToRGB(
              color,
              0.1
            )}, ${hexToRGB(color)})`,
          },
        },
        "& .MuiSlider-thumb": {
          color: "#FFF",
          width: "10px",
          height: "28px",
          backdropFilter: "blur(7px)",
          border: "1px solid #fff",
          borderRadius: 20,
        },
        "& .MuiSlider-track": {
          color: "transparent",
        },
        "& .Mui-active": {
          boxShadow: "none",
        },
      }}
    />
  );
};
