
import React from 'react';
import { useSelector } from 'react-redux';
import { FilterPage } from './All/filterPage';


function Kuxni() {
  const { data } = useSelector((state) => state.home);
  let props = data.filter((val => val.sort == 'kuxni'))

    return (
        <div>
           <FilterPage props={props} />
        </div>
    );
}

export default Kuxni;