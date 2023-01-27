import React from "react";
import {EditOutlined} from '@ant-design/icons'

function MalumotlarCards() {
    return (
      <div className="malumotlarCards">
        <div className="boglanish">
          <img src="./img/boglanish.png" alt="" />
          <div className="boglanishcard">
            <h1>Biz bilan bog'laning</h1>
            <p>Namangan/5-kichik nohiya/alpomish.1-qavat</p>
            <a href="tel:+998991101197">+99899-110-11-97</a>
            <button className="sasvollarbtn">
              Savol yo'llang <EditOutlined />
            </button>
          </div>
        </div>
        <div className="xarita">
          <iframe
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="//www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48182.41418511791!2d71.604535!3d40.994598!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3573ff83551d97df!2sSportivnyy%20Fitnes%20Kompleks%22Alpomish%22!5e0!3m2!1suz!2sus!4v1671428560120!5m2!1suz!2sus"
            scrolling="no"
            // marginheight="0"
            // marginwidth="0"
          ></iframe>
        </div>
      </div>
    );
}

export default MalumotlarCards;
