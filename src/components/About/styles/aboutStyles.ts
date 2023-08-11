import { BoxProps, TextProps, FlexProps, GridProps } from "@chakra-ui/react";

export const aboutContainerStyles: BoxProps = {
  id: "about",
  w: "100vw",
  h: "100vh",
  bgColor: "#0a192f",
  textColor: "gray.300",
};

export const flexContainerStyles: FlexProps = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  w: "full",
  h: "full",
};

export const gridContainerStyles: GridProps = {
  maxW: "1000px",
  w: "full",
  templateColumns: "repeat(2, 1fr)",
  gap: "8",
};

export const aboutTextStyles: BoxProps = {};

export const sectionTitleStyles: TextProps = {
  fontSize: "4xl",
  fontWeight: "bold",
  display: "inline",
  borderBottom: "4px",
  borderColor: "pink.600",
};

export const aboutTextStyle: TextProps = {
  fontSize: "4xl",
  fontWeight: "bold",
};

export const descriptionTextStyle: TextProps = {
  mt: 3,
};
