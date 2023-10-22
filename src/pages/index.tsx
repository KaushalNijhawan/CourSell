import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios';
import Appbar from '@/components/Appbar'
import { Grid, Typography, Button } from '@mui/material'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil';
import { userDetails } from '@/atoms/UserAtom';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const [userDetail, setUserDetail] = useRecoilState(userDetails);
  return (
    <div>
      <Appbar />
      <Grid container style={{padding:50}}>
        <Grid item md = {7} sm = {6} xs ={12}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h4'>
              CourSell
            </Typography>
            <p style={{ fontSize: '30px' }}>
              A place to learn , Chance to grow
            </p>
            {userDetail && userDetail.username ?
              <div>
                <Button variant = 'outlined' onClick={ () => router.push('/courses')}>Courses</Button>
                <Button variant = 'outlined' style={{marginLeft:'10px'}} onClick={ () => router.push('/addCourses')}>Add Courses</Button>
              </div> :
              <></>
            }
          </div>
        </Grid>
        <Grid item md = {5} sm = {6} xs ={12}>
          <img src="https://static.wixstatic.com/media/65246d_c7bd3ba476fb4191af59a11494ad027f~mv2.jpg/v1/fill/w_820,h_460,al_c,q_85/65246d_c7bd3ba476fb4191af59a11494ad027f~mv2.jpg"
            height='250' width='300' />
        </Grid>
      </Grid>
    </div>
  )
}

