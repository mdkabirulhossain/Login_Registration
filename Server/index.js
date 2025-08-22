import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.route.js'

const app = express();

//Middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(
{
  origin: process.env.FRONT_END_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ['Content-Type', 'Authorization']
}
))


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

//routes
app.use("/user", userRoutes)
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
