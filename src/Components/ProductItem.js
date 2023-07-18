import React from "react";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  let { title, price, imageUrl, id } = props;
  let myStyle = {
    width: "auto",
    height: "400px",
  };
  let titleStyle = {
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": "2",
    overflow: "hidden",
    height: "50px",
  };
  return (
    <>
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
            style={myStyle}
          />
          <div className="card-body">
            <Link
              className="card-title text-center"
              style={titleStyle}
              to={`${id}`}
            >
              {" "}
              <h5>{title}</h5>
            </Link>

            <p className="card-text text-center">Rs {price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
