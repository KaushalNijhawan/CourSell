import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import cookie from 'cookie';
import Appbar from "@/components/Appbar";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, TextField, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { useState } from 'react';
import { courseAtom } from "@/atoms/CourseAtom";
type course = {
    _id: string;
    title: string;
    price: string;
    description: string;
    imageLink: string;
    published: boolean;
}
const UpdateCourse = (props: any) => {
    const router = useRouter();
    const [courseDetail, setCourseDetail] = useRecoilState<course[]>(courseAtom);
    const [title, setTitle] = useState(props.course.title);
    const [price, setPrice] = useState(props.course.price);
    const [description, setDescription] = useState(props.course.description);
    const [imageLink, setImageLink] = useState(props.course.imageLink);

    const handleUpdate = async () => {
        let indexF = -1;
        let courseDetails: course[] = [];
        for (let i = 0; i < courseDetail.length; i++) {
            if (courseDetail[i]._id == props.course._id) {
                courseDetails.push({
                    title: title,
                    description: description,
                    price: price,
                    imageLink: imageLink,
                    _id: props.course._id,
                    published: props.course.published
                })
                continue;
            } else {
                courseDetails.push(courseDetail[i]);
            }
        }
        setCourseDetail(courseDetails);

        try{
            const res = await axios.put(`http://localhost:3000/api/courses/${props.course._id}` , {
                title: title,
                    description: description,
                    price: price,
                    imageLink: imageLink,
                    _id: props.course._id,
                    published: props.course.published
            } , {
                headers:{
                    "Content-Type":'application/json'
                }
            });
            console.log(res.data);
        }catch(err){
            console.log(err);
        }
    }

    return (
        <>
            <Appbar />
            <Grid container style={{ padding: 80 }}>
                <Grid item sm={6} md={5} xs={12}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={props.course.imageLink}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {props.course.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {props.course.description}
                            </Typography>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div><p>Price: </p></div> <div><p>{props.course.price}</p></div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={6} md={7} xs={12}>
                    <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 500, width: 450 }}>
                        <Typography variant="h6">
                            CourSell Login!
                        </Typography>
                        <TextField id="outlined-basic" label="Title" variant="outlined" style={{ width: 250 }} onChange={(e) => setTitle(e.target.value)}
                            value={title} />
                        <TextField id="outlined-basic" label="Description" variant="outlined" style={{ width: 250, marginTop: 10 }}
                            type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                        <TextField id="outlined-basic" label="Price" variant="outlined" style={{ width: 250, marginTop: 10 }}
                            onChange={(e) => setPrice(e.target.value)} value={price} />
                        <TextField id="outlined-basic" label="Image" variant="outlined" style={{ width: 250, marginTop: 10 }} onChange={(e) => setImageLink(e.target.value)}
                            value={imageLink} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }} >
                            <Button variant='outlined' style={{ marginLeft: 10 }} color='success' onClick={handleUpdate}>Update Course</Button>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}
export default UpdateCourse;
export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    console.log(ctx.req.cookies);
    if (ctx.req.cookies && ctx.req.cookies?.auth) {
        try {
            const cookieObj = cookie.serialize('auth', ctx.req.cookies?.auth, {
                httpOnly: true,
                maxAge: 3600,
                sameSite: 'strict'
            });
            const resp = await axios.get(`http://localhost:3000/api/courses/${ctx.params?.courseId}`, {
                headers: {
                    "Content-Type": 'application/json',
                    'Cookie': cookieObj
                }
            });
            console.log(resp.data);
            return {
                props: { course: resp.data.course }
            };
        } catch (err) {
            console.log(err);
        }
    }

    return {
        props: { course: null }
    }
}

