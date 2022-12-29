import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likecount: 0,
  karzinka: 0,
  caruselImg: [
    {
      image: "./img/carusel/1.jpg",
      caption: "Qulay Mebellar ",
    },
    {
      image: "./img/carusel/2.webp",
      caption: "Qulay Mebellar",
    },
    {
      image: "./img/carusel/3.webp",
      caption: "Qulay Mebellar",
    },
    {
      image: "./img/carusel/4.webp",
      caption: "Qulay Mebellar",
    },
    {
      image: "./img/carusel/5.webp",
      caption: "Qulay Mebellar",
    },
    {
      image: "./img/carusel/images (2).jfif",
      caption: "Qulay Mebellar",
    },
    {
      image: "./img/carusel/7.webp",
      caption: "Qulay Mebellar",
    },
    {
      image: "./img/carusel/8.webp",
      caption: "Qulay Mebellar",
    },
    {
      image: "./img/carusel/9.webp",
      caption: "Qulay Mebellar",
    },
    {
      image: "./img/carusel/10.webp",
      caption: "Qulay Mebellar",
    },
  ],
  katalog: [
    { id: 1, img: "./img/katalog/1.png", title: "Kuxni" },
    { id: 2, img: "./img/katalog/2.png", title: "Spalni" },
    { id: 3, img: "./img/katalog/3.png", title: "Detski" },
    { id: 4, img: "./img/katalog/4.png", title: "Shkaf" },
    { id: 5, img: "./img/katalog/5.png", title: "Stol-Stul" },
    { id: 6, img: "./img/katalog/6.png", title: "Mexmonxona" },
    { id: 7, img: "./img/katalog/7.png", title: "Devan" },
    { id: 8, img: "./img/katalog/8.png", title: "Kuxni" },
  ],
  dataDefault: [
    {
      id: 1,
      name: "ishxona uchun",
      viloyat: "Namangan",
      tuman: "Mingbuloq",
      buyurtma: false,
      img: [
        "./img/katalog/1.png",
        "./img/katalog/2.png",
        "./img/katalog/3.png",
      ],
      sort: "Mexmonxona",
      imgbtnCount: 0,
      colorCount: 0,
      color: ["green", "grey"],
      like: false,
      count: 1,
      razmer: { buyi: "2-metr", eni: "1-metr", qalinligi: "1.5-sm" },
      narx: 123000,
      skitka: 25,
      holati: true,
    },
    {
      id: 2,
      name: "Bolalar uchun",
      viloyat: "Toshkent",
      tuman: "Boka",
      buyurtma: false,
      img: [
        "./img/katalog/2.png",
        "./img/katalog/1.png",
        "./img/katalog/3.png",
      ],
      sort: "Bolalar",
      imgbtnCount: 0,
      colorCount: 0,
      color: ["green", "grey", "orange", "red"],
      like: false,
      count: 1,
      razmer: { buyi: "2-metr", eni: "1-metr", qalinligi: "1.5-sm" },
      narx: 123000,
      skitka: 10,
      holati: false,
    },
    {
      id: 3,
      name: "Yotoqxona uchun",
      viloyat: "Namangan",
      tuman: "Toroqorgon",
      buyurtma: false,
      img: [
        "./img/katalog/3.png",
        "./img/katalog/2.png",
        "./img/katalog/3.png",
      ],
      sort: "Devan",
      imgbtnCount: 0,
      colorCount: 0,
      color: ["green", "grey", "orange"],
      like: false,
      count: 1,
      razmer: { buyi: "2-metr", eni: "1-metr", qalinligi: "1.5-sm" },
      narx: 123000,
      skitka: 0,
      holati: true,
    },
    {
      id: 4,
      name: "kuxna uchun",
      viloyat: "Namangan",
      tuman: "Pop",
      buyurtma: false,
      img: [
        "./img/katalog/4.png",
        "./img/katalog/2.png",
        "./img/katalog/3.png",
      ],
      sort: "kuxni",
      imgbtnCount: 0,
      colorCount: 0,
      color: ["green", "grey", "orange"],
      like: false,
      count: 1,
      razmer: { buyi: "2-metr", eni: "1-metr", qalinligi: "1.5-sm" },
      narx: 123000,
      skitka: 10,
      holati: false,
    },
    {
      id: 5,
      name: "kuxna uchun",
      viloyat: "Namangan",
      tuman: "Mingbuloq",
      buyurtma: false,
      img: [
        "./img/katalog/5.png",
        "./img/katalog/2.png",
        "./img/katalog/3.png",
      ],
      sort: "Mexmonxona",
      imgbtnCount: 0,
      colorCount: 0,
      color: ["green", "grey", "orange", "red"],
      like: false,
      count: 1,
      razmer: { buyi: "2-metr", eni: "1-metr", qalinligi: "1.5-sm" },
      narx: 123000,
      skitka: 50,
      holati: false,
    },
    {
      id: 6,
      name: "kuxna uchun",
      viloyat: "Toshkent",
      tuman: "Toshkent",
      buyurtma: false,
      img: [
        "./img/katalog/5.png",
        "./img/katalog/2.png",
        "./img/katalog/3.png",
      ],
      sort: "kuxni",
      imgbtnCount: 0,
      colorCount: 0,
      color: ["green", "grey", "orange", "red"],
      like: false,
      count: 1,
      razmer: { buyi: "2-metr", eni: "1-metr", qalinligi: "1.5-sm" },
      narx: 13000,
      skitka: 20,
      holati: false,
    },
    {
      id: 7,
      name: "kuxna uchun",
      viloyat: "Namangan",
      tuman: "Mingbuloq",
      buyurtma: false,
      img: [
        "./img/katalog/5.png",
        "./img/katalog/2.png",
        "./img/katalog/3.png",
      ],
      sort: "Mexmonxona",
      imgbtnCount: 0,
      colorCount: 0,
      color: ["green", "grey", "orange", "red"],
      like: false,
      count: 1,
      razmer: { buyi: "2-metr", eni: "1-metr", qalinligi: "1.5-sm" },
      narx: 123000,
      skitka: 50,
      holati: false,
    },
    {
      id: 8,
      name: "kuxna uchun",
      viloyat: "Namangan",
      tuman: "Namangan",
      buyurtma: false,
      img: [
        "./img/katalog/5.png",
        "./img/katalog/2.png",
        "./img/katalog/3.png",
      ],
      sort: "kuxni",
      imgbtnCount: 0,
      colorCount: 0,
      color: ["green", "grey", "orange", "red"],
      like: false,
      count: 1,
      razmer: { buyi: "2-metr", eni: "1-metr", qalinligi: "1.5-sm" },
      narx: 123000,
      skitka: 50,
      holati: false,
    },
    {
      id: 9,
      name: "kuxna uchun",
      viloyat: "Namangan",
      tuman: "Mingbuloq",
      buyurtma: false,
      img: [
        "./img/katalog/5.png",
        "./img/katalog/2.png",
        "./img/katalog/3.png",
      ],
      sort: "kuxni",
      imgbtnCount: 0,
      colorCount: 0,
      color: ["green", "grey", "orange", "red"],
      like: false,
      count: 1,
      razmer: { buyi: "2-metr", eni: "1-metr", qalinligi: "1.5-sm" },
      narx: 123000,
      skitka: 50,
      holati: false,
    },
    {
      id: 10,
      name: "kuxna uchun",
      viloyat: "Toshkent",
      tuman: "Mirzo Ulugbek",
      buyurtma: false,
      img: [
        "./img/katalog/5.png",
        "./img/katalog/2.png",
        "./img/katalog/3.png",
      ],
      sort: "kuxni",
      imgbtnCount: 0,
      colorCount: 0,
      color: ["green", "grey", "orange", "red"],
      like: false,
      count: 1,
      razmer: { buyi: "2-metr", eni: "1-metr", qalinligi: "1.5-sm" },
      narx: 123000,
      skitka: 50,
      holati: false,
    },
    {
      id: 11,
      name: "kuxna uchun",
      viloyat: "Toshkent",
      tuman: "Mirzo Ulugbek",
      buyurtma: false,
      img: [
        "./img/katalog/5.png",
        "./img/katalog/2.png",
        "./img/katalog/3.png",
      ],
      sort: "kuxni",
      imgbtnCount: 0,
      colorCount: 0,
      color: ["green", "grey", "orange", "red"],
      like: false,
      count: 1,
      razmer: { buyi: "2-metr", eni: "1-metr", qalinligi: "1.5-sm" },
      narx: 123000,
      skitka: 50,
      holati: false,
    },
    {
      id: 12,
      name: "Shkaf uchun",
      viloyat: "Namangan",
      tuman: "Mingbuloq",
      buyurtma: false,
      img: [
        "./img/katalog/5.png",
        "./img/katalog/2.png",
        "./img/katalog/3.png",
      ],
      sort: "Shkaf",
      imgbtnCount: 0,
      colorCount: 0,
      color: ["green", "grey", "orange", "red"],
      like: false,
      count: 1,
      razmer: { buyi: "2-metr", eni: "1-metr", qalinligi: "1.5-sm" },
      narx: 123000,
      skitka: 50,
      holati: false,
    },
    {
      id: 13,
      name: "Shkaf uchun",
      viloyat: "Toshkent",
      tuman: "Mirzo Ulugbek",
      buyurtma: false,
      img: [
        "./img/katalog/5.png",
        "./img/katalog/2.png",
        "./img/katalog/3.png",
      ],
      sort: "Shkaf",
      imgbtnCount: 0,
      colorCount: 0,
      color: ["green", "grey", "orange", "red"],
      like: false,
      count: 1,
      razmer: { buyi: "2-metr", eni: "1-metr", qalinligi: "1.5-sm" },
      narx: 123000,
      skitka: 50,
      holati: false,
    },
  ],
  data: [],
  qilinganIshalr: [
    {
      id: 1,
      class: " a",
      name: "Kuxni",
      img: "./img/ishlar/image 7.png",
      img2: "./img/ishlar/image 8.png",
      img3: "./img/ishlar/image 7.png",
    },
    {
      id: 2,
      class: " b",
      name: "Mexmonxona",
      img: "./img/ishlar/image 7 (1).png",
      img2: "./img/ishlar/image 9.png",
      img3: "./img/ishlar/image 7.png",
    },
    {
      id: 3,
      class: " c",
      name: "Kuxni AAA",
      img: "./img/ishlar/image 9.png",
      img2: "./img/ishlar/image 8.png",
      img3: "./img/ishlar/image 7.png",
    },
    {
      id: 4,
      class: " d",
      name: "Kuxni BBB",
      img: "./img/ishlar/image 8.png",
      img2: "./img/ishlar/image 8.png",
      img3: "./img/ishlar/image 7.png",
    },
  ],
  kategoryabtns: [
    "All",
    "Kuxni",
    "Mexmonxona",
    "Devan",
    "Shkaf",
    "Bolalar",
    "Romlar",
    "Activlar",
    "Skitkalar",
  ],
  qilinganishlarImgs: [
    {
      id: 1,
      categorya: "kuxni",
      img: [
        "./img/ishlar/image 7.png",
        "./img/ishlar/image 7.png",
        "./img/ishlar/image 7.png",
      ],
    },
    {
      id: 2,
      categorya: "Mexmonxona",
      img: [
        "./img/ishlar/image 7 (1).png",
        "./img/ishlar/image 7 (1).png",
        "./img/ishlar/image 7 (1).png",
      ],
    },
    {
      id: 3,
      categorya: "aaa",
      img: [
        "./img/ishlar/image 9.png",
        "./img/ishlar/image 9.png",
        "./img/ishlar/image 9.png",
      ],
    },
    {
      id: 4,
      categorya: "bbb",
      img: [
        "./img/ishlar/image 8.png",
        "./img/ishlar/image 8.png",
        "./img/ishlar/image 8.png",
      ],
    },
  ],
  brend: [
    { id: 1, img: "./img/brend/images (1).jfif", name: "brend" },
    { id: 2, img: "./img/brend/images (2).jfif", name: "brend" },
    { id: 3, img: "./img/brend/images (1).png", name: "brend" },
    { id: 4, img: "./img/brend/images (2).png", name: "brend" },
    { id: 5, img: "./img/brend/images (1).jfif", name: "brend" },
    { id: 3, img: "./img/brend/images (1).png", name: "brend" },
    { id: 4, img: "./img/brend/images (2).png", name: "brend" },
    { id: 8, img: "./img/brend/images (1).jfif", name: "brend" },
  ],
};

