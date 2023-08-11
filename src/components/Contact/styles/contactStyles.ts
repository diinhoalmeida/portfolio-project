import { FlexProps, TextProps, ButtonProps } from "@chakra-ui/react";

export const contactContainerStyles: FlexProps = {
  id: "contact",
  w: "100vw",
  h: "100vh",
  bgColor: "#0a192f",
  justifyContent: "center",
  alignItems: "center",
  p: "4",
};

export const formStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "600px",
  width: "100%",
  gap: 20,
};

export const sectionTitleStyles: TextProps = {
  fontSize: "4xl",
  fontWeight: "bold",
  display: "inline",
  borderBottom: "4px",
  borderColor: "pink.600",
  textColor: "gray.300",
};

export const sectionSubtitleStyles: TextProps = {
  textColor: "gray.300",
  py: "4",
};

export const inputStyles = {
  backgroundColor: "#ccd6f6",
  padding: 10,
};

export const buttonStyles: ButtonProps = {
  textColor: "white",
  borderWidth: "1px",
  bgColor: "#0a192f",
  _hover: { bgColor: "#B83280", borderColor: "#B83280" },
  mx: "auto",
  borderColor: "white",
  display: "flex",
  alignItems: "center",
};
