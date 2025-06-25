import { User } from "../models/User.js";
import { ParseBody} from "../utils/bodyParser.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserRegistrationHandler = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    try{
        const {username, password} = await ParseBody(req);
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({username, password: hashedPassword});
        await newUser.save(); //saving method from mongoose in MongoDB under usersInfo collection

        res.statusCode = 200;
        res.end(JSON.stringify({message: 'User details saved successfully!'}));

    }
    catch(err){
        res.statusCode = 400;
        res.end(JSON.stringify({message: 'Registration failed!', error: err.message, errorStackTrace: err.errorStackTrace}));
    }
}

const UserAccessHandler = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    try{
        const {username, password} = await ParseBody(req);
        const user = await User.findOne({username});
        if(!user) throw Error("Username not found!");

        const isPassword = await bcrypt.compare(password, user.password);
        if(!isPassword) throw Error("Invalid password!");

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1m'});

        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'User logged in succesffully.', token}));


    }catch (err){
        res.statusCode = 400;
        res.end(JSON.stringify({message: 'Access denied!', error: err.message, errorStackTrace: err.errorStackTrace}));


    }
}

const authRouter = (req, res) => {
    if(req.url === '/api/auth/signup' && req.method === 'POST'){
        UserRegistrationHandler(req, res);
    }
    else if(req.url === '/api/auth/login' && req.method === 'POST'){
        UserAccessHandler(req, res);
    }else{
        res.writeHead(400, {'Content-Type':'application/json'});
        res.end(JSON.stringify({message: 'Auth route not found!'}));
    }
};

export {authRouter};

