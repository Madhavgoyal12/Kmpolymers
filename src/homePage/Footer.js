import React from "react";
import iFacebook from "../images/facebook.png";
import iInstagram from "../images/instagram.png";
import iTwitter from "../images/twitter.png";
import iYoutube from "../images/youtube.png";
import iWhatsapp from "../images/whatsapp.svg";
import "./Footer.css";
import iconLogo from "../images/Logo.png";

function Footer() {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "auto",
        fontFamily: "Poppins",
      }}
      className="myFooter"
    >
      <footer className="text-gray-600 body-font p-0">
        <div
          style={{ marginTop: "1rem" ,marginLeft:"2rem"}}
          className="px-2 py-3 mx-auto flex items-center sm:flex-row flex-col"
        >
          <a
            className="flex title-font font-medium items-center md:justify-start justify-center text-white-100"
            href="https://github.com/adityarai2109/GRT"
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ height: "6vh" }} src={iconLogo} alt="GRT" />
            <span
              className="ml-3 text-xl"
              style={{ color: "#000000", fontSize: "1.5rem" ,fontWeight:"bold",marginLeft:"1.1rem"}}
            >
              KM POLYMERS
            </span>
          </a>
          <p
            style={{ color: "#000000", fontSize: "1.1rem" ,fontWeight:"bold"}}
            className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-100 sm:py-2 sm:mt-0 mt-4"
          >
          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {/* <a
              className="ml-5 text-gray-100"
              href="https://wa.me/919999660329"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icons" src={iWhatsapp} alt="WhatsApp" />
            </a> */}
            {/* <a
              className="ml-5 text-gray-100"
              href="https://www.facebook.com/profile.php?id=100068717855004"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icons" src={iFacebook} alt="Facebook" />
            </a>

            <a
              className="ml-5 text-gray-100"
              href="https://www.instagram.com/_ganga.ram.textile_/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icons" src={iInstagram} alt="Instagram" />
            </a>
            <a
              className="ml-5 text-gray-100"
              href="https://www.youtube.com/watch?v=1RVdFaySaA0"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icons" src={iYoutube} alt="Youtube" />
            </a> */}
            {/* <a
              className="ml-5 text-gray-100"
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icons" src={iTwitter} alt="Twitter" />
            </a> */}
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
