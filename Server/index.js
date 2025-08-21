import express from 'express';
import cors from 'cors';
import 'dotenv/config'

const app = express();

app.use(cors());


const PORT = process.env.PORT || 5000 ;

// console.log("HI", PORT);

app.get('/', (req, res) =>{
    res.send("Hello");
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
