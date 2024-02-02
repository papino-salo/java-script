import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import { CardAnswerValidation, CardCategoryValidation } from "./validation.js";
import * as Middleware from "./middleware.js";
import * as AnswerController from "./controllers/AnswerController.js"
import * as CategoryController from "./controllers/CategoryController.js"

mongoose.connect(
    "mongodb+srv://papino_salo:wwwwww@cluster0.8hzakoo.mongodb.net/cards?retryWrites=true&w=majority"
).then(() => {
    console.log("Db ok")
}
).catch((er) => console.log(er))

const app = express();

app.use(express.json())
app.use(cors())

app.post("/Answer/:type", AnswerController.add);
app.get("/Answer/:type", Middleware.getAllCardsAnswerInCategory, AnswerController.get)
app.patch("/Answer", AnswerController.update)
app.delete("/Answer/:type", AnswerController.remove)

app.post("/Category", Middleware.addListQuestionsToCategory, CategoryController.add);
app.get("/Category", Middleware.getAllTittlesAnswerInCategory, CategoryController.get)
app.patch("/Category", CategoryController.update)
app.delete("/Category", CategoryController.remove)

app.listen(444, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log("Server started")
})