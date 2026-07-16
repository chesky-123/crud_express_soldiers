import { router } from "./routes/soldiersRouter.js";
import express from "express";

const PORT = process.env.PORT

const app = express();

app.use(express.json());

app.use("/soldiers",router);


app.listen(PORT,(e)=>{
    if (e) return console.log(e);
    
    console.log("server running in port",PORT,"...");
    
})



