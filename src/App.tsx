import { Box } from "@mui/material";
import { WheelMenu } from "./components/wheel/WheelMenu";
import { WheelButton } from "./components/ WheelButton";
import { useState, MouseEvent } from "react";

function App() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        background: "#111315",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          paddingTop: 10,
          marginLeft: 10,
        }}
      >
        <WheelButton onClick={handleClick} />
        <WheelMenu open={open} handleClose={handleClose} anchorEl={anchorEl} />
      </Box>
    </Box>
  );
}

export default App;
