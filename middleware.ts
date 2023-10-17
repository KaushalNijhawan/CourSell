import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (req: NextRequest)=> {
    console.log(req.url);
    console.log(req.method);
    return NextResponse.next();
}

export const config = {
    matcher: ['/api/users/:path*', '/api/admin/:path*']
};