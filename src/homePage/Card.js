import React from "react";
import Listing from "./Listing";
import { Button } from "@material-ui/core";
import viewMore from "../images/file-search.svg";
import viewMoreDark from "../images/file-search-dark.svg";
import { Link } from "react-router-dom";
import Loader from "../CustomJS/Loader";
import "./Card.css";

function Card(props) {
  // const imgUrl = process.env.REACT_APP_API_URL;
  const imgUrl = process.env.REACT_APP_IMAGE_FETCH_API;
  const Cardarray = props.products;

  return (
    <div>
      <div>
        <div className="product_card" style={{ minHeight: "0" }}>
          {/*Ipad pro style*/}

          {/*styles in productList.css*/}
          {Cardarray !== undefined ? (
            Cardarray.sort(() => 0.5 - Math.random())
              .slice(0, )
              .sort(() => 0.5 - Math.random())
              .map((card) => {
                return (
                  <Listing
                    id={card._id}
                    image={`${card.image}`}
                    title={card.name}
                    price={card.price}
                    category={card.category}
                  />
                );
              })
          ) : (
            <Loader />
          )}
        </div>
        {/* <Link to="/Suit">
          <Button
            variant="outlined"
            style={{
              background: "white",
              fontFamily: "Poppins",
              fontWeight: "bold",
              border: "1px solid #393E46",
              marginTop: "1rem",
            }}
          >
            <img
              className="hpvmi"
              src={props.isDarkMode ? viewMoreDark : viewMore}
              style={{ height: "2rem" }}
              alt=""
            />
            <p className="hpvmp">View more</p>
          </Button>
        </Link> */}
      </div>
    </div>
  );
}
export default Card;
