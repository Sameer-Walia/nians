import { configureStore } from '@reduxjs/toolkit'
import authSlice from './reduxslices/authSlice'
const store = configureStore({
    reducer: {
        auth: authSlice
        // can store multiple reducers in this
    }
})

export default store
