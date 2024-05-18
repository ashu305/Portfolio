import { Box, Typography, styled } from "@mui/material";
import React from "react";

interface Props {
  pageHeaderText?: string;
}

const PageHeaderText: React.FC<Props> = ({ pageHeaderText }) => {
  return (
    <CustomPageHeaderContainer>
      <CustomPageHeaderText variant="caption">{pageHeaderText}</CustomPageHeaderText>
      <CustomPageHeaderUnderLine />
    </CustomPageHeaderContainer>
  );
};

export { PageHeaderText };

// CSS
const CustomPageHeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  marginTop: "6rem",
}));
const CustomPageHeaderText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "3.8rem",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "4rem",
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: "4.5rem",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    fontSize: "4.8rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "5rem",
  },
}));

const CustomPageHeaderUnderLine = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    minWidth: "12rem",
    minHeight: "0.25rem",
    marginTop: "-1.5rem",
  },
  [theme.breakpoints.between("sm", "md")]: {
    minWidth: "13rem",
    minHeight: "0.25rem",
    marginTop: "-1.5rem",
  },
  [theme.breakpoints.between("md", "lg")]: {
    minWidth: "15rem",
    minHeight: "0.25rem",
    marginTop: "-1.5rem",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    minWidth: "15.2rem",
    minHeight: "0.25rem",
  },
  [theme.breakpoints.up("xl")]: {
    minWidth: "15.5rem",
    minHeight: "0.25rem",
  },
  marginTop: "-2rem",
  background: "#000",
}));
