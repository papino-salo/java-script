import express from "express";
import mongoose from "mongoose";
import UserModel from "./models/user.js";
import bcrypt from "bcrypt"

mongoose.connect(
    "mongodb+srv://papino_salo:wwwwww@cluster0.8hzakoo.mongodb.net/test?retryWrites=true&w=majority"
).then(() => {
    console.log("Db ok")}
).catch((er) => console.log(er))

const app = express();

app.use(express.json())

app.post("/test", async (req, res) => {

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const doc = new UserModel({
        email: req.body.email,
        name: req.body.name,
        passwordHash
    })

    const user = await doc.save()

    res.json(user)
});

app.get("/testget", async (req, res) => {
    try {
        const user = await UserModel.findOne({name: req.body.name});

        if (!user) {
            return res.status(404).json({
                massage: "пользователь не найден"
            })
        }

        const {passwordHash, ...userData} = user._doc

        res.json({
            ...userData
        })

    } catch (error) {
        
    }
})

app.listen(444, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log("Server started")
})