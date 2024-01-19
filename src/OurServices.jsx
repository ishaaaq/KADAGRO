import React from "react";
import blog from "./images/icon.png";
import website from "./images/Group.png";
import content from "./images/Group (1).png";
import social from "./images/Icon (1).png";

function OurServices() {
  return (
    <div id="OurServices">
      <h1 className="header">Our Services</h1>
      <p className="sub-heading">
        Li Europan lingues es membres del sam familie. Lor separat existentie es
        un myth Por scientie, musica.
      </p>
      <div className="services-container">
        <div className="services">
          <img src={blog} alt={"blog"} className="icon"></img>
          <p> Blog and Article Writing</p>
        </div>
        <div className="services">
          <img src={website} alt={"website"} className="icon"></img>
          <p>Website Content</p>
        </div>
        <div className="services">
          <img src={content} alt={"content"} className="icon"></img>
          <p>Content Strategy and Consulting</p>
        </div>
        <div className="services">
          <img src={social} alt={"social"} className="icon"></img>
          <p>Social Media Management</p>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
