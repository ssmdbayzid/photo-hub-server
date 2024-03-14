const express = require("express");
const app = express()
const port = 5000
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const bodyParser = require("body-parser");
const mediaRoute = require("./Router/mediaRoute");
const mongoose = require("mongoose")


const corsOptions = {
    // origin: "https://walmart-272ed.web.app",
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200

  };
// Middleware 

app.use(express.json())
app.use(bodyParser.json())

app.use(cors(corsOptions))

const connentDatabase = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb database connected")
    } catch (error) {
        console.log(error.message, "mongodb database is connection failed")        
    }
}

connentDatabase().catch(err=> console.log(err.message))


app.use("/api/v1/media", mediaRoute)

app.get("/", (req, res)=>{
    res.send("Media Server running ")
})




app.listen(port, ()=>{
    console.log(`server running with ${port}`)
})


// mongodb+srv://social-media:BhThTludOMazeYbt@cluster0.7r9dakl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0