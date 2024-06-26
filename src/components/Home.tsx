import { Box, Typography, styled } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import Image from "../assets/HeroBackground.png";
import React, { Ref } from "react";

interface Props {
  homeRef: Ref<HTMLButtonElement>;
}
const Home: React.FC<Props> = ({ homeRef }) => {
  return (
    <>
      <Container ref={homeRef}>
        <CustomMessageContainer>
          <CustomTextStyle variant="h1">
            Hey, I am <CustomNameText variant="h3">Ashutoh Sharma</CustomNameText>
          </CustomTextStyle>
          <CustomTextStyle>
            I'm a
            <CustomNameText>
              <TypeAnimation
                sequence={["Software Developer", 1000, "S", 1000]}
                speed={10}
                repeat={Infinity}
              />
            </CustomNameText>
          </CustomTextStyle>
        </CustomMessageContainer>
      </Container>
    </>
  );
};

export default Home;

// CSS
const Container = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: "0 1.5rem",
  },
  [theme.breakpoints.between("sm", "md")]: {
    padding: "0 1.2rem",
  },
  [theme.breakpoints.between("md", "lg")]: {
    padding: "0 1.5rem",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    padding: "0 1.8rem",
  },
  [theme.breakpoints.up("xl")]: {
    padding: "0 2.1rem",
  },
  height: "90%",
  display: "flex",
  backgroundImage: `url(${Image})`,
  minHeight: "100vh",
}));

const CustomMessageContainer = styled(Box)(({ theme }) => ({
  marginTop: "15rem",
}));

const CustomTextStyle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.between("xs", "sm")]: {
    fontSize: "2.5rem",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "2.9rem",
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: "3.5rem",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    fontSize: "4rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "5.5rem",
  },
  color: "#fff",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

const CustomNameText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
    marginLeft: "0",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "2.9rem",
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: "3.7rem",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    fontSize: "4rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "5.5rem",
  },
  marginLeft: "0.7rem",
  color: "#1FF2FF",
  fontWeight: "bold",
}));
