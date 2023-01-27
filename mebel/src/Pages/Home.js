import React, { useState } from "react";
import { Carousel } from "react-carousel-minimal";
import { useDispatch, useSelector } from "react-redux";

import CarouselSkitka from "./All/Crousel";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Empty, Modal, Rate } from "antd";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import QilinganCaruselimg from "./All/QilinganCaruselImg";
import MalumotlarCards from "./All/MalumotCArds";
import FilterControl from "./All/FilterControl";
import AutoPlayMethods from "./All/cardslic";
import { buyurtmafun, likefun, savatCount, savatCountdecr } from "../redux/HomeReducer";

function Home() {
  const { caruselImg, katalog, data, qilinganIshalr } = useSelector(
    (state) => state.home
  );
  const dispatch = useDispatch();

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  // ////////
  //  pagination /////////////////
  const [pagcount, setPagcount] = useState(1);
  let pegbtn = parseInt(data.length / 4);
  let pegmass = [];
  let i = 1;

  for (i; i <= pegbtn + 1; i++) {
    pegmass.push(i);
  }
  const prev = () => {
    setPagcount(pagcount - 1);
    if (pagcount <= 1) {
      setPagcount(pegmass.pop());
    }
  };
  const next = () => {
    setPagcount(pagcount + 1);
    if (pagcount >= pegmass.pop()) {
      setPagcount(1);
    }
  };
  //  pagination /////////////////
  //  toastfun /////////////////
  const toastsucces = (a) => {
    toast.success(`${a}`, {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const toastwarning = (a) => {
    toast.warning(`${a}`, {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  //  toastfun /////////////////
  //  buyurtma fun /////////////////
  const buyurtma = (val) => {
    if (val.buyurtma) {
      toastwarning("Buyurtma rad etildi !");
    } else {
      toastsucces("Buyurtma qabul qilindi !");
    }
    dispatch(buyurtmafun(val));
    
  };
  //  buyurtma fun /////////////////
  //  like fun /////////////////
  const likeFunn = (val) => {
    if (val.like) {
      toastwarning("like qaytarildi !");
    } else {
      toastsucces("like bosildi !");
    }
    dispatch(likefun(val));
  };
  //  like fun /////////////////

  //Modal //////////
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCount, setIsModalcount] = useState(0);
  const [modalContent, setModalContent] = useState(true);
  const [modalcard, setModalcard] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
    setModalContent(true)
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //Modal //////////
  //  carusel ////////

  //  carusel ////////
   const countincr = (val) => {
     dispatch(savatCount(val));
     console.log(val);
   };
   const countdecr = (val) => {
     dispatch(savatCountdecr(val));
     console.log(val);

   };
  //ishlarcardFun/////
  const ishlarcardFun = (i) => {
    setIsModalcount(i);
    showModal();
    setModalContent(false);
  };
  //ishlarcardFun/////
  const cardfun = (val) => {
    setModalContent(true);
    showModal();
    const  v = data.find((item) =>item.id === val.id)
    setModalcard(v);
    console.log(v);
  };
  return (
    <div className="home">
      <ToastContainer />
      <div className="sec1">
        <div className="imgcard">
          <div style={{ textAlign: "center" }}>
            <h1 className="title">Biz haqimizda !</h1>
            <div className="headerCaruselcard">
              <div
                style={{
                  padding: "0 20px",
                }}
              >
                <Carousel
                  data={caruselImg}
                  time={5000}
                  width="100%"
                  height="500px"
                  captionStyle={captionStyle}
                  radius="10px"
                  slideNumber={true}
                  slideNumberStyle={slideNumberStyle}
                  captionPosition="bottom"
                  automatic={true}
                  dots={true}
                  pauseIconColor="white"
                  pauseIconSize="40px"
                  slideBackgroundColor="darkgrey"
                  slideImageFit="cover"
                  thumbnails={true}
                  thumbnailWidth="100px"
                  style={{
                    textAlign: "center",
                    maxWidth: "1920px",
                    maxHeight: "500px",
                    margin: "40px auto",
                  }}
                />
              </div>
              {/* //////////////////////////////////////////////// */}
              <div className="bizningA">
                <h1 className="title">Bizning afzalliklar</h1>
                <div className="cards">
                  <button>
                    {" "}
                    <img src="./img/Group.png" alt="" /> Qulay manzil
                  </button>
                  <button>
                    {" "}
                    <img src="./img/Group (1).png" alt="" /> Tez yetkazis
                  </button>
                  <button>
                    {" "}
                    <img src="./img/Group (2).png" alt="" /> Arzon narxlar
                  </button>
                  <button>
                    {" "}
                    <img src="./img/Group (3).png" alt="" /> Kafolatlangan
                  </button>
                </div>
              </div>
            </div>
            {/* /////////////////// */}
          </div>
        </div>
      </div>

      {/* /////////////////// */}
      <div className="mashxurtavarlar">
        <h1 className="title">Hamma tavarlar</h1>
        {data.length > 0 ? (
          <div className="mashxurtavarlarCards">
            {data.map((val) => (
              <div className="card" key={val.id}>
                <div className="positionCard">
                  <div className={val.skitka > 0 ? "skitka active" : "skitka"}>
                    {val.skitka}%
                  </div>
                  <div className={val.holati ? "new active" : "new"}>new</div>
                </div>
                <div className="cardimg" onClick={() => cardfun(val)}>
                  <AutoPlayMethods props={val.img} />
                </div>
                <div className="manzil">
                  <a href="#">
                    {val.viloyat}/{val.tuman}
                  </a>
                </div>
                <div className="razmertext">
                  <span>{val.name} </span>
                  <span>{val.narx} sum </span>
                </div>

                <div className="cardbtns">
                  <button
                    className={val.buyurtma ? "buyurtma active" : "buyurtma "}
                    onClick={() => buyurtma(val)}
                  >
                    <ShoppingCartOutlined />
                  </button>
                  <button className="like" onClick={() => likeFunn(val)}>
                    {val.like ? (
                      <img src="./img/katalog/Vector (2).png" alt="" />
                    ) : (
                      <img src="./img/katalog/Vector (1).png" alt="" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Empty />
        )}
      </div>
      {/* /////////////////////////// */}
      {/* <div className="skitkaCards">
        <CarouselSkitka />
      </div> */}
      {/* /////////////////////////////// */}
      <div className="bajarilganIshlar">
        <h1 className="title">Sotilganlardan namuna</h1>
        <div className="qilinganIshlar">
          {qilinganIshalr.map((val, i) => (
            <div
              className={"ishlarcard" + val.class}
              key={val.id}
              onClick={() => ishlarcardFun(i)}
            >
              <img src={val.img} alt="" />
              <h3 className="ishlarname">{val.name}</h3>
              <div className="positionLupaimg">
                <SearchOutlined />
              </div>
            </div>
          ))}
        </div>
        <Button>Ko'proq ko'rish...</Button>
      </div>
      {/* ////////////////////////////////////// */}
      <MalumotlarCards />
      {/* /////////////////////////////////////////////////////////////////////////// */}
      <Modal
        className="modall"
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {modalContent ? (
          <>
            <div className="modalcard" key={i}>
              <div className="imgcaruselcard">
                <AutoPlayMethods props={modalcard.img} />
              </div>
              <h3 className="razmertext">
                {modalcard.sort} : {modalcard.name}
              </h3>

              <div className="sena">
                <span className="underlinetext">120000 sum</span>
                <span className="activetext">11000 sum</span>
              </div>
              <div className="countcard">
                <h1>
                  Count : <span>{modalcard.count}</span>
                </h1>
                <Button onClick={() => countincr(modalcard)}>+</Button>
                <Button onClick={() => countdecr(modalcard)}>-</Button>
              </div>
              <Rate allowHalf defaultValue={2.5} />
              <h2 className="savatnarx">
                <h6> {modalcard.name} : </h6>
                <h4> {modalcard.count * modalcard.narx}$</h4>
              </h2>
              <div className="cardbtns">
                <button
                  className={
                    modalcard.buyurtma ? "buyurtma active" : "buyurtma "
                  }
                  onClick={() => buyurtma(modalcard)}
                >
                  Savtga <ShoppingCartOutlined />
                </button>
                <button className="like" onClick={() => likeFunn(modalcard)}>
                  {modalcard.like ? (
                    <img src="./img/katalog/Vector (2).png" alt="" />
                  ) : (
                    <img src="./img/katalog/Vector (1).png" alt="" />
                  )}
                </button>
              </div>
              <div className="razmer">
                Razmer :{" "}
                <p className="razmerbtn">
                  <span style={{ borderBottom: "1px solid grey" }}>buyi</span>{" "}
                  <br /> 2-metr
                </p>
                <p className="razmerbtn">
                  <span style={{ borderBottom: "1px solid grey" }}>eni</span>{" "}
                  <br /> 1-metr
                </p>
                <p className="razmerbtn">
                  <span style={{ borderBottom: "1px solid grey" }}>
                    qalinligi
                  </span>{" "}
                  <br /> 1.5-sm
                </p>
              </div>
              <p className="bodysavat">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
                eveniet aperiam deserunt labore sint ratione delectus incidunt
                nihil rerum tempore. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Modi possimus minima doloremque optio expedita
                ipsam repellat ad obcaecati officiis maiores.
              </p>
            </div>
          </>
        ) : (
          <QilinganCaruselimg count={modalCount} />
        )}
      </Modal>
    </div>
  );
}

export default Home;
