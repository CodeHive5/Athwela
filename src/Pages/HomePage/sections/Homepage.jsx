import "../../../Styles/HomePage.css";
import homepage from "../../../assets/test.jpg";
import homelogo from "../../../assets/home_FILL0_wght400_GRAD0_opsz48.png";
import itfsulogo from "../../../assets/Untitled.png";
import { Link } from 'react-router-dom';
const Homepage = () => {
  return (
    <div id="homepage" >
      <img src={homepage} className="homepagelogo img-fluid"></img>
      <div id="home-page-text" className="container-fluid">
        <p className="handtogrow "> Hand to Grow</p>
        <p className="assisting ">
          Assisting the underprivileged students towards a successful university
          education
        </p>
        <Link to="/about">
         <div className="btn btn-danger px-5 py-2 donation-btn">Donate Now</div>
        </Link>
        
      </div>
      <div id="home-page-btn">
        <div className="btn btn-dark d-block home-page-btn">
          <img src={homelogo} className="homelogo"></img>
        </div>
        <div className="btn btn-dark home-page-btn">
          <img src={itfsulogo} className="itfsulogo"></img>
        </div>
      </div>
    </div>
  );
};
export default Homepage;