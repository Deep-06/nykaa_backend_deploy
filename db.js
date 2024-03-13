const mongoose=require('mongoose');


//const mongoURI = process.env.mongoURL;

const connection=mongoose.connect(process.env.mongoURL).then(()=>{
    console.log('connected')
}).catch((err)=>{
console.log(err)
})

module.exports={
    connection
}
