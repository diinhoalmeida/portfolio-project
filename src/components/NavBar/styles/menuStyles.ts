// menuStyles.ts
import { ListItemProps } from "@chakra-ui/react";

export const listStyles = {
  gap: 14,
  styleType: "none",
};

export const listItemStyles: ListItemProps = {
  borderWidth: "1px",
  borderColor: "#0a192f",
  px: "4",
  py: "2",
  _hover: { borderColor: "white", rounded: "lg" },
  cursor: "pointer",
};
