import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { SearchFilter } from "../../redux/HomeReducer";

function Navbar() {
  const { likecount, karzinka, kategoryabtns, data, dataDefault,brendfilter,tuman ,viloyat} = useSelector(
    (state) => state.home
  );

  const dispatch = useDispatch()
  const [menu, setMenu] = useState(false);
  // kategorybtn
  const [allcount, setAll] = useState();
  const kategBtn = (i) => {
    setAll(i);
    setMenu(!menu)
  };
  // kategorybtn
  // search
  const search = (e) => {
    if (e.target.value !== '' ) {
      let ddd = data.filter((val) =>
        val.sort.toLowerCase().includes(e.target.value.toLowerCase())
      );
      dispatch(SearchFilter(ddd));
    } else {
      dispatch(SearchFilter(dataDefault));
    }
  }

  useEffect(() => {
    dispatch(SearchFilter(dataDefault));
  },[])
  // search

  return (
    <nav className="navbar">
      <div className="navbarHead">
        <a href=".">
          <img src="./img/logo.png" alt="" className="logo" />
        </a>
        <div className="search">
          <input type="search" placeholder="Search" onChange={search} />
          <button>
            <img src="./img/Group.svg" alt="" />
          </button>
        </div>
        <div className="btnGroups">
          <NavLink to={"/ProfilePage"} className="navbtn">
            <img src="./img/kirish.svg" alt="" />
          </NavLink>
          <NavLink to={"/LikePage"} className="navbtn">
            <h6 className="badge">{likecount}</h6>
            <img src="./img/like.svg" alt="" />
          </NavLink>
          <NavLink to={"/SavatPage"} className="navbtn">
            <h6 className="badge">{karzinka}</h6>
            <img src="./img/karzinka.svg" alt="" />
          </NavLink>
        </div>
        {/* /////////medianav */}
        <div className="mdiaNav">
          <NavLink to={"/All"}>
            <img src="./img/mednav/home.png" alt="" />
          </NavLink>
          <NavLink to={"/LikePage"}>
            <img src="./img/mednav/like.png" alt="" />
          </NavLink>
          <NavLink to={"/ProfilePage"}>
            <img src="./img/mednav/kirish.png" alt="" />
          </NavLink>
          <NavLink to={"/SavatPage"}>
            <img src="./img/mednav/shop.png" alt="" />
          </NavLink>
          <button onClick={() => setMenu(!menu)}>
            <img src="./img/mednav/menu.png" alt="" />
          </button>
        </div>
        {/* ///////// */}
      </div>
      <div className="navbtnsScroll">
        <div className={menu ? "navbarBtns active" : "navbarBtns"}>
          {kategoryabtns.map((val, i) => (
            <NavLink
              to={`/${val}`}
              className={allcount === i ? " activ" : ""}
              key={i}
              onClick={() => kategBtn(i)}
            >
              {val}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
