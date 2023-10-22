import Appbar from "@/components/Appbar";
import { Button, Card, TextField, Typography } from "@mui/material";
import {useState} from 'react';
const AddCourses = () => {
    
    const [title , setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div>
            <Appbar />
            <div style={{ height: '90vh', width: '90vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 300, width: 400 }}>
                    <Typography variant="h6">
                        CourSell Login!
                    </Typography>
                    <TextField id="outlined-basic" label="Title" variant="outlined" style={{ width: 250 }} onChange={(e) => setTitle(e.target.value)} />
                    <TextField id="outlined-basic" label="Description" variant="outlined" style={{ width: 250, marginTop: 10 }}
                        type="text" onChange={(e)=>setDescription(e.target.value)}/>
                    <TextField id="outlined-basic" label="Price" variant="outlined" style={{ width: 250, marginTop: 10}} onChange = {(e)=> setPrice(e.target.value)} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                        <Button variant='outlined' style={{ marginLeft: 10 }} color='success'>Add Course</Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default AddCourses;