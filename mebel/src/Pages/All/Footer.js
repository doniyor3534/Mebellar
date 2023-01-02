import { InstagramOutlined } from "@ant-design/icons";
import React from "react";
import { useState } from "react";

function Footer() {
  const [footerCount,setFooterCount]=useState(false)
  return (
    <div className={footerCount?"footer active":'footer'} id='footer'>
      <div className="footerUl">
        <a href="#" className="footerlogo">
          <img src="./img/logo.png" alt=""  className="footericon"/>
          <button className="footerbtn" onClick={()=>setFooterCount(!footerCount)}>footer</button>
        </a>
        <a href="#">8-961-525-91-91</a>
        <p>ish vaqti : 10:00 до 19:00</p>
        <a href="#">adres : Краснодар, ул. Московская 144 корп. - 1</a>
        <a href="#">pochta : doniyorbektursunov800@gmail.com</a>
        <p>Instagram</p>
        <a href="https://instagram.com/doniyor35341" className="logoSocial">
          <InstagramOutlined />
        </a>
      </div>
          <div className="footerUl">
              <h3>Kuxni</h3>
              <a href="#">aaaaaaaa</a>
              <a href="#">aaaaeeeeaaaa</a>
              <a href="#">aaaaaaaa</a>
              <a href="#">aaaeeeeaaaaa</a>
              <a href="#">aaaaaaaa</a>
              <a href="#">aaaaaaaa</a>
      </div>
          <div className="footerUl">
              <h3>Mexmonxona</h3>
              <a href="#">aaaaaaaa</a>
              <a href="#">aaaaaaaa</a>
              <a href="#">aaaeeeeeeaaaaa</a>
              <a href="#">aaaaaaaa</a>
              <a href="#">aaaaaaaa</a>
              <a href="#">aaaaaaaa</a>
      </div>
          <div className="footerUl">
              <h3>Divan</h3>
              <a href="#">aaaaaaaa</a>
              <a href="#">aaaaaaaa</a>
              <a href="#">aaaaaaaa</a>
              <a href="#">aaaaaaaa</a>
              <a href="#">aaaaaaaa</a>
              <a href="#">aaaaaeeeaaa</a>
      </div>
          <div className="footerUl">
              <h3>Bolalar uchun</h3>
              <a href="#">aaaaaaaa</a>
              <a href="#">aaaaaaaa</a>
              <a href="#">aaaeeeaaaaa</a>
              <a href="#">aaaaaaaa</a>
              <a href="#">aaaaaaaa</a>
              <a href="#">aaaaaaaa</a>
      </div>
    </div>
  );
}

export default Footer;
