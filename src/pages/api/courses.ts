import courseM from "@/lib/courseModel";
import { NextApiRequest, NextApiResponse } from "next";
const handler = async (req: NextApiRequest, res: NextApiResponse)=>{
    if(req.method == 'GET'){
       return res.status(200).send({courses:  await courseM.find()});
    }

    return res.status(404).send({});
}

export default handler;