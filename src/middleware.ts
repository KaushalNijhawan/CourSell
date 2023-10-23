import { NextRequest, NextResponse } from 'next/server';
import { tokenVerify } from './lib/tokenGenerator';
import cookie from 'cookie';
import { NextApiResponse } from 'next';
export const middleware = async (req: NextRequest, res: NextApiResponse) => {
    if(!req.url.includes('/api/login') && !req.url.includes('/api/register') && !req.url.includes('/api/logout')
){
        const token  = req.cookies.get('auth') &&  req.cookies.get('auth')?.value ? req.cookies.get('auth')?.value : "";
        let response = await tokenVerify(token);
        if(response){
            return NextResponse.next();
        }else{
            const cookieObj = cookie.serialize('auth' , '', {
                maxAge:3600,
                path:'/',
                httpOnly: true,
                sameSite : 'strict'
            });
            
            return NextResponse.json({message : 'Invalid User!'},{status: 401});
        }
    }




}

export const config = {
    matcher: ['/api/:path*']
}