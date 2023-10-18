import jwt from "jsonwebtoken";

const SECRET_TEXT = "this is my text this is my text this is my text";

export const tokenGenerator = (username : string) =>{
    let token = jwt.sign({
        data: username
      }, SECRET_TEXT, { expiresIn: 60 * 60 });
    return token;     
}

export const tokenVerify = (token : string) =>{
    try{
        jwt.verify(token , SECRET_TEXT);
        return true;
    }catch(err){
        console.log(err);
    }

    return false;
}