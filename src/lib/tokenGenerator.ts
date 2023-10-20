// import jose from 'jose';

import { SignJWT, jwtVerify } from "jose";

export const secret = new TextEncoder().encode(
    'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
)
const alg = 'HS256'



export const tokenGenerator = async (username: string) => {
    const jwt = await new SignJWT({ 'urn:example:claim': true })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setIssuer('urn:example:issuer')
        .setAudience('urn:example:audience')
        .setExpirationTime('2h').setSubject(username)
        .sign(secret);;
    return jwt;
}

export const tokenVerify = async (jwt: string | undefined) => {
    if (jwt) {
        try {
            const { payload, protectedHeader } = await jwtVerify(jwt, secret, {
                issuer: 'urn:example:issuer',
                audience: 'urn:example:audience',
            });
            console.log(payload.sub);
            return true;
        } catch (err) {
            console.log(err);
        }

    }



    return false;
}