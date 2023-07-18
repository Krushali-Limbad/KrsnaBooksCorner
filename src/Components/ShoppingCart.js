import { useEffect, useState } from "react";
import { CartState } from "../Context/Context";
import "./CartStyle.css";
import { Form } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  return (
    <>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-3">
                        <Link to="/" className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2"></i>
                          Continue shopping
                        </Link>
                      </h5>
                      <hr />

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">
                            You have {cart.length} items in your cart
                          </p>
                        </div>
                        <div>
                          <p className="mb-0">
                            {/* <span className="text-muted">Sort by:</span>{" "}
                            <a href="#!" className="text-body">
                              price <i className="fas fa-angle-down mt-1"></i>
                            </a> */}
                          </p>
                        </div>
                      </div>

                      <div className="card mb-3">
                        <div className="card-body">
                          {cart.map((products) => (
                            <>
                              <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                  <div>
                                    <img
                                      src={products.imageUrl}
                                      className="img-fluid rounded-3"
                                      alt="Shopping item"
                                      style={{ width: "65px" }}
                                    />
                                  </div>
                                  <div className="ms-3">
                                    <h5>{products.title}</h5>
                                    {/* <p className="small mb-0">
                                      {products.description}
                                    </p> */}
                                  </div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                  <div style={{ width: "50px" }}>
                                    <Form.Control
                                      as="select"
                                      value={products.qty}
                                      onChange={(e) =>
                                        dispatch({
                                          type: "CHANGE_CART_QTY",
                                          payload: {
                                            id: products.id,
                                            qty: e.target.value,
                                          },
                                        })
                                      }
                                    >
                                      {
                                        <>
                                          <option>{1}</option>
                                          <option>{2}</option>
                                          <option>{3}</option>
                                          <option>{4}</option>
                                          <option>{5}</option>
                                        </>
                                      }
                                    </Form.Control>
                                  </div>
                                  <div style={{ width: "80px" }}>
                                    <h5 className="mb-0">
                                      Rs {products.price}
                                    </h5>
                                  </div>
                                  <AiFillDelete
                                    fontSize="20px"
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                      dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: products,
                                      })
                                    }
                                  ></AiFillDelete>
                                </div>
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                      <h5>Total: Rs {total}</h5>
                      <button className="btn btn-danger">
                        Proceed To Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoppingCart;
