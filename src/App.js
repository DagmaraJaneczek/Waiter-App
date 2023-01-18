import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import { Routes } from "react-router-dom";


const App = () => {
  return (
      <Container>
        <Header />
        <Routes>

        </Routes>
        <Footer />
      </Container>
  );
};

export default App;
