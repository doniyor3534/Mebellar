import { Button, Select } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { CheckOutlined } from '@ant-design/icons'
import { brencountfunc, SearchFilter, tumancountfunc, viloyatcountfunc } from "../../redux/HomeReducer";

function FilterControl( ) {
  
  const { brend, data, tuman, dataDefault } = useSelector(
    (state) => state.home
  );
  const dispatch = useDispatch();
  // ///select
  // ///select viloyat
  let viloyatCategorya = [
    "",
    ...new Set(dataDefault.map((val) => val.viloyat)),
  ];
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
  const [selectCount, setSelectCount] = useState("");
  const onChange = (value) => {
    setSelectCount(value);
    dispatch(viloyatcountfunc(value));
    if (value !== "") {
      let ddd = dataDefault.filter((val) =>
        val.viloyat.toLowerCase().includes(value.toLowerCase())
      );
      dispatch(SearchFilter(ddd));
    } else {
      dispatch(SearchFilter(dataDefault));
    }
  };
  console.log(data);
  const onSearch = (value) => {
    console.log("search:", value);
  };
  // card select  tumannnn
  let tumanCategorya = [
    ...new Set(
      dataDefault
        .filter((val) => val.viloyat === selectCount)
        .map((val) => val.tuman)
    ),
  ];
  const tumanfun = (value) => {
    dispatch(tumancountfunc(value));
    if (value !== "") {
      let ddd = dataDefault.filter((val) =>
        val.tuman.toLowerCase().includes(value.toLowerCase())
      );
      dispatch(SearchFilter(ddd));
    }
  };
  // card select  tumannnn
  // brend count
  const [brendCount, setBrendCount] = useState("");
  function brendfun(val, i) {
    setBrendCount(i);
    dispatch(brencountfunc(val.name));
  }
  // brend count
  return (
    <div className="malumotheader">
      <h1 className="selecttext">Filter qiling !</h1>
      <div className="filterBtns">
        <Button
          onClick={() => setCount(1)}
          className={count === 1 ? "filterbtn activ" : "filterbtn"}
        >
          Viloyat
        </Button>
        <Button
          onClick={() => setCount(2)}
          className={count === 2 ? "filterbtn activ" : "filterbtn"}
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
            {tumanCategorya.map((val, i) => (
              <Button
                className={tuman === val ? "activ" : ""}
                style={{ color: "grey", fontSize: "20px" }}
                key={i}
                onClick={() => tumanfun(val)}
              >
                {val}
                <CheckOutlined style={{ color: "green", fontSize: "30px" }} />
              </Button>
            ))}
          </div>
        </div>
      ) : (
        <div className="brend">
          {brend.map((val, i) => (
            <button
              className={brendCount === i ? "activ" : ""}
              onClick={() => brendfun(val, i)}
              key={i}
            >
              <img src={val.img} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
export default FilterControl;
