import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
    tittle: {
        type: String,
        require: true,
        unique: true
    },
    shortAnswer: {
        type: String,
        require: true,
        unique: true
    },
    linkSourceAnswer: {
        type: String,
        require: true
    },
    typeCategoryAnswer: {
        type: String,
        require: true
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

export default mongoose.model("CardsAnswer", CardSchema)