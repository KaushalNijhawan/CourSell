import mongoose from "mongoose";
import { boolean } from "zod";

mongoose.connect("mongodb://127.0.0.1:27017/course").then(()=>{
    console.log('connected');
});

const userSchema = new mongoose.Schema({
    username : String,
    password: String
});

const courseSchema = new mongoose.Schema({
    title : String, 
    description : String,
    price : String,
    published : Boolean
});

export const userM = mongoose.models.users || mongoose.model('users' , userSchema);
//  a small fix where it will return the already compiled mongoose models to the endUser rather than recompiling them

export const courseM = mongoose.models.courses || mongoose.model('courses', courseSchema);