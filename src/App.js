import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Table from "./components/pages/Table/Table";
import NotFound from "./components/views/NotFound/NotFound";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadTables } from "./redux/tablesRedux";


const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTables());
  });

  return (
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<Table />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
  );
};

export default App;
