const express=require('express')
const cors=require('cors')
const User = require('./db/User')
const Product=require('./db/Product')
require('./db/config')
const app=express()

//middleware
app.use(express.json())
app.use(cors());

app.get('/',(req,res)=>{
    res.send('App is working')
})

app.post('/register',async(req,res)=>{
    let Users=new User(req.body)
    let result=await Users.save();
    res.send(result)
   // res.send(req.body)
})

app.post('/product',async(req,res)=>{
    let Products=new Product(req.body)
    let productResult=await Products.save();
    res.send(productResult)
})

app.listen(8000,()=>{
    console.log('server is running')
})






// const express=require('express')
// const app=express()
// const mongoose=require('mongoose')

// const connectDB=async()=>{
//     mongoose.connect('mongodb://localhost:27017/wecreate')
//     const productSchema=new mongoose.Schema({});
//     const product=mongoose.model('users',productSchema);
//     const data=await product.find()
//     console.log(data)
// }
// connectDB();

// app.get('/',(req,res)=>{
//     res.send('App is working')
// })

// app.listen(8000,()=>{
//     console.log('server is running')
// })