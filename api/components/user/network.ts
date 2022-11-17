import express, { Express,Router } from "express";

const router = express.Router()

router.get('/',(req,res)=>{

    res.send({
        "message":"esta es la ruta de usuarios"
    })
})


export default router