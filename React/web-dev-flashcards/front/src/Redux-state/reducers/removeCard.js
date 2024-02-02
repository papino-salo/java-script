import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import { fetchAnswers, fetchCategories } from "./showCards";

export const fetchCategoryRemove = createAsyncThunk("category/fetchCategoryRemove", async (params) => {
    try {
        const status = await axios.delete(`/category`, { data: { type: params.typeCategory } })
        params.dispatch(fetchCategories())
        return status
    } catch (error) {
        console.log(error)
    }
})

export const fetchAnswersRemove = createAsyncThunk("Answer/fetchAnswersRemove", async (params) => {
    try {
        let dataId = params.id,
            type = params.showType
        
        const status = await axios.delete(`/Answer/${type}`, { data: { id: dataId } })
        params.dispatch(fetchAnswers({type: {type: type}}))
        return status
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    isShowModalRemove: false,
    statusModalRemove: false,
    id: "",
    status: "disabled",
    typeCategory: ""
}



export const removeCardSlice = createSlice({

    name: "removeCard",
    initialState,
    reducers: {
        switchStatusRemove: (state, action) => {
            state.status = action.payload
        },
        setIdRemoveCard: (state, action) => {
            state.id = action.payload
        },
        switchShowModalRemove: (state, action) => {
            state.isShowModalRemove = action.payload
        },
        switchStatusModalRemove: (state, action) => {
            state.statusModalRemove = action.payload
        },
        setTypeCategory: (state, action) => {
            state.typeCategory = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchAnswersRemove.pending, (state) => {
            state.status = "enabled"
        })
        builder.addCase(fetchAnswersRemove.fulfilled, (state, actions) => {
            state.status = "disabled"
        })
        builder.addCase(fetchAnswersRemove.rejected, (state) => {
            state.status = "disabled";
        })
        builder.addCase(fetchCategoryRemove.pending, (state) => {
            state.status = "enabled"
        })
        builder.addCase(fetchCategoryRemove.fulfilled, (state, actions) => {
            state.status = "disabled"
        })
        builder.addCase(fetchCategoryRemove.rejected, (state) => {
            state.status = "disabled";
        })
    }
})

export const { 
    switchStatusRemove, 
    setIdRemoveCard, 
    switchShowModalRemove, 
    switchStatusModalRemove, 
    setTypeCategory 
} = removeCardSlice.actions

export default removeCardSlice.reducer