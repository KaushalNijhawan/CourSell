import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title : String, 
    description : String,
    price : String,
    published : Boolean
});

const courseM = mongoose.models.Courses || mongoose.model('Courses' , courseSchema);

export default courseM;