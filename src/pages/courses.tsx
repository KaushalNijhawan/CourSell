import { useEffect } from "react";
import axios from 'axios';
import {useSetRecoilState} from "recoil";
const Courses = () =>{
    const setUser = 
    useEffect(()=>{
        axios.get('http://localhost:3000/api/courses', { headers:{
            "Content-Type" : 'application/json'
        }}).then((res)=>{
            if(res && res.data){
                console.log(res);
            }
        }).catch((err)=>{
            console.log(err);
        })
    },[]);

    return(
        <div>

        </div>
    );
}

export default Courses;