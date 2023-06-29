import React from 'react'
import {Card,CardContent,CardMedia,Typography, CardActionArea, Rating} from '@mui/material';
import { useNavigate } from 'react-router';

const HotelCard = (props) => {
    const navigate=useNavigate();
    const hotelDetials = props?.hotel || {};
    const onCardClick = () => {
        
        navigate(`hotelDetails/${hotelDetials.slug}`)
    }

    return (
        <Card sx={{ maxWidth: 345, marginBottom: 7 }} onClick={onCardClick}>
            <CardActionArea>

                <CardMedia
                    component="img"
                    height="250"
                    image={hotelDetials?.thumbnail}
                    alt="hotel"
                />

                <CardContent>

                    <Typography style={{}} gutterBottom variant="h6" component="div">
                        {hotelDetials.address}
                    </Typography>

                    <Typography variant="body1" color="text.primary">
                        ${hotelDetials.pricePerNight} night
                    </Typography>

                    <Typography variant='body1'>
                        <Rating name="read-only" value={Math.floor(hotelDetials.rating)} readOnly />
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default HotelCard;
