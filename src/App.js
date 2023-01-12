import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./components/HomeCom/Home";
import Movies from "./components/MovieCards/Movies";
import Series from "./components/MovieCards/Series";
import NotFound from "./components/NotFound/NotFound";
import "./index.css";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="*"  element = { <NotFound/>}/>
      </Routes>
      <Footer/>
    </>
  );
}
