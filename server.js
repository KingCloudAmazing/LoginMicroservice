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

//to create a container from the userauth:1.0 image run-> docker run --env-file .env -p 5000:5000 --network mongo-network userauth:1.0

