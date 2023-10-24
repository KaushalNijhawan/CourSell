import courseM from "@/lib/courseModel";
import initiateConnection from "@/lib/initiateConnection";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req : NextApiRequest, res: NextApiResponse) =>{
    if(req.method == 'GET'){
        await initiateConnection();
        let course = await courseM.findOne({ _id : req.query.courseId});
        console.log(course);
        return res.json({message :'found Couse!', course : course});
    }else if(req.method == 'DELETE'){

    }else if(req.method == 'PUT'){
        await initiateConnection();
        let course = req.body;
        await courseM.findByIdAndUpdate({_id : course._id} , course);
        return res.status(200).json({message : 'updated!' , _id : course._id});
    }
    return res.status(404).send(null);
}

export default handler;