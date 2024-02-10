import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
    tittle: {
        type: String,
        require: true
    },
    listQuestions: {
        type: Array,
        default: [],
        optional: true
    },
    typeCategory: {
        type: String,
        require: true,
        unique: true
    },
    leftColor: {
        type: String,
        require: true
    },
    rightColor: {
        type: String,
        require: true
    }
})

export default mongoose.model("CardsCategory", CardSchema)