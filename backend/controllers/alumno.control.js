import { modelo1 } from "../models/alumno.model.js";

modelo1.create({
    name:"Marquito"
})

export const test= ()=>{
    console.log("Si funciona el controlador")
}