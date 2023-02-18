import React, { useState } from "react";
import style from "./donateForm.module.css";
import DonateTab from "./DonateTab";
import FundAllocationTab from "./FundAllocationTab";
// import "./style.css";
const Tabs = () => {
  return (
    <div className={style.divTabs}>
      <ul className={`nav nav-pills mb-3 `} id="pills-tab" role="tablist">
        <li className={` nav-item ${style.divvss}`} role="presentation">
          <button
            className={`${style.btnDonationTab} nav-link active `}
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Donate
          </button>
        </li>
        <li className={` nav-item ${style.divvss}`} role="presentation">
          <button
            className={`${style.btnFundAllocationTab} nav-link `}
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Fund Allocation
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <DonateTab />
        <FundAllocationTab />
      </div>
    </div>
  );
};

export default Tabs;
