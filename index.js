const express = require('express');
const {connection} = require('./db');
const {userRouter}=require('./routes/userRouter');
const {productRouter}=require('./routes/productRouter');
const cors = require("cors");

const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.use('/api',userRouter);
app.use('/api',productRouter);


app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log(`Server is running at http://localhost:${process.env.PORT}`);
        console.log('connected to database')
    } catch (err) {
        console.log(err)
    }

})