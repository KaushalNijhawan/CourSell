import { NextApiRequest, NextApiResponse } from "next";
import { userM } from "@/lib/mongooseFile";
type User = {
    username: string;
    password: string;
}

type ReturnOject = {
    _id: string;
    message: string;
}
const register = async (req: NextApiRequest,
    res: NextApiResponse<ReturnOject | null>) => {
    if (req.method == "POST") {
        const userObject: User = req.body;
        if (userObject && userObject.username && userObject.password) {
            let userSaved = new userM({ username: userObject.username, password: userObject.password });
            let savedObject = await userSaved.save();

            return res.status(200).send({ _id: savedObject._id.toString(), message: 'Saved Object' });
        }

        return res.status(401).send(null);
    }
}
export default register;