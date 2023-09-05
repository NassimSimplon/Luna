import {Fragment,FC} from "react";
import LazyLoad from "./HOC/LazyLoaded/LazyLoaded";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
//Pages
const Home = LazyLoad(() => import("./Pages/Home"));

const App: FC = () => {
  return (
  <Fragment>
    <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </Fragment>
  );
};

export default App;
