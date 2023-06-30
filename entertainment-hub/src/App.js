import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="app">
          <Container>
            <Routes>
              <Route path="/" element={<Trending />} exact />
              <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<Series />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </Container>
        </div>
        <SimpleBottomNavigation />
      </div>
    </BrowserRouter>
  );
};

export default App;
