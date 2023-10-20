import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

const handler =(req : NextApiRequest, res : NextApiResponse)=>{
    if(req.method =='GET'){
        const cookieS = serialize('auth' , '', {
            httpOnly: true,
            maxAge:3600,
            sameSite:'strict',
            path:'/'
        });

        res.setHeader('Set-Cookie' , cookieS);

        return res.status(200).send({ message : 'Logout!'});
    }

    return res.status(404).send(null);
}

export default handler;