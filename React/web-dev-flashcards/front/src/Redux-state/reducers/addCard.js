import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import { fetchCategories, fetchAnswers } from "./showCards";

export const fetchAnswerAdd = createAsyncThunk(`Answer/fetchAnswerAdd`, async (params) => {
    try {
        const data = await axios.post(`Answer/${params.data.typeCategoryAnswer}`, params.data)
        params.dispatch(fetchAnswers({type: {type: params.data.typeCategoryAnswer}}))
        return data

    } catch (error) {
        console.log(error)
    }
})

export const fetchCategoryAdd = createAsyncThunk(`category/fetchCategoryAdd`, async (params) => {
    try {
        const data = await axios.post(`category`, params.data)
        params.dispatch(fetchCategories())
        return data
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    data: null,
    status: "loading",
    isShowModal: false,
    typeModal: "categories"
}

export const addCardSlice = createSlice({
    name: "addCard",
    initialState,
    reducers: {
        switchShowModalAdd: (state, action) => {
            state.isShowModal = action.payload
        },
        changeTypeModalAdd: (state, action) => {
            state.typeModal = action.payload
        },
        setLeftColor: (state, action) => {
            state.bgGradient.leftColor = action.payload
        },
        setRightColor: (state, action) => {
            state.bgGradient.rightColor = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchAnswerAdd.pending, (state) => {
            state.data = []
            state.status = "loading";
        })
        builder.addCase(fetchAnswerAdd.fulfilled, (state, actions) => {
            state.data = actions.payload
            state.status = "loaded";
        })
        builder.addCase(fetchAnswerAdd.rejected, (state) => {
            state.data = []
            state.status = "error";
        })
    },
    extraReducers: builder => {
        builder.addCase(fetchCategoryAdd.pending, (state) => {
            state.data = []
            state.status = "loading";
        })
        builder.addCase(fetchCategoryAdd.fulfilled, (state, actions) => {
            state.data = actions.payload
            state.status = "loaded";
        })
        builder.addCase(fetchCategoryAdd.rejected, (state) => {
            state.data = []
            state.status = "error";
        })
    }
})

export const { switchShowModalAdd, changeTypeModalAdd, } = addCardSlice.actions

export default addCardSlice.reducer