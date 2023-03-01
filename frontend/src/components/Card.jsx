import React from "react";

const Card = () => {
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
        src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJpZWQlMjBjaGlja2VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="card-img-top"
      />
      <div className="card-body text-center">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </p>
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
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
          <div className="h-100 fw-bold">Total Price</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
