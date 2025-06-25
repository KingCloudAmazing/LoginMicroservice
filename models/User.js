import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {type: String, require:true, unique:true},
    password: {type: String, require: true}
}, {
    collection: 'usersInfo'
});

export const User = mongoose.model('User', userSchema); // without collection automatically creates one as users, can also put in as thrid argument for override