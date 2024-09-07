import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../conponents/Footer";
import Header from "../conponents/Header";
import { Outlet } from "react-router-dom";
import Fetchitem from "../conponents/Fetchitem";
//import Homeitem from "../conponents/Homeitem";

function App() {
  

  return (
    <>
      <Header />
      <Fetchitem/>
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
