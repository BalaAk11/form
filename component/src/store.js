import {configureStore} from '@reduxjs/toolkit';
import msgReducer from './msgSlice'

export default configureStore({
    reducer:{
        message:msgReducer
    }
})

