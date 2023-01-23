import React, { Component } from "react";
import Slider from "react-slick";



function AutoPlayMethods({props}) {
    // console.log(props);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    };
    return (
      <>
        <Slider ref={(slider) => (Component.slider = slider)} {...settings}>
          {props.map((val, i) => (
            <div key={i}>
              <img src={val} alt="" className="cardimg" />
            </div>
          ))}
        
        </Slider>
      </>
    );
}
export default AutoPlayMethods;
