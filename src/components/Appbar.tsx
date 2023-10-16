import { Typography, Button } from "@mui/material";

const Appbar = () =>{
    return(
        <div style={{display:'flex' , justifyContent:'space-between', padding:'5px'}}>
            <Typography variant="h6">CourSell</Typography>
            <div>
                <Button variant={'contained'}>
                    Login
                </Button>
                <Button variant={'contained'} style={{marginLeft: '10px'}}>
                    Register
                </Button>
            </div>
        </div>
    );
}

export default Appbar;