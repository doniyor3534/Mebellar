
import { Empty } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { FilterPage } from './All/filterPage';


function Kuxni() {
  const { data } = useSelector((state) => state.home);
  let props = data.filter((val => val.sort == 'kuxni'))

  return (
    <>
      {
        props.length > 0 ?
          <>
            <h1 className="title">Oshxona uchun</h1>
            <ToastContainer />
            <FilterPage props={props} />
          </>
          :<Empty/>
        }
    </>
  );
}

export default Kuxni;