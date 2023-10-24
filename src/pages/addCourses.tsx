import { courseAtom } from "@/atoms/CourseAtom";
import Appbar from "@/components/Appbar";
import { Button, Card, TextField, Typography } from "@mui/material";
import { useState, useRef } from 'react';
import { useSetRecoilState } from "recoil";
import axios from "axios";
type course = {
    title: string;
    description: string;
    price: string;
    imageLink: string;
    _id: string;
    published: boolean;
}
const AddCourses = (props: { courses: [] }) => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [imageLink, setImageLink] = useState('');
    const priceRef = useRef<any>('');
    const descRef = useRef<any>('');
    const imageRef = useRef<any>('');
    const titleRef = useRef<any>('');
    const [currentCourses, setCurrentCourses] = useState<course[]>(props.courses);
    const addCourse = useSetRecoilState(courseAtom);

    const handleAddCourses = async (e : any) => {
        e.preventDefault();
        if (title && price && description) {
            const courseObject = {
                title: title,
                price: price,
                description: description,
                imageLink: imageLink
            };

            try {
                const response = await axios.post('http://localhost:3000/api/addCourse', courseObject, {
                    headers: {
                        "Content-Type": 'application/json'
                    }
                });

                if(imageRef  && priceRef && titleRef && descRef){
                    imageRef.current = '';
                    titleRef.current = '';
                    priceRef.current = '';
                    descRef.current = '';

                }
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div>
            <Appbar />
            <div style={{ height: '90vh', width: '90vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 500, width: 450 }}>
                    <Typography variant="h6">
                        CourSell Login!
                    </Typography>
                    <TextField id="outlined-basic" label="Title" variant="outlined" style={{ width: 250 }} onChange={(e) => setTitle(e.target.value)} ref={titleRef} />
                    <TextField id="outlined-basic" label="Description" variant="outlined" style={{ width: 250, marginTop: 10 }}
                        type="text" onChange={(e) => setDescription(e.target.value)} ref={descRef} />
                    <TextField id="outlined-basic" label="Price" variant="outlined" style={{ width: 250, marginTop: 10 }} onChange={(e) => setPrice(e.target.value)}
                        ref={priceRef} />
                    <TextField id="outlined-basic" label="Image" variant="outlined" style={{ width: 250, marginTop: 10 }} onChange={(e) => setImageLink(e.target.value)} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }} ref={imageRef}>
                        <Button variant='outlined' style={{ marginLeft: 10 }} color='success' onClick={(e) => handleAddCourses(e)}>Add Course</Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default AddCourses;

export const getServerSideProps = async () => {
    try {
        const res = await axios.get('http://localhost:3000/api/courses', {
            headers: {
                "Content-Type": 'application/json'
            }
        });
        if (res && res.data) {
            console.log(res.data);

            return {
                props: { courses: res.data }
            };
        }
    } catch (err) {
        console.log(err);
    }

    return {
        props: { courses: [] }
    };

}