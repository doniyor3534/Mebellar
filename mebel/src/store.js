import { configureStore } from '@reduxjs/toolkit'
import HomeReducer from './redux/HomeReducer'



export const store = configureStore({
    reducer: {
        home: HomeReducer,
      },
})