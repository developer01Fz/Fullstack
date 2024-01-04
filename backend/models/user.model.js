import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: 
    { 
        type: String,
        required: true 
    },
    complete:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps});

export const UserData = mongoose.model('UserData',userSchema);