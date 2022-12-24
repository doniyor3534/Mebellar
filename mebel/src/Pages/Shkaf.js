import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { FilterPage } from "./All/filterPage";

function Shkaf() {
  const { data } = useSelector((state) => state.home);
  let props = data.filter((val) => val.sort == "Shkaf");
 
  return (
    <div>
      <ToastContainer />
      <FilterPage props={props} />
    </div>
  );
}

export default Shkaf;
