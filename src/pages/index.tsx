import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Appbar from '@/components/Appbar'
import { Grid, Typography, Button } from '@mui/material'
import {useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Appbar />
      <Grid container spacing={2}>
        <Grid item sm={6} m={6} xl={4}>
          <div style={{display:'flex', flexDirection:'column'}}>
            <Typography variant='h6'>
              CourSell
            </Typography>
            <p style={{ fontSize: '15px' }}>
              A place to learn , Chance to grow
            </p>
            <div>
              <Button variant='outlined' onClick={ () => router.push('/login') }>Login</Button>
              <Button variant='outlined' style={{marginLeft:'10px'}} onClick={() => router.push('/signup')}>SigUp</Button>
            </div>
          </div>
        </Grid>
        <Grid item sm={6} m={6} xl={8}>
          <img src = "https://static.wixstatic.com/media/65246d_c7bd3ba476fb4191af59a11494ad027f~mv2.jpg/v1/fill/w_820,h_460,al_c,q_85/65246d_c7bd3ba476fb4191af59a11494ad027f~mv2.jpg" 
          height='250' width= '300'/>
        </Grid>
      </Grid>
    </div>
  )
}
