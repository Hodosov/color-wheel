import { FC, useState } from "react";
import { Box, Menu } from "@mui/material";
import { hexToRGB, Wheel } from "./Wheel";
import { OpacitySlider } from "./Slider";

type MenuProps = {
  anchorEl: Element | null | undefined;
  open: boolean;
  handleClose: () => void;
};

export const WheelMenu: FC<MenuProps> = ({ anchorEl, open, handleClose }) => {
  const [colorCode, setColorCode] = useState<{ hex: string }>({
    hex: "",
  });
  const [rgba, setRgba] = useState("");

  const sliderChange = (value: number | number[]) => {
    const alfa = Array.isArray(value) ? value[0] : value;
    const rgb = hexToRGB(colorCode.hex, alfa / 100);
    setRgba(rgb);
  };

  return (
    <Menu
      PaperProps={{
        sx: {
          padding: 2,
          marginTop: 4,
          background: "#1B1D1F",
          border: "0.5px solid #2A2D32",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
          borderRadius: "12px 0px 12px 12px",
        },
      }}
      sx={{
        "& .MuiList-root.MuiMenu-list": {
          padding: 2,
        },
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      <Wheel
        setColorCode={(code) => {
          setColorCode((prev) => ({ ...prev, hex: code.hex }));
          console.log(hexToRGB(colorCode.hex, 1));
          sliderChange(100);
        }}
      />
      <OpacitySlider
        color={colorCode.hex}
        onChange={(_, value) => sliderChange(value)}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          "&:before": {
            zIndex: 1,
            position: "absolute",
            width: 50,
            height: 50,
            content: "' '",
            background: rgba || colorCode.hex,
          },
          margin: "24px auto 0",
          background: "#fff",
          width: 50,
          height: 50,
          backgroundImage: `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,
        }}
      ></Box>
    </Menu>
  );
};
