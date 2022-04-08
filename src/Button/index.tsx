import { styled } from "../stitches.config";

export const Button = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  $$shadowColor: "$colors$gray500",
  boxShadow: "0 0 0 1px $$shadowColor",
  backgroundColor: "$gray400",
  borderRadius: "9999px",
  fontSize: "13px",
  paddingX: "15px",
  paddingY: "10px",
  "&:hover": {
    backgroundColor: "$gray500",
  },
});
