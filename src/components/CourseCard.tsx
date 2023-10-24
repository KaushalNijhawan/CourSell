import { CardMedia , CardContent, Typography, CardActions, Button, Card } from "@mui/material";
import { Router, useRouter } from "next/router";

const CourseCard = (props : any) => {
    const router = useRouter();
    return (
        <div style={{marginLeft:10, marginTop:10}}>
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
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div><p>Price: </p></div> <div><p>{props.course.price}</p></div>
                </div>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() =>  router.push(`/courses/${props.course._id}`)}>View & Edit</Button>
            </CardActions>
        </Card>
        </div>
    )
}

export default CourseCard;