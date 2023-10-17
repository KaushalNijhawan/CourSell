import { NextApiRequest, NextApiResponse } from "next";
import userM  from "@/lib/mongooseFile";
import initiateConnection from "@/lib/initiateConnection";
type User = {
    username: string;
    password: string;
}

type ReturnOject = {
    _id: string;
    message: string;
}



const register = async (req: NextApiRequest,
    res: NextApiResponse<ReturnOject | null>) => {
    if (req.method == "POST") {
        const userObject: User = req.body;
        
        if (userObject && userObject.username && userObject.password) {
            try{
                await initiateConnection();
                let checkUser = await checkUserPresent(userObject.username);
                if(checkUser){
                   return res.status(400).json(null);
                }
                let userSaved = new userM({ username: userObject.username, password: userObject.password });
                let savedObject = await userSaved.save();
                console.log(savedObject);
                return res.status(200).send({ _id: savedObject._id.toString(), message: 'Saved Object' });
            }catch(err){
                console.log(err);
            }
           


        }

        return res.status(401).send(null);
    }
}

const checkUserPresent =  async (username : string): Promise<boolean> =>{
    if(username ){
        try{
            let userPresent = await userM.findOne({username : username});
            if(userPresent && userPresent.username ){
                return true;
            }
        }catch(err){
            console.log(err);
        }
        
    }

    return false;
}

export default register;