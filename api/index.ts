import express,{ Express,json,Router } from "express";
import user from "./components/user/network";

const app: Express = express()
const port = process.env.PORT ?? 3000

app.use(json())
app.use('/api/user',user)
app.listen(port,()=>{
    console.log(`Escuchando en el puerto ${port}`);
})