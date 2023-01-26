import { CaretDownFilled, DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Empty } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { buyurtmafun, colorCounts, likefun } from '../redux/HomeReducer';
import Slider from "react-slick";
import AutoPlayMethods from './All/cardslic';

export default function LikePage() {
  const { data } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  let likedata = data.filter((val) => val.like === true);

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

  //  carusel ////////


  return (
    <div className="likepageHome">
      <h1 className="title">Like Savatcha</h1>
      {likedata.length > 0 ? (
        <>
          <div className="likepage">
            {likedata.map((val, i) => (
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
        </>
      ) : (
        <Empty />
      )}
    </div>
  );
}

