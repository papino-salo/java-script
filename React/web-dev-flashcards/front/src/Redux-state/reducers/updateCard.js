import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import { fetchCategories } from "./showCards";
import { fetchAnswers } from "./showCards";

export const fetchAnswersUpdate = createAsyncThunk("Answer/fetchAnswersUpdate", async (params) => {
    try {
        let type = {
            type: params.showTypeAddCart
        }
        const { data } = await axios.patch(`Answer`, params.data)
        params.dispatch(fetchAnswers({type: {type: params.showTypeAddCart}}))
        let dataAnswer = data
        return dataAnswer
    } catch (error) {
        console.log(error)
    }
})

export const fetchCategoryUpdate = createAsyncThunk("categories/fetchCategoriesUpdate", async (params) => {
    console.log(params.data)
    const { data } = await axios.patch("/category", params.data)
    params.dispatch(fetchCategories())
    let dataCategory = data
    return dataCategory
})

const initialState = {
    dataCategory: {
        tittleCateg: "",
        typeCategory: "",
        leftColor: "",
        rightColor: ""
    },
    dataAnswer: {
        id: "",
        tittleAnswer: "",
        shortAnswer: "",
        link: "",
        leftColorAnswer: "",
        rightColorAnswer: ""
    },
    status: "disabled",
    isShowModalUpdate: false,
    statusModalUpdate: false,
    statusCategory: "loading",
    statusAnswer: "loading"
}

export const updateCardSlice = createSlice({
    name: "updateCard",
    initialState,
    reducers: {
        setDataCategoryForUpdate: (state, action) => {
            let data = action.payload
            state.dataCategory.tittleCateg = data.TittleText
            state.dataCategory.typeCategory = data.Type
            state.dataCategory.leftColor = data.leftColor
            state.dataCategory.rightColor = data.rightColor
        },
        setLeftColorCategForUpdate: (state, action) => {
            state.dataCategory.leftColor = action.payload
        },
        setRightColorCategForUpdate: (state, action) => {
            state.dataCategory.rightColor = action.payload
        },
        setDataAnswerForApdate: (state, action) => {
            let data = action.payload
            state.dataAnswer.id = data.idProp
            state.dataAnswer.tittleAnswer = data.TittleText
            state.dataAnswer.shortAnswer = data.CartText
            state.dataAnswer.link = data.srcLink
            state.dataAnswer.leftColorAnswer = data.leftColor
            state.dataAnswer.rightColorAnswer = data.rightColor
        },
        setLeftColorAnswerForUpdate: (state, action) => {
            state.dataAnswer.leftColorAnswer = action.payload
        },
        setRightColorAnswerForUpdate: (state, action) => {
            state.dataAnswer.rightColorAnswer = action.payload
        },
        switchStatusUpdate: (state, action) => {
            state.status = action.payload
        },
        setIdUpdateCard: (state, action) => {
            state.id = action.payload
        },
        switchShowModalUpdate: (state, action) => {
            state.isShowModalUpdate = action.payload
        },
        switchStatusModalUpdate: (state, action) => {
            state.statusModalUpdate = action.payload
        }
    },
    extraReducers: builder => {
        // Update Answers
        builder.addCase(fetchAnswersUpdate.pending, (state) => {
            state.statusAnswer = "loading";
        })
        builder.addCase(fetchAnswersUpdate.fulfilled, (state, action) => {
            state.statusAnswer = "loaded";
        })
        builder.addCase(fetchAnswersUpdate.rejected, (state) => {
            state.statusAnswer = "error";
        })
        // Update Category
        builder.addCase(fetchCategoryUpdate.pending, (state) => {
            state.statusCategory = "loading";
        })
        builder.addCase(fetchCategoryUpdate.fulfilled, (state, action) => {
            state.statusCategory = "loaded";
        })
        builder.addCase(fetchCategoryUpdate.rejected, (state) => {
            state.statusCategory = "error";
        })
    }
})

export const {
    switchStatusUpdate,
    setIdUpdateCard,
    switchShowModalUpdate,
    switchStatusModalUpdate,
    setDataCategoryForUpdate,
    setDataAnswerForApdate,
    setLeftColorCategForUpdate,
    setRightColorCategForUpdate,
    setLeftColorAnswerForUpdate,
    setRightColorAnswerForUpdate
} = updateCardSlice.actions

export default updateCardSlice.reducer