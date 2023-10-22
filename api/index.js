import express from 'express'

const app = express();

app.listen(300, ()=>{
    console.log('Server Running Port 300')
})

export default app;