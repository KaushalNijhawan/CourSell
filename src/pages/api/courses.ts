import courseM from "@/lib/courseModel";
import initiateConnection from "@/lib/initiateConnection";
import { NextApiRequest, NextApiResponse } from "next";
const handler = async (req: NextApiRequest, res: NextApiResponse)=>{
    if(req.method == 'GET'){
       await initiateConnection();
       const courses = await courseM.find();
       return res.status(200).send({courses:  courses});
    }

    return res.status(404).send({});
}

export default handler;