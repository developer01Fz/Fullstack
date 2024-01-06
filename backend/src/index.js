// require('dotenv').config({path:'./env'})
import  dotenv from "dotenv";
import connectDB from './db/index.js'
import {app} from './app.js'
const port = process.env.PORT
dotenv.config({
  path:'./env'
})


connectDB()
.then(()=>{
  app.listen(port || 8000, ()=>{
    console.log("port connect")
  })
})


//---------------start----------------------------------
// import  express from "express";
// import  mongoose from "mongoose";
// import{DB_NAME} from "./constants"
// import  dotenv from "dotenv";
// const app = express()
// const port = process.env.PORT
// dotenv.config()

// ;(async ()=>{
//   try{
//     await mongoose.connect( `${process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on("error",(error)=>{
//       console.log("ERROR: ", error)
//     })

//     app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


//   }catch(error){
//     console.error("ERROR: ",error)
//     throw err

//   }
// })()

// =-------------------------end-----------------------------------




// import  express from "express";
// import  dotenv from "dotenv";
// // const express = require('express')
// dotenv.config()
// const app = express()
// const port = process.env.PORT

// app.get('/api/loging', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })