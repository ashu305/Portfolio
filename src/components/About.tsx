import { Avatar, Box, Card, CardContent, CardMedia, Grid, Typography, styled } from "@mui/material";
import React from "react";
import { PageHeaderText } from "../Constants/RenderConstants";
import Image from "../assets/MyImage.png";
import { AboutDetails } from "../Constants/AppConstants";
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
                width: ["10rem", "20rem", "21rem", "25rem"],
                height: ["10rem", "20rem", "21rem", "25rem"],
              }}
            />
          </CardMedia>
          <CardContent>
            <Typography variant="body1">{AboutDetails.bio}</Typography>
          </CardContent>
        </CustomAboutCard>
        <CustomSkillContainer container spacing={2}>
          {AboutDetails.skills.map((skill, index) => (
            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              lg={4}
              sx={{
                transition: "all 0.5s ease",
                scrollbarWidth: "none",
                cursor: "pointer",
                ":hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Card
                sx={{
                  width: ["8rem", "10rem", "12rem"],
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: "1rem 0",
                  backgroundColor: "white",
                }}
              >
                {skill.icon ? (
                  <skill.icon
                    style={{
                      fontSize: "2.5rem",
                      color: "#006FBF",
                    }}
                  />
                ) : (
                  <></>
                )}
                <CardContent
                  sx={{
                    fontSize: ["0.8rem", "1rem", "1.3rem"],
                  }}
                >
                  {skill.name}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </CustomSkillContainer>
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
  justifyContent: "space-around",
  alignItems: "center",
  flexGrow: 1,
  width: "100%",
  height: "100%",
  marginTop: "2rem",
}));

const CustomAboutCard = styled(Card)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "20rem",
    height: "25rem",
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

const CustomSkillContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    height: "20rem",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "50%",
    height: "10%",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "42%",
    height: "30rem",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    width: "50%",
    height: "34rem",
  },
  [theme.breakpoints.up("xl")]: {
    maxWidth: "40%",
    maxHeight: "25%",
  },

  margin: "1rem",
  overflowY: "scroll",
  overflowX: "hidden",
  scrollbarWidth: "none",
}));
