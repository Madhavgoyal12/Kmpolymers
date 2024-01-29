import React from "react";
import "./Info.css";
import Map from "../CustomJS/Map";
import iconAddress from "../images/address.png";
import iconPhone from "../images/phone.png";
import iconFeedback from "../images/feedback.png";

export default function Info() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="f-details">
          <div className="f-flex">
            <div className="f-address text-white">
              <div className="DetailsHeading">
                <p className="address">Address </p>
                <img
                  style={{ height: "2rem", marginLeft: "5px" }}
                  src={iconAddress}
                  alt="Address"
                />
              </div>
              <p>KM POLYMERS</p>
              <p>F-28,Site B,</p>
              <p>Surajpur Industrial Area</p>
              <p>Uttar Pradesh</p>
              <p>201308</p>
            </div>

            <div className="f-contacts text-white">
              <div className="DetailsHeading">
                <p className="contacts">Contacts</p>
                <img
                  style={{ height: "2rem", marginLeft: "5px", marginRight: "5px", }}
                  src={iconPhone}
                  alt="Contacts"
                />
              </div>
              <p>Mr. Praveen Goel</p>
              <p>
                M :{" "}
                <a style={{ fontWeight: "bold" }} href="Tel:9818240363">
                  9818240363
                </a>
              </p>
              <p>Mrs. Dinesh Mittal</p>
              <p>
                M :{" "}
                <a style={{ fontWeight: "bold" }} href="Tel:9899902007">
                  9899902007
                </a>
              </p>
            </div>
          </div>

          <div className="f-feedback">
            <div className="DetailsHeading">
              <p className="feedback text-white">Feedback</p>
              <img
                style={{ height: "2rem", marginLeft: "5px" }}
                src={iconFeedback}
                alt="Feedback"
              />
            </div>

            <form
              target="_blank"
              action="mailto:kmpolymers2007@gmail.com"
              method="post"
            >
              <b className="text-white">
                Your feedback is really valuable to us
              </b>
              <div className="data">
                <label className="text-white">Name</label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Enter here..."
                />
              </div>
              <div className="data">
                <label className="text-white">Email</label>
                <input
                  className="input"
                  type="email"
                  name="mail"
                  placeholder="Enter here..."
                />
              </div>
              <div className="data">
                <label className="text-white">Message</label>
                <input
                  className="input"
                  type="text"
                  name="feedback"
                  placeholder="Enter here..."
                />
              </div>
              <input
                type="submit"
                value="Send"
                formTarget="_blank"
                className="send"
              />
            </form>
          </div>
        </div>

        {/* <div className="f-map">
          <Map />
        </div> */}
      </div>
    </div>
  );
}
