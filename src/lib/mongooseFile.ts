import mongoose from "mongoose";
// mongoose.createConnection("mongodb://127.0.0.1:27017/course").asPromise().then(()=> console.log('connect'));
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


const userM = mongoose.models.Users || mongoose.model('Users',userSchema) ;

//  a small fix where it will return the already compiled mongoose models to the endUser rather than recompiling them

// export const courseM = mongoose.models ? mongoose.models.courses : mongoose.model('courses', courseSchema);
export default userM;
