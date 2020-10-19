import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
const products = [
  {
    id: "1",
    name: "tanisha",
  },
  {
    id: "2",
    name: "sudhi",
  },
  {
    id: "3",
    name: "ariana",
  },
  {
    id: "4",
    name: "amal",
  },
  {
    id: "5",
    name: "jose",
  },
  {
    id: "6",
    name: "tani",
  },
  {
    id: "7",
    name: "sruthi",
  },
  {
    id: "8",
    name: "tanisha",
  },
  {
    id: "9",
    name: "kripa",
  },
  {
    id: "10",
    name: "akon",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [produt, setprodut] = useState(products);

  useEffect(() => {
    console.log(search);
    if (search === null) {
      setprodut(products);
    } else {
      products
        .filter((prod) => prod.name === search)
        .map((data, index) => {
          setprodut([data]);
        });
    }
  }, [search]);
  return (
    <>
      <Header setSearch={setSearch} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingRight: "20px",
        }}
      >
        {produt.map((data, index) => (
          <Product data={data} index={index} />
        ))}
      </div>
    </>
  );
}

export default App;
