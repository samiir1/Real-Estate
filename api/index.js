import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { error } from 'console'
dotenv.config()
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("DB Connected")
}).catch(()=>{
    console.log(error)
})

const app = express();

app.listen(300, ()=>{
    console.log('Server Running Port 300')
})

export default app;