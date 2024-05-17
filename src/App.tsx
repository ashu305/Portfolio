import { Box, styled } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./components/Home";
import About from "./components/About";
import { useInView } from "react-intersection-observer";

const App = () => {
  const { ref: homeRef, inView: homeComponentInView } = useInView({
    threshold: [0.1],
  });
  const { ref: aboutRef, inView: aboutComponentInView } = useInView({
    threshold: [0.8],
  });

  return (
    <>
      <CssBaseline />
      <Navbar homeComponentInView={homeComponentInView} />
      <Container>
        <Home homeRef={homeRef} />
        <About aboutRef={aboutRef} />
      </Container>
    </>
  );
};

export default App;

const Container = styled(Box)({
  width: "100%",
  height: "100vh",
});
