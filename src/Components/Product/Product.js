import React from "react";

function Product(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        className="card"
        style={{
          border: "solid",
          width: 200,
        }}
      >
        <h1>{props.data.name}</h1>
        <span>{props.data.id}</span>
        <span>{props.index}</span>
      </div>
    </div>
  );
}

export default Product;
