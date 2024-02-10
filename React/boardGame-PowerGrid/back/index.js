import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import { WebSocketServer } from "ws";

var wsServer = new WebSocketServer({
    port: 9999
}, () => {console.log("Server started")});

mongoose.connect(
    "mongodb+srv://papino_salo:wwwwww@cluster0.8hzakoo.mongodb.net/PowerGrid?retryWrites=true&w=majority"
).then(() => {
    console.log("Db ok")
}).catch((er) => console.log(er))
