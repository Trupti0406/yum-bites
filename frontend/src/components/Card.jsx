import React from "react";

const Card = (props) => {
  let options = props.options;
  let priceOption = Object.keys(options);
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
        src={props.imgSrc}
        alt={`of ${props.foodName}`}
        className="card-img-top"
        style={{
          height:"150px", objectFit:"cover"}}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{props.foodName}</h5>
        {/* <p className="card-text">
          {props.}
        </p> */}
        <div className="container w-100 d-flex align-items-center justify-content-between">
          <select className="m-2 h-100 bg-success rounded p-2 text-white">
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="m-2 h-100 bg-success rounded p-2 text-white ">
            {priceOption.map((data) => {
              return (
                <option key={data} value={data}>
                  {data}
                </option>
              );
            })}
          </select>
          <div className="h-100 fw-bold">Total Price</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
