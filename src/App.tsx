import { Box, styled } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container>
        <Navbar />
        <Home />
      </Container>
    </>
  );
};

export default App;

const Container = styled(Box)({
  width: "100%",
  height: "100vh",
});
