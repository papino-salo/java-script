import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShow: false
}

export const isShowBthHeaderSlice = createSlice({
    name: "isShowBthHeader",
    initialState,
    reducers: {
        switchShowHomeBtn: (state, action) => {
            state.isShow = action.payload
        }
    }
})

export const { switchShowHomeBtn } = isShowBthHeaderSlice.actions

export default isShowBthHeaderSlice.reducer