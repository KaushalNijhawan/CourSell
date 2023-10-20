import { NextApiRequest, NextApiResponse } from "next";
import cookie from 'cookie';
import { cookies } from "next/headers";
import {jwtVerify} from 'jose';
import { secret } from "@/lib/tokenGenerator";

const handler = async (req : NextApiRequest , res: NextApiResponse) =>{
    const jwt = req.cookies?.auth;
    let payloadObject = null;
    if(jwt){
        const { payload, protectedHeader } = await jwtVerify(jwt, secret, {
            issuer: 'urn:example:issuer',
            audience: 'urn:example:audience',
        });

        payloadObject = payload;
    }
    
    return res.status(200).json({message : 'validated!', username : payloadObject?.sub });
}

export default handler;