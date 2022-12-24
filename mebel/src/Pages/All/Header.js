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
      <a href=".">
        {" "}
        <img src="./img/Vector (1).svg" alt="" /> Namangan/Mingbuloq/...
      </a>

      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <FilterControl/>
      </Modal>
    </div>
  );
}

export default Header;