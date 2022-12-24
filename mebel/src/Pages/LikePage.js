import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Empty } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { buyurtmafun, colorCounts, likefun } from '../redux/HomeReducer';
import Slider from "react-slick";

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  //  carusel ////////

  return (
    <>
      <h1 className="title">Like Savatcha</h1>
      {
        likedata.length > 0 ?
         <>
            <div className="likepage">
            {likedata.map((val, i) => (
              <div className="likecard" key={i}>
                <div className="imgcaruselcard">
                  <Slider {...settings}>
                    {val.img.map((val, i) => (
                      <div key={i} >
                        <img src={val} alt="" className="" />
                      </div>
                    ))}
                  </Slider>
                </div>
                <h3 className="razmertext">
                  {val.sort} : {val.name}
                </h3>
                <div className="colorbtnGroups">
                  {val.color.map((v, e) => (
                    <button
                      key={e}
                      className={val.colorCount === e ? "colors active" : "colors"}
                      style={{ background: v }}
                      onClick={() => dispatch(colorCounts([val, e]))}
                    ></button>
                  ))}
                </div>
                <div className="sena">
                  <span className="underlinetext">120000 sum</span>
                  <span className="activetext">11000 sum</span>
                </div>  
                {/* <div className="countcard">
                  <h1>
                    Count : <span>1</span>
                  </h1>
                  <Button>+</Button>
                  <Button>-</Button>
                </div> */}
                <div className="cardbtns">
                  <button
                    className={val.buyurtma ? "buyurtma active" : "buyurtma "}
                    onClick={() => buyurtma(val)}
                  >
                    Savtga <ShoppingCartOutlined />
                  </button>
                  <button className="like" onClick={() => likeFunn(val)}>
                    {val.like ? (
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
                    <span style={{ borderBottom: "1px solid grey" }}>eni</span> <br />{" "}
                    1-metr
                  </p>
                  <p className="razmerbtn">
                    <span style={{ borderBottom: "1px solid grey" }}>qalinligi</span>{" "}
                    <br /> 1.5-sm
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
                  eveniet aperiam deserunt labore sint ratione delectus incidunt nihil
                  rerum tempore. Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Modi possimus minima doloremque optio expedita ipsam repellat
                  ad obcaecati officiis maiores.
                </p>
              </div>
            ))}
          </div>
         </>
          : <Empty />
      }
    </>
  );
}

