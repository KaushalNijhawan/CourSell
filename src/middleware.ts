import { NextRequest, NextResponse } from 'next/server';
import { userM } from './lib/mongooseFile';

export const middleware = async (req: NextRequest) =>{
    console.log(req);
    if(req.url.includes('/api/register')){
        // const userBody: {username : string , password : string} = req.body;
        
        // if(userBody && userBody.username && userBody.password){

        // }
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/api/login', '/api/register']
}