import courseM from "@/lib/courseModel";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req : NextApiRequest, res :  NextApiResponse) =>{
    if(req.method == "POST"){
        const courseObj: {title: string , price: string , description: string, imageLink : string} = req.body;
        if(courseObj.title && courseObj.description && courseObj.price && courseObj.imageLink){
            let courseOb = new courseM({ title: courseObj.title, description : courseObj.description , 
            price : courseObj.price , published : true , imageLink : courseObj.imageLink});
            let savedObject =  await courseOb.save();
            return res.status(200).send({message : 'Added Coourse!' , courseId: savedObject._id});
        }
    }

    return res.status(404).send(null);
}

export default handler;