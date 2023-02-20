import "../Styles/HomePageBar.css";
const HomePageBar = () => {
  return (
    <div class="container-fluid text-center homepagebar">
      <div class="row justify-content-around homepagebar d-flex">
        <div class="col-3 d-flex">
          <span className="h6 home-page-bar-text homepagebar-lkr">LKR</span>
          <span className="h2 home-page-bar-text homepagebar-100k">100K</span>
          <div className="total-money-donated">
            <span className="h6 home-page-bar-text homepagebar-totalm">Total Money Donated</span>
          </div>
        </div>
        <div class="col-3 d-flex">
          <span className="h2 home-page-bar-text homepagebar-80"> 80</span>
          <div className="undergraduates-fund">
            <span className="h6 home-page-bar-text homepagebar-underg">
              Undergraduates Funded
            </span>
          </div>
        </div>
        <div class="col-3">
          <span className="h2 home-page-bar-text homepagebar-05">05</span>
          <span className="h6 home-page-bar-text homepagebar-years">Years</span>
        </div>
      </div>
    </div>
  );
};
export default HomePageBar;