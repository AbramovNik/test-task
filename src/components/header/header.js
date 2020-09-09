import React from "react";

const Header = ({ sortItems }) => {
  return (
    <thead>
      <tr>
        <th
          onClick={() => {
            sortItems("id");
          }}
        >
          #
        </th>
        <th
          onClick={() => {
            sortItems("name");
          }}
        >
          Name
        </th>
        <th
          onClick={() => {
            sortItems("position");
          }}
        >
          Position
        </th>
      </tr>
    </thead>
  );
};

export default Header;
