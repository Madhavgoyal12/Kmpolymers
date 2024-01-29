import React from "react";
import "./Listing.css";
import PurpleButton from "../CustomJS/PurpleButton.js";
import { Link } from "react-router-dom";

function Listing(props) {
  return (
    <div className="images_row">
      {/* <Link to={`/${props.category}/${props.id}`}> */}
      <div>
        <img src={props.image} className="cloth_image" alt="Dana"></img>
        <PurpleButton line1={props.title} line2={`₹ ${props.price}`} />
      </div>
      {/* </Link> */}
    </div>
  );
}

export default Listing;
