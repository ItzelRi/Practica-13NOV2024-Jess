import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import {test} from "./backend/controllers/alumno.control.js";

dotenv.config()
mongoose.connect(process.env.urldb)
.then(()=>{
    console.log("Funciona la base de datos")
})
.catch((error)=>{
    console.log("No funciona tu base mi buen", error)
})

const app=express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("Se escucha el servidor")
})

test()