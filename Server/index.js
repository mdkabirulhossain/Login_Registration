import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import mongoose from 'mongoose';

const app = express();

//Middleware
app.use(express.json())
app.use(cors());


const PORT = process.env.PORT || 5000 ;

// console.log("HI", PORT);
//Database Connection
URL=process.env.Database_Url

mongoose.connect(URL).then(()=>{
    console.log('Connected to mongoDB');
}).catch((error)=>{
    console.log(error);
})

app.get('/', (req, res) =>{
    res.send("Hello");
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
