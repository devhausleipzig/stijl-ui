import { styled } from "../stitches.config";

export const Button = styled("button", {
  appearance: "none",
  border: "none",
  backgroundColor: "$gray400",
  borderRadius: "9999px",
  fontSize: "13px",
  paddingX: "15px",
  paddingY: "10px",
  "&:hover": {
    backgroundColor: "$gray500",
  },
});
