import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    like: 0,
    karzinka: 0,
     caruselImg :[
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
    ],
     katalog : [
        { id: 1, img: './img/katalog/1.png', title: 'Kuxni' },
        { id: 2, img: './img/katalog/2.png', title: 'Spalni' },
        { id: 3, img: './img/katalog/3.png', title: 'Detski' },
        { id: 4, img: './img/katalog/4.png', title: 'Shkaf' },
        { id: 5, img: './img/katalog/5.png', title: 'Stol-Stul' },
        { id: 6, img: './img/katalog/6.png', title: 'Mexmonxona' },
        { id: 7, img: './img/katalog/7.png', title: 'Devan' },
        { id: 8, img: './img/katalog/8.png', title: 'Kuxni' },
    ],
    data:[
      {
        id:1,
        name:'kuxna uchun',
        img:[
          './img/katalog/1.png',
          './img/katalog/2.png',
          './img/katalog/3.png',
        ],
        sort:'kuxni',
        like:false,
        count:0,
        razmer:{buyi:'2-metr',eni:'1-metr',qalinligi:'1.5-sm'},
        narx:123000,
        skitka:10,
        holati:false
      },
      {
        id:2,
        name:'kuxna uchun',
        img:[
          './img/katalog/2.png',
          './img/katalog/1.png',
          './img/katalog/3.png',
        ],
        sort:'kuxni',
        like:false,
        count:0,
        razmer:{buyi:'2-metr',eni:'1-metr',qalinligi:'1.5-sm'},
        narx:123000,
        skitka:10,
        holati:false
      },
      {
        id:3,
        name:'kuxna uchun',
        img:[
          './img/katalog/3.png',
          './img/katalog/2.png',
          './img/katalog/3.png',
        ],
        sort:'kuxni',
        like:false,
        count:0,
        razmer:{buyi:'2-metr',eni:'1-metr',qalinligi:'1.5-sm'},
        narx:123000,
        skitka:10,
        holati:false
      },
      {
        id:4,
        name:'kuxna uchun',
        img:[
          './img/katalog/4.png',
          './img/katalog/2.png',
          './img/katalog/3.png',
        ],
        sort:'kuxni',
        like:false,
        count:0,
        razmer:{buyi:'2-metr',eni:'1-metr',qalinligi:'1.5-sm'},
        narx:123000,
        skitka:10,
        holati:false
      },
      {
        id:5,
        name:'kuxna uchun',
        img:[
          './img/katalog/5.png',
          './img/katalog/2.png',
          './img/katalog/3.png',
        ],
        sort:'kuxni',
        like:false,
        count:0,
        razmer:{buyi:'2-metr',eni:'1-metr',qalinligi:'1.5-sm'},
        narx:123000,
        skitka:10,
        holati:false
      },
    ]
  }
  
  export const HomeReducer = createSlice({
    name: 'home',
    initialState,
    reducers: {
      increment: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { increment, decrement, incrementByAmount } = HomeReducer.actions
  
  export default HomeReducer.reducer