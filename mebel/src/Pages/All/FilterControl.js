import { Button, Select } from "antd";
import { useState } from "react";
import { useSelector } from 'react-redux'
import {CheckOutlined} from '@ant-design/icons'

function FilterControl() {
  const { brend, data } = useSelector((state) => state.home);
  // ///select
  // ///select viloyat
  let viloyatCategorya = [...new Set(data.map((val) => val.viloyat))];
  let d = [];
  viloyatCategorya.map((val) => {
    d.push({
      value: val,
      label: val,
    });
  });
  // ///select viloyat
  // card select
  const [count, setCount] = useState(1);
  const [selectCount, setSelectCount] = useState('');
  const onChange = (value) => {
    setSelectCount(value);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  // card select  tumannnn
  let tumanCategorya = [
    ...new Set(
      data.filter((val) => val.viloyat === selectCount).map((val) => val.tuman)
    ),
  ];
  // card select  tumannnn
  return (
    <div className="malumotheader">
      <h1 className="selecttext">Filter qiling !</h1>
      <div className="filterBtns">
        <Button
          onClick={() => setCount(1)}
          className={count == 1 ? "filterbtn" : ""}
        >
          Viloyat
        </Button>
        <Button
          onClick={() => setCount(2)}
          className={count == 2 ? "filterbtn" : ""}
        >
          Brend
        </Button>
      </div>
      {count === 1 ? (
        <div className="filterjoylashuv">
          <Select
            showSearch
            placeholder="Viloyat tanlang !"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={d}
          />
          <h1 className="selecttext">Mavjud Tumanlar</h1>
          <div className="selectBody">
            {tumanCategorya.map((val) => (
              <Button style={{ color: "grey", fontSize: "20px" }}>
                {val}{" "}
                <CheckOutlined style={{ color: "green", fontSize: "30px" }} />
              </Button>
            ))}
          </div>
        </div>
      ) : (
        <div className="brend">
          {brend.map((val) => (
            <button>
              <img src={val.img} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
export default FilterControl;
