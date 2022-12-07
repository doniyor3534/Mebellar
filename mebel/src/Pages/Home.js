import React, { useState } from 'react';
import { Carousel } from 'react-carousel-minimal';
import { useDispatch, useSelector } from 'react-redux';
import { colorCounts, imgbtnCount } from '../redux/HomeReducer';

function Home() {
    const { caruselImg, katalog, data } = useSelector((state) => state.home)
    const dispatch = useDispatch()

    console.log(data);
    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    // ////////
    const [buyurtma, setBuyurtma] = useState(false)
    const [like, setLike] = useState(false)
    const [colors, setColors] = useState(false)
    return (
        <div className='home'>
            <div className="sec1">
                <div className="imgcard">
                    <div style={{ textAlign: "center" }}>
                        <h1>Eng qulay mebellar bizda</h1>
                        <div style={{
                            padding: "0 20px"
                        }}>
                            <Carousel
                                data={caruselImg}
                                time={3000}
                                width="100%"
                                height="500px"
                                captionStyle={captionStyle}
                                radius="10px"
                                slideNumber={true}
                                slideNumberStyle={slideNumberStyle}
                                captionPosition="bottom"
                                automatic={true}
                                dots={true}
                                pauseIconColor="white"
                                pauseIconSize="40px"
                                slideBackgroundColor="darkgrey"
                                slideImageFit="cover"
                                thumbnails={true}
                                thumbnailWidth="100px"
                                style={{
                                    textAlign: "center",
                                    maxWidth: "1920px",
                                    maxHeight: "500px",
                                    margin: "40px auto",
                                }}
                            />
                        </div>
                    </div>
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
            <div className="katalog">
                <h1 className="title">KATALOG</h1>
                <div className="katalogCards">
                    {
                        katalog.map((val) => (
                            <div className="card" key={val.id} >
                                <img src={val.img} alt="" />
                                <p className="text">{val.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="mashxurtavarlar">
                <h1 className="title">Mashxur tavarlar</h1>
                <div className="mashxurtavarlarCards">
                    {
                        data.map((val) => (
                            <div className="card" key={val.id}>
                                <div className="positionCard">
                                    <div className={val.skitka > 0?"skitka active":"skitka"}>{val.skitka}%</div>
                                    <div className={val.holati ?"new active":"new"}>new</div>
                                </div>
                                <img src={val.img[`${val.imgbtnCount}`]} alt="" className="cardimg" />
                                <div className="imgbtns">
                                    <button className={val.imgbtnCount === 0 ? "imgbtn active" : "imgbtn "} onClick={() => dispatch(imgbtnCount([val,0]))}></button>
                                    <button className={val.imgbtnCount === 1 ? "imgbtn active" : "imgbtn "} onClick={() => dispatch(imgbtnCount([val,1]))}></button>
                                    <button className={val.imgbtnCount === 2 ? "imgbtn active" : "imgbtn "} onClick={() => dispatch(imgbtnCount([val,2]))}></button>
                                </div>
                                <h3 className='razmertext'>kuxni : kuxna uchun</h3>
                                <div className="colorbtnGroups">
                                    {
                                        val.color.map((v,e)=>(
                                            <button className={val.colorCount === e?"colors active":"colors"} style={{background:v}} onClick={()=>dispatch(colorCounts([val,e]))} ></button>
                                        ))
                                    }
                                </div>
                                <div className="sena">
                                    <span className="underlinetext">120000 sum</span>
                                    <span className="activetext">11000 sum</span>
                                </div>
                                <div className="cardbtns">
                                    <button className={buyurtma ? "buyurtma active" : "buyurtma "} onClick={() => setBuyurtma(!buyurtma)}>buyutma</button>
                                    <button className="like" onClick={() => setLike(!like)}>{like ? <img src="./img/katalog/Vector (2).png" alt="" /> : <img src="./img/katalog/Vector (1).png" alt="" />}</button>
                                </div>
                                <div className="razmer">
                                    Razmer : <p className="razmerbtn">buyi <br /> <hr />  2-metr</p>
                                    <p className="razmerbtn">eni <br /> <hr /> 1-metr</p>
                                    <p className="razmerbtn">qalinligi <br /> <hr /> 1.5-sm</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;