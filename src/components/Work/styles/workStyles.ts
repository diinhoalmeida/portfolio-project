import { BoxProps, ButtonProps, FlexProps, TextProps } from "@chakra-ui/react";

export const workContainerStyles: BoxProps = {
  w: "100vw",
  textColor: "gray.300",
  bgColor: "#0a192f",
};

export const workContentStyles: FlexProps = {
  maxW: "1000px",
  mx: "auto",
  p: "4",
  flexDirection: "column",
  justifyContent: "center",
  w: "full",
  h: "full",
};

export const workTitleStyles: TextProps = {
  fontSize: "4xl",
  fontWeight: "bold",
  display: "inline",
  borderBottom: "4px",
  textColor: "gray.300",
  borderColor: "pink.600",
};

export const workSubtitleStyles: TextProps = {
  py: "6",
};

export const projectItemStyles: FlexProps = {
  boxShadow: "#040c16",
  shadow: "lg",
  w: { base: "300px", md: "full" },
  h: "200px",
  mx: "auto",
  rounded: "md",
};

export const hoverOverlayStyles: FlexProps = {
  justifyContent: "center",
  textAlign: "center",
  alignContent: "center",
  flexDirection: "column",
  transition: "background-color 0.3s ease",
  w: "full",
  h: "full",
};

export const projectButtonStyles: ButtonProps = {
  textAlign: "center",
  rounded: "lg",
  px: "4",
  py: "3",
  m: "2",
  bgColor: "white",
  textColor: "gray.700",
  fontWeight: "bold",
  fontSize: "lg",
};
