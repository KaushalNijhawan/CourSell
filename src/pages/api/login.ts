import { NextApiRequest, NextApiResponse } from "next";
import userM from "@/lib/mongooseFile";
import initiateConnection from "@/lib/initiateConnection";
import { cookies } from 'next/headers';
import { tokenGenerator } from "@/lib/tokenGenerator";

interface User{
    username : string;
    password: string;
}

type ReturnObject = {
    message : string;
    id : string
}
const handler = async (req: NextApiRequest,
    res: NextApiResponse<ReturnObject | null>) => {
        if(req.method == "POST"){
            
            const userObject: User = req.body;
            console.log(req.body);
            if(userObject && userObject.username && userObject.password){
                await initiateConnection();
                const userFound = await userM.findOne({username :userObject.username});
                if(userFound && userFound.password ==  userObject.password && userFound._id){
                   let token = tokenGenerator(userFound.username);
                   cookies().set('token' , token,{expires : 60*60 , secure : true});
                   return  res.status(200).send({ message : 'Loged In', id : userFound?._id.toString()});
                }
            }
            return res.status(401).send(null);
        }


}
export default handler;