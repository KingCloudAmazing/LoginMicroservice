import http from 'http';
import dotenv from 'dotenv';
import {connectDB} from "./db/connect.js";
import { authRouter } from './routes/Auth.js';

dotenv.config();

const PORT = process.env.PORT;

const server = http.createServer((req, res)=>{
    if(req.url.match("/api/auth/[^\/]+")){
        authRouter(req, res);
    }
    else{
        res.writeHead(404, {'content-type':'application/json'});
        res.end(JSON.stringify({message: "Page not found"}));
    }
})

connectDB()
.then(()=>{
    server.listen(PORT, ()=>{
        console.log(`Server has started running at PORT:${PORT}`);
        });
    })
.catch((err)=>{
    console.error("Database connection failed: ", err);
})
