import Appbar from "@/components/Appbar";
import { Button, Card, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from 'react';
const Signup = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSignUp = async () =>{
        if(username && password){
            const userObject = {
                username : username,
                password: password
            };

            try{
                const res = await axios.post('http://localhost:3000/api/register', userObject, {headers:{
                    "Content-Type":'application/json'
                }});
                console.log(res.data);
            }catch(err){
                console.log(err);
            }
        }
    }
    return (
        <div>
            <div style={{ height: '90vh', width: '90vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 300, width: 400 }}>
                    <Typography variant="h6">
                        CourSell Register!
                    </Typography>
                    <TextField id="outlined-basic" label="username" variant="outlined" style={{ width: 250 }} onChange={(e) => setUsername(e.target.value)} />
                    <TextField id="outlined-basic" label="password" variant="outlined" style={{ width: 250, marginTop: 10 }} type="password" onChange={(e) => setPassword(e.target.value)} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                        <Button variant='outlined'>Register</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Signup;