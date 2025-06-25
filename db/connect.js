import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import path from 'path';
// import {fileURLToPath} from 'url';

//Lesson : .env files can be accessed from it's level files only (in this case root only)
//else have to specify it's configuration location
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const __rootenv = path.resolve(__dirname, '../.env');

// console.log(`__filename:${__filename}\n__dirname:${__dirname}\n__rootenv:${__rootenv}`);

// dotenv.config({path: __rootenv});
dotenv.config();

// console.log(process.env.PORT);

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected!');
    }catch(err){
        console.error("Failed to connect to MongoDB ATLAS!");
    }
    
}

