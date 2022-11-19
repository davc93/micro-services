import {Response,Request} from 'express'
export const success = (req:Request,res:Response,message:string,status:number) => {
    let statusCode = status || 200
    let statusMessage = message || ''
    
    res.status(statusCode).send({
        error:false,
        status:status,
        body:message
    })
}

export const error = (req:Request,res:Response,message:string,status:number) => {
    let statusCode = status || 500
    let statusMessage = message || 'Internal server error'

    res.status(statusCode).send({
        error:true,
        status:status,
        body:message

    })
    

}