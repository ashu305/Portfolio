import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import React from "react";
import { NavbarHeaders } from "../Constants/AppConstants";

const Navbar = () => {
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
      <Container>
        <Box>
          <ShowMenuButton>
            <Drawer open={open} onClick={toggleDrawer(false)}>
              {DrawerHeader}
              <Divider />
              {DrawerList}
            </Drawer>
            <MenuIcon sx={{ fontSize: "2rem" }} onClick={toggleDrawer(true)} />
          </ShowMenuButton>
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
});

const ShowMenuButton = styled(IconButton)(({ theme }) => ({
  color: "#FFFFFF",
  margin: "1rem",
  [theme.breakpoints.up("md")]: {
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
    border: "none",
    color: "#000",
    transform: "scale(1.025)",
  },
}));

const DrawerHeaderContainer = styled(Box)({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
});
