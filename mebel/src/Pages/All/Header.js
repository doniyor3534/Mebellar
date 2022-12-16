import React from 'react';
import { Select } from "antd";

function Header() {
 
    return (
      <div className="header">
        <button className="contact">
          <img src="./img/Vector.svg" alt="" />
          +99899 110 11 97
        </button>
     
        <a href=".">
          {" "}
          <img src="./img/Vector (1).svg" alt="" /> Namangan/Mingbuloq/...
        </a>
      </div>
    );
}

export default Header;