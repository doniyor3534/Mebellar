import React from 'react';
import { useSelector } from 'react-redux';
import { FilterPage } from './All/filterPage';


function Gostinni() {
  const { data } = useSelector((state) => state.home);
  let props = data.filter((val) => val.sort == "Mexmonxona");

  return (
    <div>
      <FilterPage props={props} />
    </div>
  );
}

export default Gostinni;