import { Modal } from "antd";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Likecards, Savatcards } from "./ModalSavat";

function Navbar() {
  const { likecount, karzinka, kategoryabtns } = useSelector((state) => state.home);

  const [menu, setMenu] = useState(false);
  // kategorybtn
  const [allcount, setAll] = useState();
  const kategBtn = (i) => {
    setAll(i);
  };
  // kategorybtn
 
  return (
    <nav className="navbar">
      <div className="navbarHead">
        <a href=".">
          <img src="./img/Vector.png" alt="" className="logo" />
        </a>
        <div className="search">
          <input type="search" placeholder="Search" />
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
          <button>
            <img src="./img/mednav/home.png" alt="" />
          </button>
          <button>
            <img src="./img/mednav/like.png" alt="" />
          </button>
          <button>
            <img src="./img/mednav/kirish.png" alt="" />
          </button>
          <button>
            <img src="./img/mednav/shop.png" alt="" />
          </button>
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
              className={allcount === i ? " active" : ""}
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
