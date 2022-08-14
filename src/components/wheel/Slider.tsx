import { Slider } from "@mui/material";
import { FC } from "react";

export const OpacitySlider: FC<{ color: string }> = ({ color }) => {
  return (
    <Slider
      disableSwap
      sx={{
        width: "305px",
        mt: 3,
        "& .MuiSlider-rail": {
          background: `linear-gradient(to right,${color}, #000)`,
          opacity: 1,
          height: "20px",
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
      }}
    />
  );
};
