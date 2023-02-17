import athwalalogo from "/CodeHive/Working/Athwela/src/assets/Athwela_Logo_WH.png";
import homepageimg from "/CodeHive/Working/Athwela/src/assets/two-hands.jpg";

import "../Styles/HomePage.css";
const HomePage = () => {
  return (
    <div className="main-outer-homepage">
      <div className="homepage">
        <img src={homepageimg} alt="" className="img-fluid home-page-img"></img>
      </div>
    </div>
  );
};
export default HomePage;
