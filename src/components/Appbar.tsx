import { Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from 'axios';
import { NextPageContext } from "next";
const Appbar = (props : any) =>{
    const router = useRouter();

    useEffect(()=>{
        axios.get('http://localhost:3000/api/verifyToken').then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }, []);
    return(
        <div style={{display:'flex' , justifyContent:'space-between', padding:'5px'}}>
            <Typography variant="h6">CourSell</Typography>
            <div>
                <Button variant={'contained'} onClick={() => router.push('/login')}>
                    Login
                </Button>
                <Button variant={'contained'} style={{marginLeft: '10px'}} onClick={() => router.push('/signup')}>
                    Register
                </Button>
            </div>
        </div>
    );
}

export default Appbar;