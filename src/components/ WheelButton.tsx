import { ButtonBase, Box } from "@mui/material";
import { FC, MouseEvent } from "react";
import wheel from "./assets/wheel.png";

export const WheelButton: FC<{
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}> = ({ onClick }) => {
  return (
    <Box
      sx={{
        width: "fit-content",
        border: "2px solid #3595F6",
        borderRadius: "50%",
      }}
    >
      <ButtonBase
        disableRipple
        onClick={onClick}
        sx={{ borderRadius: "50%", border: "8px solid #111315" }}
      >
        <img src={wheel} alt="wheel" width={40} height={40} />
      </ButtonBase>
    </Box>
  );
};
