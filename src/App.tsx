import { Box, styled } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Container>
        <Navbar />
      </Container>
    </>
  );
};

export default App;

const Container = styled(Box)({
  width: "100%",
  height: "100%",
});
