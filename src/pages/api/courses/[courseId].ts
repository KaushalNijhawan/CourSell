import { NextApiRequest, NextApiResponse } from "next";

const handler = (req : NextApiRequest, res: NextApiResponse) =>{
    if(req.method == 'GET'){
        console.log(req.query);

        return res.json({message :' ho gaya !'});
    }else if(req.method == 'DELETE'){

    }else if(req.method == 'PUT'){

    }
   
    return res.status(404).send(null);
}

export default handler;