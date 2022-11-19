import express,{Response,Request} from "express";
import { success,error } from "../../../network/response";
import controller from "./index";

const router = express.Router()

router.get('/',(req:Request,res:Response)=>{
    controller.list()
        .then((response)=>{
            success(req,res,response,200)
        })
        .catch((error)=>{
            error(req,res,error.message,401)
        })
})

router.get('/:id',(req:Request,res:Response)=>{
    controller.get(req.body.id)
        .then((response)=>{
            success(req,res,response,200)
        })
        .catch((error)=>{
            error(req,res,error.message,401)
        })
})
router.post('/:id',(req:Request,res:Response)=>{
    controller.upsert(req.body.id)
        .then((response)=>{
            success(req,res,response,200)
        })
        .catch((error)=>{
            error(req,res,error.message,401)
        })
})
router.put('/:id',(req:Request,res:Response)=>{
    controller.upsert(req.body.id)
        .then((response)=>{
            success(req,res,response,200)
        })
        .catch((error)=>{
            error(req,res,error.message,401)
        })
})


export default router