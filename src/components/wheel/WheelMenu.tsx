import { FC, useState } from "react";
import { Menu } from "@mui/material";
import { Wheel } from "./Wheel";
import { OpacitySlider } from "./Slider";

type MenuProps = {
  anchorEl: Element | null | undefined;
  open: boolean;
  handleClose: () => void;
};

export const WheelMenu: FC<MenuProps> = ({ anchorEl, open, handleClose }) => {
  const [colorCode, setColorCode] = useState<{ hex: string }>({ hex: "" });
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
      <Wheel setColorCode={(code) => setColorCode({ hex: code.hex })} />
      <OpacitySlider color={colorCode.hex} />
      <div
        style={{
          background: colorCode.hex,
          width: 50,
          height: 50,
        }}
      ></div>
    </Menu>
  );
};
