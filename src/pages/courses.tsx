import { useEffect , useState} from "react";
import axios from 'axios';
import {useSetRecoilState} from "recoil";
import { useRouter } from "next/router";
const Courses = () =>{
    const router = useRouter();
    const [isLoading , setLoading] = useState<boolean>(false);
    useEffect(()=>{
        setLoading(true);
        axios.get('http://localhost:3000/api/courses', { headers:{
            "Content-Type" : 'application/json'
        }}).then((res)=>{
            if(res && res.data){
                console.log(res);
            }
            setLoading(false);
        }).catch((err)=>{
            setLoading(false);
            router.push('/');            
            console.log(err);
        });
    },[]);

    if(isLoading){
        return <>Loading.........</>
    }
    return(
        <div>

        </div>
    );
}

export default Courses;