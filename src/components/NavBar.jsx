import "../Styles/NavBar.css";
import icon from "../assets/Athwela_Logo_WH.png";
import { HashLink as Link } from "react-router-hash-link";
const NavBar = () => {
  return (
    <div className="nav-bar-div">
      <nav
        class="navbar fixed-top navbar-expand-lg  darknavbar "
        data-bs-theme="dark"
      >
        <div class="container-fluid navbar-container">
          <div>
            <img src={icon} alt="" className="project-icon" />
            <button
              class="navbar-toggler justify-content-start collapse-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>

          <div
            class="collapse navbar-collapse navbar-container"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="#homepage" smooth>
                  <div className="btn btn-dark navbaritem"> Home</div>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="#aboutus" smooth>
                  <div className="btn btn-dark navbaritem"> About Us</div>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="#events" smooth>
                  <div className="btn btn-dark navbaritem">Events</div>
                </Link>
              </li>
              <li class="nav-item" href="#">
                <Link to="#contactus" smooth>
                  <div className="btn btn-dark navbaritem"> Contact Us</div>
                </Link>
              </li>
              <li class="nav-item">
                <div className="btn btn-danger navbaritem navbaritemdonate">
                  Donate
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;