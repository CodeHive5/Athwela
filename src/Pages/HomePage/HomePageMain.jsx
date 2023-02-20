import { BrowserRouter } from "react-router-dom";
import Homepage from "./sections/Homepage";
import AboutUs from "./sections/AboutUs";
import Events from "./sections/Events";
import ContactUs from "./sections/ContactUs";
import NavBar from "../../components/NavBar";
import HomePageBar from "../../components/HomePageBar";

function HomePageMain() {
  return (
    <BrowserRouter>
      <NavBar />
      <Homepage />
      <HomePageBar />
      <AboutUs />
      <Events />
      <ContactUs />
    </BrowserRouter>
  );
}
export default HomePageMain;
