import Appbar from "@/components/Appbar";
import { Button, Card, TextField, Typography } from "@mui/material";
import {useState} from 'react';
import axios from "axios";
import { useRouter } from "next/router";
const Login = () => {
    const router = useRouter();
    const [username, setUsername] = useState<String>('');
    const [password, setPassword] = useState<String>('');

    const handleLogin = async() =>{
        if(username && password){
            const userObject = {
                username : username,
                password: password
            };
            try{
                const response = await axios.post('http://localhost:3000/api/login', userObject, {
                    headers:{
                        "Content-Type" : 'application/json'
                    }
                });
                console.log(response.data);
                router.push('/courses');
            }catch(err){
                console.log(err);
            }
            
        }        
    }
    return (
        <div>
        <div style={{height:'90vh', width:'90vw', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 300, width: 400 }}>
                <Typography variant="h6">
                    CourSell Login!
                </Typography>
                <TextField id="outlined-basic" label="username" variant="outlined" style={{width:250}} onChange={(e) => setUsername(e.target.value)}/>
                <TextField id="outlined-basic" label="password" variant="outlined" style={{width:250, marginTop:10}} onChange={(e) => setPassword(e.target.value)}
                type="password"/>
                <div style={{ display: 'flex' , justifyContent:'space-between', marginTop:10}}>
                    <Button variant='outlined' onClick= {handleLogin}>Login</Button>
                    <Button variant='outlined' style={{marginLeft:10}}>Register</Button>
                </div>
            </Card>
        </div>
        </div>
    )
}

export default Login;