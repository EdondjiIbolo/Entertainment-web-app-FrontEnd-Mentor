import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import TvSeries from "./TvSeries";
import MoviesPage from "./MoviesPage";

function App() {
  return (
    <main className="main-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv-series" element={<TvSeries />} />
        <Route path="movies" element={<MoviesPage />} />
      </Routes>
    </main>
  );
}

export default App;
