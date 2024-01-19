import React from "react";
import logo from "./images/logo.png";
import instagramIcon from "./images/instagram.png";
import dribbbleIcon from "./images/dribbble.png";
import facebookIcon from "./images/facebook.png";
import behanceIcon from "./images/behance.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <img src={logo} alt="kada"></img>

        <h2>KADA</h2>
        <p>
          Li Europan lingues es membres del sam familie. Lor separat existentie{" "}
        </p>
        <div className="social-icons">
          <img src={instagramIcon}></img>
          <img src={dribbbleIcon}></img>
          <img src={facebookIcon}></img>
          <img src={behanceIcon}></img>
        </div>
      </div>

      <div className="pages-about">
        <div className="pages">
          <h4>Pages</h4>
          <ul>
            <li>
              <a href="#getStarted">Home</a>
            </li>
            <li>
              <a href="#aboutUs">About</a>
            </li>
            <li>
              <a href="#featured-products">Product</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="pages about">
          <h4>About</h4>
          <ul>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#ourServices">Our Services</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>Benefit</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
