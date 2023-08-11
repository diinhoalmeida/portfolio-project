import {
  FlexProps,
  ImageProps,
  ListItemProps,
  ListProps,
  TextProps,
} from "@chakra-ui/react";

export const skillsContainerStyles: FlexProps = {
  w: "full",
  h: "full",
  bgColor: "#0a192f",
  textColor: "gray.300",
};

export const skillsContentStyles: FlexProps = {
  maxW: "1000px",
  mx: "auto",
  p: "4",
  flexDirection: "column",
  justifyContent: "center",
  w: "full",
};

export const skillsTitleStyles: TextProps = {
  fontSize: "4xl",
  fontWeight: "bold",
  display: "inline",
  borderBottom: "4px",
  borderColor: "pink.600",
};

export const skillsSubtitleStyles: TextProps = {
  py: "4",
};

export const technologiesListStyles: ListProps = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "4",
  textAlign: "center",
  py: "8",
  padding: 0,
  listStyleType: "none",
};

export const technologyListItemStyles: ListItemProps = {
  boxShadow: "md",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  transition: "transform 500ms",
  _hover: {
    boxShadow: "md",
    transform: "scale(1.1)",
    transition: "transform 500ms",
  },
};

export const technologyImageStyles: ImageProps = {
  w: "20",
  mx: "auto",
};
