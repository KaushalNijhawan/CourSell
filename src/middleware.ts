import { NextRequest, NextResponse } from 'next/server';
import userM  from './lib/mongooseFile';
import  initiateConnection from './lib/initiateConnection';

export const middleware = async (req: NextRequest) => {
    // if (req.url.includes('/api/register')) {
    //     await initiateConnection();
    //     let userBody = JSON.parse(await req.text());
    //     console.log(userBody.username);
    //     if (userBody && userBody.username && userBody.password) {
    //         try{
    //             let userObj = await userM.findOne({username : userBody.username, password: userBody.password});
    //             if (userObj && userObj.username && userObj.password) {
    //                 return NextResponse.json({ message: 'User Already Present' });
    //             }
    //         }catch(err){
    //             console.log(err);
    //         }
    //     }
    // }
    //  this is the way to extract the body from the request object.



    return NextResponse.next();
}

export const config = {
    matcher: ['/api/login', '/api/register']
}