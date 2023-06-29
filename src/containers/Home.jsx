import React, { useEffect, useState } from 'react'
import { Grid, Container, Typography } from '@mui/material';
import HotelCard from '../components/HotelCard';
import axios from 'axios';

const Home = () => {
    const [hotels, setHotels] = useState([]);
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
                    juivbbibnikibn
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
