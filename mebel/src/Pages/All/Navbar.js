import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function Navbar() {
    const {like,karzinka} = useSelector((state) => state.home)
    const dispatch = useDispatch()

    const [menu,setMenu]=useState(false)
    return (
        <nav className='navbar'>
             <div className="navbarHead">
                <a href="."><img src="./img/Vector.png" alt="" className='logo' /></a>
                <div className="search">
                     <input type="search" placeholder='Search' />
                     <button><img src="./img/Group.svg" alt="" /></button>
                </div>
                <div className="btnGroups">
                    <button className="navbtn">
                        <img src="./img/kirish.svg" alt="" />
                    </button>
                    <button className="navbtn">
                        <h6 className="badge">{like}</h6>
                        <img src="./img/like.svg" alt="" />
                    </button>
                    <button className="navbtn">
                         <h6 className="badge">{karzinka}</h6>
                        <img src="./img/karzinka.svg" alt="" />
                    </button>
                </div>
                {/* /////////medianav */}
                <div className="mdiaNav">
                    <button><img src="./img/mednav/home.png" alt="" /></button>
                    <button><img src="./img/mednav/like.png" alt="" /></button>
                    <button><img src="./img/mednav/kirish.png" alt="" /></button>
                    <button><img src="./img/mednav/shop.png" alt="" /></button>
                    <button onClick={()=>setMenu(!menu)} ><img src="./img/mednav/menu.png" alt="" /></button>
                </div>
                {/* ///////// */}
             </div>
             <div className={menu?"navbarBtns active":"navbarBtns"}> 
                 <button>Kuxna</button>
                 <button>Mexmonxona</button>
                 <button>Spalni</button>
                 <button>Shkaflar</button>
                 <button>Bolalar uchun</button>
             </div>
        </nav>
    );
}

export default Navbar;