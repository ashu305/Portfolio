import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { PageHeaderText } from "../Constants/RenderConstants";
import Image from "../assets/MyImage.png";
interface Props {
  aboutRef: any;
}

const About: React.FC<Props> = ({ aboutRef }) => {
  return (
    <Container ref={aboutRef}>
      <Box sx={{ width: "100%", height: "100%" }}>
        <PageHeaderText pageHeaderText="About" />
      </Box>
      <CustomAboutBody>
        <CustomAboutCard elevation={0}>
          <CardMedia>
            <Avatar
              src={Image}
              sx={{
                width: ["20rem", "20rem", "21rem", "25rem"],
                height: ["20rem", "20rem", "21rem", "25rem"],
              }}
            />
          </CardMedia>
          <CardContent>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ad. Modi esse cumque
              sunt laborum amet ducimus voluptatibus non explicabo, sequi expedita et delectus
              repellat voluptas debitis illo laudantium corrupti.
            </Typography>
          </CardContent>
        </CustomAboutCard>
        <Card>
          <CardMedia>
            <Avatar alt="my Img" src="../assets/MyImage.png" />
          </CardMedia>
        </Card>
      </CustomAboutBody>
    </Container>
  );
};

export default About;

// CSS

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  minHeight: "100vh",
}));

const CustomAboutBody = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.between("sm", "md")]: {
    flexDirection: "column",
    marginTop: "2rem",
  },
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  flexGrow: 1,
  width: "100%",
  height: "100%",
  marginTop: "2rem",
}));

const CustomAboutCard = styled(Card)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "30rem",
    height: "30rem",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "30rem",
    height: "30rem",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "30rem",
    height: "30rem",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    width: "34rem",
    height: "34rem",
  },
  [theme.breakpoints.up("xl")]: {
    width: "35rem",
    height: "35rem",
  },

  background: "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));
