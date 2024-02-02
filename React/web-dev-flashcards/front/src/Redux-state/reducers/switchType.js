import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    type: "category"
}

export const switchTypeAnswerSlice = createSlice({
    name: "switchTypeAnswer",
    initialState,
    reducers: {
        setType: (state, action) => {
            state.type = action.payload
        }
    }
})

export const { setType } = switchTypeAnswerSlice.actions

export default switchTypeAnswerSlice.reducer