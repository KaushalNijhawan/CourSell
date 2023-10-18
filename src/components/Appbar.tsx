import { Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
const Appbar = () =>{
    const router = useRouter();
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