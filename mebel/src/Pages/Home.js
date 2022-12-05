import React from 'react';
import { Carousel } from 'react-carousel-minimal';

function Home() {
    const data = [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
            caption: "San Francisco"
        },
        {
            image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
            caption: "Scotland"
        },
        {
            image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
            caption: "Darjeeling"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
            caption: "San Francisco"
        },
        {
            image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
            caption: "Scotland"
        },
        {
            image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
            caption: "Darjeeling"
        },
        {
            image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
            caption: "San Francisco"
        },
        {
            image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
            caption: "Scotland"
        },
        {
            image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
            caption: "Darjeeling"
        }
    ];
    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    // ////////
    const katalog = [
        { id: 1, img: './img/katalog/1.png', title: 'Kuxni' },
        { id: 2, img: './img/katalog/2.png', title: 'Spalni' },
        { id: 3, img: './img/katalog/3.png', title: 'Detski' },
        { id: 4, img: './img/katalog/4.png', title: 'Shkaf' },
        { id: 5, img: './img/katalog/5.png', title: 'Stol-Stul' },
        { id: 6, img: './img/katalog/6.png', title: 'Mexmonxona' },
        { id: 7, img: './img/katalog/7.png', title: 'Devan' },
        { id: 8, img: './img/katalog/8.png', title: 'Kuxni' },
    ]
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
                                data={data}
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

            </div>
        </div>
    );
}

export default Home;