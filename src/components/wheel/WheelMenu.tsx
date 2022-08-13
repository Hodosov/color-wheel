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
  const [colorCode, setColorCode] = useState<string>("");
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
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
        },
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      <Wheel
        setColorCode={(code) => setColorCode(code)}
        colorCode={colorCode}
      />
      <OpacitySlider color={colorCode} />
      <div
        style={{
          background: colorCode,
          width: 50,
          height: 50,
        }}
      ></div>
    </Menu>
  );
};
