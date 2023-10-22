import { Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from 'axios';
import { NextPageContext } from "next";
import { useRecoilState } from "recoil";
import { userDetails } from "@/atoms/UserAtom";
import { useState } from 'react';
type customUserDetail = {
    username: string
}
const Appbar = () => {
    const router = useRouter();
    const [userDetail, setUserDetails] = useRecoilState<customUserDetail>(userDetails);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!userDetail.username) {
            setLoading(true);
            axios.get('http://localhost:3000/api/verifyCookie').then((res) => {
                setUserDetails({ username: res.data.username });
                setLoading(false);
            }).catch((err) => {
                setLoading(false);
                setUserDetails({ username: '' });
                router.push('/');
                console.log(err);
            })
        }

    }, []);

    const handleLogout = async () => {
        try {
            const res = await axios.get('http://localhost:3000/api/logout');
            if (res && res.data) {
                setUserDetails({ username: '' });
                router.push('/');
            }
        } catch (err) {
            console.log(err);
        }

    }

    if (loading) {
        return <div><Typography variant="h6">Loading.....</Typography></div>
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
            <Typography variant="h6">CourSell</Typography>
            {userDetail && userDetail?.username ?
                router.pathname == '/' ?
                    <div style={{ display: 'flex' }}>
                        <Typography variant="h6">
                            Hello , {userDetail.username}
                        </Typography>
                        <Button variant="contained" style={{ marginLeft: '5px' }} onClick={handleLogout}>Logout</Button>

                    </div>
                    : <div style={{ display: 'flex' }}>
                        <Button variant="outlined" style={{ marginLeft: '5px' }} onClick={handleLogout}>Add Courses</Button>
                        <Button variant="outlined" style={{ marginLeft: '5px' }} onClick={handleLogout}>Courses</Button>
                        <Button variant="outlined" style={{ marginLeft: '5px' }} onClick={handleLogout}>Logout</Button>

                    </div> :
                <div>
                    <Button variant={'contained'} onClick={() => router.push('/login')}>
                        Login
                    </Button>
                    <Button variant={'contained'} style={{ marginLeft: '10px' }} onClick={() => router.push('/signup')}>
                        Register
                    </Button>
                </div>}

        </div>
    );
}

export default Appbar;