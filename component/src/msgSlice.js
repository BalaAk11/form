import {createSlice} from '@reduxjs/toolkit';

export const msgSlice = createSlice({
    name:"message",
    initialState:{
        msg:""
    },
    reducers:{
        ak:state=>{
            state.msg="Bala"
        }
    }
})
export const {ak} = msgSlice.actions;
export default msgSlice.reducer