import React from 'react';

function Navbar() {
    return (
        <nav className='navbar'>
             <div className="navbarHead">
                <a href="."><img src="./img/Vector.png" alt="" /></a>
                <div className="search">
                     <input type="search" placeholder='Search' />
                     <button><img src="./img/Group.svg" alt="" /></button>
                </div>
                <div className="btnGroups">
                    <button className="navbtn">
                        <h6 className="badge">0</h6>
                        <img src="./img/kirish.svg" alt="" />
                        Kirish
                    </button>
                    <button className="navbtn">
                        <h6 className="badge">0</h6>
                        <img src="./img/like.svg" alt="" />
                        Like
                    </button>
                    <button className="navbtn">
                         <h6 className="badge">0</h6>
                        <img src="./img/karzinka.svg" alt="" />
                        Karzinka
                    </button>
                </div>
             </div>
             <div className="navbarBtns"> 
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