import React from "react";
import "./ProductDetailStyle.css";

import SampleProducts from "./SampleOutput.js";
import { useParams } from "react-router-dom";
import { CartState } from "../Context/Context";

const ProductDetail = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const { userId } = useParams();

  const findProduct = (id) => {
    return SampleProducts.find(function (element) {
      return element.id === id;
    });
  };

  const value = findProduct(userId);

  let { title, imageUrl, description, price } = value || {};

  return (
    <>
      <div className="container">
        <div className="card-1">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content ">
                  <div className="tab-pane active" id="pic-1">
                    <img
                      src={imageUrl}
                      alt="..."
                      height="500px"
                      width="200px"
                    />
                  </div>
                </div>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{title}</h3>

                <p className="product-description">{description}</p>
                <h4 className="price">
                  current price:{" "}
                  <span>
                    <h2>{price}</h2>
                  </span>
                </h4>

                <div className="action">
                  {cart.some((p) => p.id === userId) ? (
                    <button
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: value,
                        });
                      }}
                      className="add-to-cart btn btn-default"
                      type="button"
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: value,
                        });
                      }}
                      className="add-to-cart btn btn-default"
                      type="button"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
