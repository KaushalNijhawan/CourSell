import mongoose from "mongoose";
const initiateConnection =  () =>{
    try{
        mongoose.connect("mongodb://127.0.0.1:27017/course").then(()=>{
            console.log('connect')
        })
        console.log('connected!');
    }catch(err){
        console.log(err);
    }
    }


export default initiateConnection;
