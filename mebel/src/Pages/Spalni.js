import { Empty } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { FilterPage } from "./All/filterPage";


function Spalni() {
  const { data } = useSelector((state) => state.home);
  let props = data.filter((val) => val.sort == "Devan");

  return (
    <>
      {props.length > 0 ? (
        <>
          <h1 className="title">Spalnilar</h1>
          <ToastContainer />
          <FilterPage props={props} />
        </>
      ) : (
        <Empty />
      )}
    </>
  );
}

export default Spalni;
