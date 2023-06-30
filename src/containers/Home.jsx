import React, { useEffect, useState } from 'react'
import { Grid, Container, Typography } from '@mui/material';
import HotelCard from '../components/HotelCard';
import axios from 'axios';
import {useLocation} from 'react-router'
const Home = () => {
    const [hotels, setHotels] = useState([]);
    const locationDetials=useLocation();
    useEffect(() => {
        axios.get("https://hotels-api-4ltr.onrender.com/api/hotels")
            .then((res) => {

                setHotels(res.data)
            }).catch((err) => {
                console.log(err);
            })

    }, [])
   

    return (
        <>

            <Container maxWidth="lg" sx={{ mt: 10 }}>
                <Typography variant="h4" gutterBottom >
                    Welcome {locationDetials?.state?.userName}
                </Typography>
                <Grid container spacing={2} >
                    {
                        hotels.map((hotel) => {
                            return (
                                <Grid item md={4} key={hotel.id}>
                                    <HotelCard hotel={hotel} />
                                </Grid>
                            );
                        })
                    }

                </Grid>

            </Container>
        </>
    )
}

export default Home;
