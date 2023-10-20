import { NextApiRequest, NextApiResponse } from "next";
import userM from "@/lib/mongooseFile";
import initiateConnection from "@/lib/initiateConnection";
import { tokenGenerator } from "@/lib/tokenGenerator";
import cookie from 'cookie';
interface User {
    username: string;
    password: string;
}

type ReturnObject = {
    message: string;
    id: string
}

const handler = async (req: NextApiRequest,
    res: NextApiResponse<ReturnObject | null>) => {
    if (req.method == "POST") {

        const userObject: User = req.body;
        console.log(req.body);
        if (userObject && userObject.username && userObject.password) {
            await initiateConnection();
            const userFound = await userM.findOne({ username: userObject.username });
            if (userFound && userFound.password == userObject.password && userFound._id) {
                let token = await tokenGenerator(userFound.username);
                res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
                    httpOnly: true,
                    maxAge: 3600,
                    path: '/',
                    sameSite: 'strict'
                }));
                return res.status(200).send({ message: 'Loged In', id: userFound?._id.toString() });
            }
        }
        return res.status(401).send(null);
    }


}

export default handler;