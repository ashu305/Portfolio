import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import React from "react";
import { NavbarHeaders } from "../Constants/AppConstants";

interface Props {
  homeComponentInView: boolean;
}

const Navbar: React.FC<Props> = ({ homeComponentInView }) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (openInstruction: boolean) => () => {
    setOpen(openInstruction);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100%",
        marginBottom: "2rem",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {NavbarHeaders.map((header, index) => (
          <ListItem key={index}>
            <ListItemButton>
              <ListItemIcon>
                <header.icon />
              </ListItemIcon>
              <ListItemText primary={header.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <ContactMeButton
        sx={{
          width: "11rem",
          fontSize: "1.2rem",
          color: "#4e4e4e",
          border: "0.25rem solid #AEAEAE",
          ":hover": {
            background: "#818080",
            border: "none",
            color: "#fff",
            transform: "scale(1.1)",
          },
        }}
      >
        Hit Me Up
      </ContactMeButton>
    </Box>
  );

  const DrawerHeader = (
    <DrawerHeaderContainer onClick={toggleDrawer(false)}>
      <IconButton>
        <ChevronLeftIcon sx={{ fontSize: "2rem" }} />
      </IconButton>
    </DrawerHeaderContainer>
  );

  return (
    <>
      <Container
        sx={{
          backgroundColor: !homeComponentInView ? "#04272F" : "transparent",
          transition: "all 0.2s ease",
        }}
      >
        <Box>
          <ShowMenuButton>
            <Drawer open={open} onClick={toggleDrawer(false)}>
              {DrawerHeader}
              <Divider />
              {DrawerList}
            </Drawer>
            <MenuIcon sx={{ fontSize: "2rem" }} onClick={toggleDrawer(true)} />
          </ShowMenuButton>
          <Stack direction="row">
            {NavbarHeaders.map((headerDetails, index) => (
              <CustomHeaderLink sx={{ color: headerDetails.color }}>
                {headerDetails.label}
              </CustomHeaderLink>
            ))}
          </Stack>
        </Box>
        <ContactMeButton>Hit Me Up</ContactMeButton>
      </Container>
    </>
  );
};

export default Navbar;

// CSS
const Container = styled(Box)({
  backgroundColor: "transparent",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  width: "100%",
  height: "10%",
  backdropFilter: "blur(5px)",
});

const ShowMenuButton = styled(IconButton)(({ theme }) => ({
  color: "#FFFFFF",
  margin: "1rem",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const ContactMeButton = styled(Button)(({ theme }) => ({
  margin: "1rem",
  background: "transparent",
  borderRadius: "10rem",
  border: "0.15rem solid #1FF2FF",
  padding: "0.35rem 1rem ",
  width: "9rem",
  textTransform: "capitalize",
  color: "#fff",
  fontSize: "1.15rem",
  transition: "all 0.5s ease",
  ":hover": {
    background: "#1FF2FF",
    color: "#000",
    transform: "scale(1.025)",
  },
}));

const DrawerHeaderContainer = styled(Box)({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
});

const CustomHeaderLink = styled(Link)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "1.3rem",
    margin: "0 1.2rem",
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: "1.6rem",
    margin: "0 1.5rem",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    fontSize: "1.8rem",
    margin: "0 1.8rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "1.9rem",
    margin: "0 2.1rem",
  },
  cursor: "pointer",
  margin: "0 1rem",
  color: "white",
  position: "relative",
  textDecoration: "none",
  transition: "all 0.5s ease",
  "&:before": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "2px",
    bottom: "-3px",
    left: "50%",
    transform: "translate(-50%,0%)",
    backgroundColor: "#1FF2FF",
    visibility: "hidden",
    transition: "all 0.3s ease-in-out",
  },
  "&:hover:before": {
    visibility: "visible",
    width: "100%",
  },
  "&:hover": {
    color: "#1FF2FF",
    transformOrigin: "bottom left",
    transform: "scaleX(1.1) translate(-5%,0%)",
  },
}));
