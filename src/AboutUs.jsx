import React from "react";
import aboutus from "./images/Rectangle 6.png";

function AboutUs() {
  return (
    <div id="aboutUs">
      <img src={aboutus} alt="about us"></img>
      <div className="aboutUs-text">
        <h1 className="header">About us</h1>
        <p>
          The kaduna state goverment agency that oversees the wellbieng of
          famers across all the local goverments we colllect information and
          surppoet them in anyway we can
        </p>
        <button className="btn  GetStarted">Learn More</button>
      </div>
    </div>
  );
}

export default AboutUs;
