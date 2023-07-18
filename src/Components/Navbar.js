import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { BsCartFill } from "react-icons/bs";
import { Badge } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";

import "./NavbarStyle.css";

import "./style.css";
import { Link } from "react-router-dom";
import { CartState } from "../Context/Context";

export default function Navbar() {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  // console.log(state);
  // const {
  //   productState: { smallBooks, mediumBooks, bigBooks },
  //   productDispatch,
  // } = CartState();
  return (
    <div>
      <nav className="nav1">
        <div className="left">
          <span>Welcome to Krsna Corner</span>
          <Link to="/">Register</Link>
          <span>OR</span>
          <Link to="/">Login</Link>
        </div>
        <div className="right">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-whatsapp"></i>
          <i className="fa fa-twitter"></i>
        </div>
      </nav>
      {/* <!-- nav 1 end -->

        <!-- nav 2 begins --> */}
      <nav className="nav2">
        <div className="nav2-center">
          <h1>
            Krsna <span>Books Corner</span>
          </h1>
          <p>Welcome to krsna's World</p>
        </div>
      </nav>
      {/* <!-- nav 2 end -->


        <!-- nav 3 begins --> */}
      <nav className="nav3">
        <ul>
          <li>
            <Link to="/">
              <i className="fa fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fa fa-font-awesome"></i> Book Categories
              <i className="fa fa-caret-down"></i>
            </Link>
            <ul>
              <li>
                <Link to="/smallbooks">Small Books</Link>
              </li>
              <li>
                <Link to="/mediumbooks">Medium Books</Link>
              </li>
              <li>
                <Link to="/bigbooks">Big Books</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">
              <i className="fa fa-book"></i> Bhagavad Gita
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fa fa-money"></i> Contact Us
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fa fa-male"></i> About the author
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fa fa-search"></i> Find
            </Link>
          </li>
          <li>
            <Dropdown>
              <Dropdown.Toggle variant="danger" id="dropdown-basic">
                <BsCartFill color="white" fontSize="20px" />
                <Badge bg="danger">{cart.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 380 }}>
                {cart.length > 0 ? (
                  <>
                    {cart.map((products) => (
                      <span className="cartitem" key={products.id}>
                        <img
                          src={products.imageUrl}
                          className="cartItemImg"
                          alt={products.name}
                        />
                        <div className="cartItemDetail">
                          <span>{products.title}</span>
                          <span>Rs {products.price}</span>
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
                      </span>
                    ))}
                    <Link to="/shoppingcart">
                      <button style={{ width: "95%", margin: "0 10px" }}>
                        Go to Cart
                      </button>
                    </Link>
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is Empty!</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </nav>
    </div>
  );
}
