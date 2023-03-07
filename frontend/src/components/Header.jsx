import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducer";

const Header = () => {
    let data = useCart();
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-success ">
      <div className="container-fluid ">
        <Link
          className="navbar-brand text-white fs-1 fst-italic fw-semibold"
          to="/"
        >
          YumBites
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto ">
            <li className="nav-item">
              <Link
                className="nav-link active text-white fs-5"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            {localStorage.getItem("authToken") ? (
              <li className="nav-item">
                <Link
                  className="nav-link active text-white fs-5"
                  aria-current="page"
                  to="/"
                >
                  My Orders
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
          {!localStorage.getItem("authToken") ? (
            <div className="d-flex">
              <Link className="btn bg-white text-success mx-1" to="/login">
                Login
              </Link>
              <Link className="btn bg-white text-success mx-1" to="/createuser">
                SignUp
              </Link>
            </div>
          ) : (
            <>
              <div
                className="btn bg-white text-success mx-2"
                onClick={() => {
                  setCartView(true);
                }}
              >
                Cart
                <Badge pill bg="danger" className="ms-2 p-1">
                  {data.length}
                </Badge>
              </div>
              {cartView ? (
                <Modal
                  onClose={() => {
                    setCartView(false);
                    }}
                    
                ><Cart/></Modal>
              ) : null}
              <div
                className="btn bg-white text-danger mx-2"
                onClick={handleLogout}
              >
                Logout
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
