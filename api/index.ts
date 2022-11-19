import express from "express";
import user from "./components/user/network";

const app = express()
const port = process.env.PORT ?? 3000

app.use(express.json())
app.use('/api/users',user)
app.use('/api/auths',auth)
app.listen(port,()=>{
    console.log(`Escuchando en el puerto ${port}`);
})