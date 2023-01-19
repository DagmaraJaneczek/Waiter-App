import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";


const App = () => {
  return (
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Container>
  );
};

export default App;
