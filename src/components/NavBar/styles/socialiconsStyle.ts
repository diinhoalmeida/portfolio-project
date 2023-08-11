import { FlexProps, ListItemProps } from "@chakra-ui/react";

export const socialIconsStyles: FlexProps = {
  display: { base: "none", lg: "flex" },
  pos: "fixed",
  flexDirection: "column",
  top: "35%",
  left: -5,
};

export const listItemStyles: ListItemProps = {
  w: 160,
  h: 20,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  _hover: { left: 0 },
  transition: "left 0.3s ease",
  position: "relative",
  left: "-85px",
};

export const linkStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  color: "#CBD5E0",
  paddingLeft: 20,
  paddingRight: 20,
};
