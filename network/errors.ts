import {NextFunction,Request,Response} from 'express'
import {error} from './response'
export const errors = (err:Error,req:Request,res:Response,next:NextFunction) => {
    console.log('[error]',err);

    const message = err.message
    const status = err.status

    error(req,res,message,status)

}
