import { ShoppingCartOutlined } from '@ant-design/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { buyurtmafun, imgbtnCount, likefun } from '../redux/HomeReducer';

function Kuxni() {
    const { data } = useSelector(
        (state) => state.home
      );
      const dispatch = useDispatch();
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
  //  filter /////////////////
  //  filter /////////////////
    return (
        <div>
            <div className="mashxurtavarlarCards">
                {data.filter((val) => val.sort == "kuxni").map((val) => (
                    <div className="card" key={val.id}>
                        <div className="positionCard">
                            <div className={val.skitka > 0 ? "skitka active" : "skitka"}>
                                {val.skitka}%
                            </div>
                            <div className={val.holati ? "new active" : "new"}>new</div>
                        </div>
                        <img
                            src={val.img[`${val.imgbtnCount}`]}
                            alt=""
                            className="cardimg"
                        />
                        <div className="imgbtns">
                            <button
                                className={
                                    val.imgbtnCount === 0 ? "imgbtn active" : "imgbtn "
                                }
                                onClick={() => dispatch(imgbtnCount([val, 0]))}
                            ></button>
                            <button
                                className={
                                    val.imgbtnCount === 1 ? "imgbtn active" : "imgbtn "
                                }
                                onClick={() => dispatch(imgbtnCount([val, 1]))}
                            ></button>
                            <button
                                className={
                                    val.imgbtnCount === 2 ? "imgbtn active" : "imgbtn "
                                }
                                onClick={() => dispatch(imgbtnCount([val, 2]))}
                            ></button>
                        </div>
                        <h3 className="razmertext">
                            {val.sort} : {val.name}
                        </h3>
                        {/* <div className="colorbtnGroups">
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
                </div> */}
                        <div className="sena">
                            <span className="underlinetext">120000 sum</span>
                            <span className="activetext">11000 sum</span>
                        </div>
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
                        {/* <div className="razmer">
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
                </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Kuxni;