export const HomeReducer = createSlice({
  name: "home",
  initialState,
  reducers: {
    imgbtnCount: (state, action) => {
      state.data = state.data.map((val) =>
        val.id === action.payload[0].id
          ? { ...action.payload[0], imgbtnCount: action.payload[1] }
          : val
      );
    },
    colorCounts: (state, action) => {
      state.data = state.data.map((val) =>
        val.id === action.payload[0].id
          ? { ...action.payload[0], colorCount: action.payload[1] }
          : val
      );
    },

    buyurtmafun: (state, action) => {
      if (action.payload.buyurtma === false) {
        state.data = state.data.map((val) =>
          val.id === action.payload.id
            ? { ...action.payload, buyurtma: true }
            : val
        );
      } else {
        state.data = state.data.map((val) =>
          val.id === action.payload.id
            ? { ...action.payload, buyurtma: false }
            : val
        );
      }
      let savathisob = state.data.filter((val) => val.buyurtma === true);
      state.karzinka = savathisob.length;
    },
    likefun: (state, action) => {
      if (action.payload.like === false) {
        state.data = state.data.map((val) =>
          val.id === action.payload.id ? { ...action.payload, like: true } : val
        );
      } else {
        state.data = state.data.map((val) =>
          val.id === action.payload.id
            ? { ...action.payload, like: false }
            : val
        );
      }
      let likehisob = state.data.filter((val) => val.like === true);
      state.likecount = likehisob.length;
    },
    savatCount: (state, action) => {
        state.data = state.data.map((val) =>
          val.id === action.payload.id ? { ...action.payload, count: action.payload.count +1 } : val
        );
    },
    savatCountdecr: (state, action) => {
        state.data = state.data.map((val) =>
          val.id === action.payload.id ? { ...action.payload, count: (action.payload.count >1? action.payload.count -1:1) } : val
        );
    },
    SearchFilter: (state, action) => {
        state.data = action.payload 
    },
   
  },
});

// Action creators are generated for each case reducer function
export const {
  imgbtnCount,
  colorCounts,
  buyurtmafun,
  likefun,
  kategoryabtns,
  SearchFilter,
  savatCount,
  savatCountdecr
} = HomeReducer.actions;

export default HomeReducer.reducer;
