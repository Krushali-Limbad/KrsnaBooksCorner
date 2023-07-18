import React from "react";
import ProductItem from "./ProductItem";
import SampleProducts from "./SampleOutput.js";
import { Link } from "react-router-dom";

export default function BigBooks() {
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
      <div className="container my-3">
        <h1 className="text-center">Category: Big Books</h1>

        <div className="row">
          {SampleProducts.map((element) => {
            if (element.price > 1000) {
              return (
                <div className="my-3 col-md-3">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={element.imageUrl}
                      className="card-img-top"
                      alt="..."
                      style={myStyle}
                    />
                    <div className="card-body">
                      <Link
                        className="card-title text-center"
                        style={titleStyle}
                        to={`${element.id}`}
                      >
                        {" "}
                        <h5>{element.title}</h5>
                      </Link>

                      <p className="card-text text-center">
                        Rs {element.price}
                      </p>
                    </div>
                  </div>
                </div>
              );
              // return (
              //   <div className="col-md-3">
              //     <ProductItem
              //       title={element.title}
              //       price={element.price}
              //       imageUrl={element.imageUrl}
              //     />
              //   </div>
              // );
            }
          })}
        </div>
      </div>
    </>
  );
}
