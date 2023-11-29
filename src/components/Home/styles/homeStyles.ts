// homeStyles.ts
import { FlexProps, TextProps, ButtonProps } from "@chakra-ui/react";

export const containerStyles: FlexProps = {
  id: "home",
  w: "100vw",
  h: "100vh",
  bgColor: "#0a192f",
};

export const contentStyles: FlexProps = {
  maxW: "1000px",
  mx: "auto",
  px: "8",
  flexDirection: "column",
  justifyContent: "center",
  h: "full",
};

export const nameStyles: TextProps = {
  textColor: "pink.600",
};

export const titleStyles: TextProps = {
  fontSize: { base: "4xl", sm: "7xl" },
  fontWeight: "bold",
  textColor: "#ccd6f6",
};

export const subtitleStyles: TextProps = {
  fontSize: { base: "4xl", sm: "7xl" },
  fontWeight: "bold",
  textColor: "#8892b0",
};

export const descriptionStyles: TextProps = {
  textColor: "#8892b0",
  py: "4",
  maxW: "700px",
};

export const buttonStyles: ButtonProps = {
  textColor: "white",
  bgColor: "#0a192f",
  borderColor: "white",
  borderWidth: "1px",
  px: 6,
  py: 3,
  my: 2,
  display: "flex",
  alignItems: "center",
  _hover: {
    bgColor: "#B83280",
    borderColor: "#B83280",
    textColor: "",
  },
};

export const arrowStyles: FlexProps = {
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  transitionDuration: "300ms",
};
