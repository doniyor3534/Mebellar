import React from "react";
import { useSelector } from "react-redux";
import { FilterPage } from "./All/filterPage";


function Spalni() {
  const { data } = useSelector((state) => state.home);
  let props = data.filter((val) => val.sort == "Devan");

  return (
    <div>
      <FilterPage props={props} />
    </div>
  );
}

export default Spalni;
