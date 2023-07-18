import React from "react";
import ProductItem from "./ProductItem";
import SampleProducts from "./SampleOutput.js";

import { CartState } from "../Context/Context";

// import SmallBooks from "./SmallBooks";
// import MediumBooks from "./MediumBooks";
// import BigBooks from "./BigBooks";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div className="container my-3">
        <h1 className="text-center">Best Selling Products</h1>

        <div className="row">
          {SampleProducts.map((element) => {
            return (
              <div className="col-md-3" key={element.id}>
                <ProductItem
                  title={element.title}
                  price={element.price}
                  imageUrl={element.imageUrl}
                  id={element.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
