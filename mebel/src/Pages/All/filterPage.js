



import { ShoppingCartOutlined } from "@ant-design/icons";
import React ,{useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { toast } from "react-toastify";
import { buyurtmafun, imgbtnCount, likefun } from "../../redux/HomeReducer";
import AutoPlayMethods from './cardslic.js'
import { Button, Empty, Modal } from "antd";
import { savatCount, savatCountdecr } from "../../redux/HomeReducer";

export const FilterPage = ({ props }) => {
  const { data } = useSelector((state) => state.home);
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
  const cardfun = (val) => {
    setModalContent(true);
    showModal();
    const v = data.find((item) => item.id === val.id);
    setModalcard(v);
    console.log(v);
  };
  //  filter /////////////////
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCount, setIsModalcount] = useState(0);
  const [modalContent, setModalContent] = useState(true);
  const [modalcard, setModalcard] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
    setModalContent(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //Modal //////////
  const countincr = (val) => {
    dispatch(savatCount(val));
    console.log(val);
  };
  const countdecr = (val) => {
    dispatch(savatCountdecr(val));
    console.log(val);
  };
  //ishlarcardFun/////
  return (
    <div className="mashxurtavarlarCards">
      {props.map((val) => (
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
      <Modal
        className="modall"
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="likecard">
          <div className="imgcaruselcard">
            <AutoPlayMethods props={modalcard.img} />
          </div>
          <h3 className="razmertext">
            {modalcard.sort} : {modalcard.name}
          </h3>
          <div className="colorbtnGroups">
            {/* {modalcard.color.map((v, e) => (
                  <button
                    key={e}
                    className={
                      modalcard.colorCount === e ? "colors active" : "colors"
                    }
                    style={{ background: v }}
                    onClick={() => dispatch(colorCounts([modalcard, e]))}
                  ></button>
                ))} */}
          </div>
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

          <h2 className="savatnarx">
            <h6> {modalcard.name} : </h6>
            <h4> {modalcard.count * modalcard.narx}$</h4>
          </h2>
          <div className="cardbtns">
            <button
              className={modalcard.buyurtma ? "buyurtma active" : "buyurtma "}
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
              <span style={{ borderBottom: "1px solid grey" }}>eni</span> <br />{" "}
              1-metr
            </p>
            <p className="razmerbtn">
              <span style={{ borderBottom: "1px solid grey" }}>qalinligi</span>{" "}
              <br /> 1.5-sm
            </p>
          </div>
          <p className="bodysavat">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            eveniet aperiam deserunt labore sint ratione delectus incidunt nihil
            rerum tempore. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Modi possimus minima doloremque optio expedita ipsam repellat
            ad obcaecati officiis maiores.
          </p>
        </div>
        
      </Modal>
    </div>
  );
}