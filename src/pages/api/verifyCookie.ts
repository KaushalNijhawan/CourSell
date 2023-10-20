import { NextApiRequest, NextApiResponse } from "next";
import cookie from 'cookie';
import { cookies } from "next/headers";

const handler = async (req : NextApiRequest , res: NextApiResponse) =>{
    console.log(req.cookies);
    return res.status(200).json({message : 'validated!' });
}

export default handler;