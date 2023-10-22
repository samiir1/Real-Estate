import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/user.route.js'
import dotenv from 'dotenv'
import { error } from 'console'
dotenv.config()
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("DB Connected")
}).catch(()=>{
    console.log(error)
})

const app = express();

app.listen(3000, ()=>{
    console.log('Server Running Port 3000')
})


app.use('/api/user', userRouter)



export default app;