const mongoose=require('mongoose');
require('dotenv').config();

const mongoURI = process.env.mongoURL;

const connection=mongoose.connect(mongoURI).then(()=>{
    console.log('connected')
}).catch((err)=>{
console.log(err)
})

module.exports={
    connection
}