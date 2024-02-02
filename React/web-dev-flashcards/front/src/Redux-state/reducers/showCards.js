import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchAnswers = createAsyncThunk("Answer/fetchAnswers", async (params) => {
    try {
        let {type} = params.type
        const { data } = await axios.get(`Answer/${type}`)
        let dataAnswer = data
        return dataAnswer
    } catch(error) {
        console.log(error)
    }
})

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
    try {
        const { data } = await axios.get("/category")
        let dataCategory = data
        return dataCategory
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    itemsCategory: [],
    itemsAnswer: [],
    statusCategory: "loading",
    statusAnswer: "loading",
    tittleCategoryInAnswers: ""
}

export const showCardsSlice = createSlice({
    name: "showCards",
    initialState,
    reducers: {
        setTittleCategory: (state, action) => {
            state.tittleCategoryInAnswers = action.payload
        },
        clearItemsAnswer: (state, action) => {
            state.itemsAnswer = []
        }
    },
    extraReducers: builder => {
        // Get Answers
        builder.addCase(fetchAnswers.pending, (state) => {
            state.statusAnswer = "loading";
        })
        builder.addCase(fetchAnswers.fulfilled, (state, action) => {
            state.itemsAnswer = action.payload
            state.statusAnswer = "loaded";
        })
        builder.addCase(fetchAnswers.rejected, (state) => {
            state.statusAnswer = "error";
        })
        // Get Category
        builder.addCase(fetchCategories.pending, (state) => {
            state.itemsCategory = []
            state.statusCategory = "loading";
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.itemsCategory = action.payload
            state.statusCategory = "loaded";
        })
        builder.addCase(fetchCategories.rejected, (state) => {
            state.itemsCategory = []
            state.statusCategory = "error";
        })
    }
})

export const { clearItemsAnswer, setTittleCategory } = showCardsSlice.actions

export default showCardsSlice.reducer