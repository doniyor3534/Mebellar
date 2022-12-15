import React from 'react';
import { Select } from "antd";

function Header() {
    const onChange = (value) => {
      console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
      console.log("search:", value);
    };
    return (
      <div className="header">
        <button className="contact">
          <img src="./img/Vector.svg" alt="" />
          +99899 110 11 97
        </button>
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: "Namangan",
              label: "Namangan",
            },
            {
              value: "Toshkent",
              label: "Toshkent",
            },
            {
              value: "Buxoro",
              label: "Buxoro",
            },
          ]}
        />
        <a href=".">
          {" "}
          <img src="./img/Vector (1).svg" alt="" /> Namangan/Mingbuloq/...
        </a>
      </div>
    );
}

export default Header;