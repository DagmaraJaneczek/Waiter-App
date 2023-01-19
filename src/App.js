import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Table from "./components/pages/Table/Table";


const App = () => {
  return (
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<Table />} />
        </Routes>
        <Footer />
      </Container>
  );
};

export default App;
