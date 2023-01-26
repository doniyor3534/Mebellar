import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Empty } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import {
  buyurtmafun,
  colorCounts,
  likefun,
  savatCount,
  savatCountdecr,
} from "../redux/HomeReducer";
import Slider from "react-slick";
import AutoPlayMethods from "./All/cardslic";
import { useState } from "react";

export default function SavatPage() {
  const { data } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  let savatdata = data.filter((val) => val.buyurtma === true);

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
  //  carusel ////////
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  //  carusel ////////
  // ////totalfun
   const [totalsum,setTotalsum] = useState(0)
   const totalfun = async () => {
     let summa = await data
       .filter((val) => val.buyurtma === true)
       .reduce((a, b) => a + b.narx * b.count, 0);
     setTotalsum(summa);
   };
  totalfun()
  // counter
  const countincr = (val) => {
    dispatch(savatCount(val));
    totalfun();
  };
  const countdecr = (val) => {
    dispatch(savatCountdecr(val));
    totalfun();
  };
  return (
    <div className="savatPage">
      <h1 className="title"> Savatchaga olinganlar</h1>
      {savatdata.length > 0 ? (
        <>
          <div className="likepage">
            {savatdata.map((val, i) => (
              <div className="likecard" key={i}>
                <div className="imgcaruselcard">
                  <AutoPlayMethods props={val.img} />
                </div>
                <div className="ca">
                  <h3 className="razmertext">
                    {val.sort} : {val.name}
                  </h3>
                  <div className="sena">
                    <span className="underlinetext">120000/ sum</span>
                    <span className="activetext">11000/ sum</span>
                  </div>
                </div>
                <div className="ca">
                  <div className="countcard">
                    <h1>
                     <Button onClick={() => countincr(val)}>+</Button>
                      <span style={{margin:'0px 8px'}}>{val.count}</span>
                      <Button onClick={() => countdecr(val)}>-</Button>
                    </h1>
                  </div>
                  <div className="colorbtnGroups">
                    {val.color.map((v, e) => (
                      <button
                        key={e}
                        className={
                          val.colorCount === e ? "colors active" : "colors"
                        }
                        style={{ background: v }}
                        onClick={() => dispatch(colorCounts([val, e]))}
                      ></button>
                    ))}
                  </div>
                </div>
                <h2 className="savatnarx">
                  Summa : {val.count * val.narx} /Sum
                </h2>
                <div className="cardbtns">
                  <button
                    className={val.buyurtma ? "buyurtma active" : "buyurtma "}
                    onClick={() => buyurtma(val)}
                  >
                  <DeleteOutlined />
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
          <Button className="sotibol" type="primary">
            Sotib olish
          </Button>
          <h1 style={{ color: "grey", marginTop: "10px" }}>
            Total Summa :
            {totalsum}
           / Sum
          </h1>
        </>
      ) : (
        <Empty />
      )}
      <ToastContainer />
    </div>
  );
}
