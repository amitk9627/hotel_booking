import React from 'react'
import { Grid } from '@mui/material';
import HotelCard from '../components/HotelCard';

const Home = () => {
    return (
        <div>
            <br /><br /><br /><br /><br /><br />
            <h1>HOME COMPONENT</h1>
            <Grid container spacing={1} >
                <Grid item md={4}>
                    <HotelCard />
                </Grid>
                <Grid item md={4}>
                    <HotelCard />
                </Grid>
                <Grid item md={4}>
                    <HotelCard />
                </Grid>
                <Grid item md={4}>
                    <HotelCard />
                </Grid>
                <Grid item md={4}>
                    <HotelCard />
                </Grid>


            </Grid>

        </div>
    )
}

export default Home;
