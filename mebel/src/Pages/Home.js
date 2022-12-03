import React from 'react';

function Home() {
    return (
        <div className='home'>
            <div className="sec1">
                <div className="imgcard">
                    <img src="./img/bg5.webp" alt="" className="sec1img" />
                </div>
                <div className="bizningA">
                    <h1 className="title">Bizning afzalliklar</h1>
                    <div className="cards">
                        <button> <img src="./img/Group.png" alt="" /> Qulay manzil</button>
                        <button> <img src="./img/Group (1).png" alt="" /> Tez yetkazis</button>
                        <button> <img src="./img/Group (2).png" alt="" /> Arzon narxlar</button>
                        <button> <img src="./img/Group (3).png" alt="" /> Kafolatlangan</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;