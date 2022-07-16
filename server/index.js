const express =require ("express");
const mongoose = require ("mongoose");

const app=express()


 const PORT=process.env.PORT || 8080

//   const mongoURI = 'mongodb://localhost:27017'
// const connection = ()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log("mongodb is connected")
//     })
// }



mongoose.connect('mongodb://localhost:27017//admin').then(data=>{
  console.log('database connection successful')
}).catch(err=>{
    "data connection error"
})

app.get('/',(req,res)=>{
  res.send('Hello everyone')
})
app.listen(PORT,()=>{
  console.log(`server running at port ${PORT}`)
})
