import React, { useEffect, useState } from "react";

function Header(props) {
  const [_search, _setSearch] = useState("");
  const handleChange = (event) => {
    event.preventDefault();
    props.setSearch(_search);
  };
  useEffect(() => {
    props.setSearch(_search);
  }, [_search]);
  return (
    <header
      style={{
        backgroundColor: "orange",
        display: "flex",
      }}
    >
      <nav>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <li>Men</li>
          <li>womeMen</li>
        </ul>
        <input
          value={_search}
          onChange={(event) => _setSearch(event.target.value)}
        />
        <button onClick={(event) => handleChange(event)}>search</button>
      </nav>
    </header>
  );
}

export default Header;
