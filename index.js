const express = require('express');
const dotenv=require('dotenv')
const {connection} = require('./db');
const {userRouter}=require('./routes/userRouter');
const {productRouter}=require('./routes/productRouter');
const cors = require("cors");

const app = express();
dotenv.config({path: "./env"});
//middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}))

app.use('/api',userRouter);
app.use('/api',productRouter);

connection();
app.listen(process.env.PORT, () => {
    
        console.log(`Server is running at http://localhost:${process.env.PORT}`);

})
