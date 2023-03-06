import React, { useRef, useState, useEffect } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

const Card = (props) => {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  let options = props.options;

  let priceOption = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const handleAddToCart = async () => {
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      img: props.foodItem.img,
      price: finalPrice,
      qty: qty,
      size: size,
    });
    console.log(data);
  };

  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);
  return (
    <div
      className="card mt-3 text-white shadow border-white"
      style={{
        width: "18rem",
        maxHeight: "360px",
        backgroundColor: "#232123",
      }}
    >
      <img
        src={props.foodItem.img}
        alt={`of ${props.foodName}`}
        className="card-img-top"
        style={{
          height: "150px",
          objectFit: "cover",
        }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{props.foodItem.name}</h5>
        {/* <p className="card-text">
          {props.}
        </p> */}
        <div className="container w-100 d-flex align-items-center justify-content-between">
          <select
            className="m-2 h-100 bg-success rounded p-2 text-white"
            onChange={(e) => setQty(e.target.value)}
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select
            className="m-2 h-100 bg-success rounded p-2 text-white "
            onChange={(e) => setSize(e.target.value)}
            ref={priceRef}
          >
            {priceOption.map((data) => {
              return (
                <option key={data} value={data}>
                  {data}
                </option>
              );
            })}
          </select>
          <div className="h-100 fw-bold">₹{finalPrice}/-</div>
        </div>
        <hr />
        <div
          className="btn btn-success justify-center ms-2"
          onClick={handleAddToCart}
        >
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default Card;
