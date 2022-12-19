import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";

function QilinganCaruselimg(state) {
  const { qilinganishlarImgs } = useSelector((state) => state.home);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h1 className="title">Biz tayyarlagan ishlar</h1>
      <Slider {...settings}>
        {qilinganishlarImgs[state.count].img.map((val, i) => (
          <div key={i}>
            <img src={val} alt="" className="qilinganImgcarusel" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default QilinganCaruselimg;
