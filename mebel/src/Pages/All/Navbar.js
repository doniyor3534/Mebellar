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
  //modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalcount, setIsModalCount] = useState();
  const likefun=()=>{
    setIsModalCount(1)
    showModal()
  }
  const savatfun=()=>{
    setIsModalCount(2)
    showModal()
  }
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //modal
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
          <button className="navbtn">
            <img src="./img/kirish.svg" alt="" />
          </button>
          <button className="navbtn" onClick={likefun}>
            <h6 className="badge">{likecount}</h6>
            <img src="./img/like.svg" alt="" />
          </button>
          <button className="navbtn" onClick={savatfun}>
            <h6 className="badge">{karzinka}</h6>
            <img src="./img/karzinka.svg" alt="" />
          </button>
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
            <NavLink to={`/${val}`} key={i}>
              <button
                className={allcount === i ? " active" : ""}
                key={i}
                onClick={() => kategBtn(i)}
              >
                {val}
              </button>
            </NavLink>
          ))}
        </div>
      </div>
      <Modal footer={false} title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
         { modalcount ===1?
          <Likecards/>
          :
          <Savatcards/>}
      </Modal>
    </nav>
  );
}

export default Navbar;
