import { useEffect, useState } from "react";
import axios from 'axios';
import { useSetRecoilState } from "recoil";
import { useRouter } from "next/router";
import Appbar from "@/components/Appbar";
import { headers } from "next/headers";
import { courseAtom } from "@/atoms/CourseAtom";
import CourseCard from "@/components/CourseCard";
import { Typography } from "@mui/material";
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import cookie from 'cookie';

type course = {
    title: string;
    description: string;
    price: string;
    imageLink: string;
    _id: string;
    published: boolean;
}

const Courses = (props: { courses: [] }) => {
    console.log(props);

    const router = useRouter();
    const [currentCourses, setCourses] = useState<course[]>(props.courses);
    const setCourseAtoms = useSetRecoilState(courseAtom);
    useEffect(() => {
        setCourseAtoms(props.courses);
    }, []);
    return (
        <div>
            <Appbar />
            <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'center' }}>
                {currentCourses ? currentCourses.map((course) => <CourseCard course={course} key={course._id} />) :
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h2">
                            No Courses Found!
                        </Typography>
                    </div>}
            </div>
        </div>
    );
}

export default Courses;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const { res } = context;
    if (context.req.cookies && context.req.cookies.auth) {
        const cookieObj = cookie.serialize('auth', context.req.cookies?.auth, {
            httpOnly: true,
            maxAge: 3600,
            sameSite: 'strict'
        });
        try {
            const response = await axios.get('http://localhost:3000/api/courses', {
                withCredentials: true,
                headers: {
                    "Content-Type": 'application/json',
                    'Cookie': cookieObj
                }
            });
            return {
                props: { courses: response.data.courses }
            };
        } catch (err) {

        }



    }
    return {
        props: { courses: [] }
    }
}
