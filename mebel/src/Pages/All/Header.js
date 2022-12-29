import React, { useState } from 'react';
import { Button, Modal } from "antd";
import { PicCenterOutlined } from '@ant-design/icons';
import FilterControl from './FilterControl';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="header">
      <button className="contact">
        <img src="./img/Vector.svg" alt="" />
        +99899 110 11 97
      </button>
      <Button onClick={showModal} className="headerselect">Filter  <PicCenterOutlined /></Button>
      <a target={'blank'} href="https://www.google.com/maps/place/UITC+Software+company/@40.994492,71.6041801,19z/data=!3m1!4b1!4m12!1m6!3m5!1s0x38bb4a397db19cc7:0x3573ff83551d97df!2sSportivnyy+Fitnes+Kompleks%22Alpomish%22!8m2!3d40.9945985!4d71.6045345!3m4!1s0x38bb4b1ab70580ed:0x779c9564e399726c!8m2!3d40.994492!4d71.6047273">
        {" "}
        <img src="./img/Vector (1).svg" alt="" /> Namangan/UITC/...
      </a>

      <Modal title="Basic Modal" footer={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <FilterControl/>
      </Modal>
    </div>
  );
}

export default Header;