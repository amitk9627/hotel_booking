import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const HotelCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91jLGBwY5yUoOURiALIdJWmiYci3z1P6yBylBxOao-Q&s"
                    alt="hotel"
                />
                <CardContent>
                    <Typography style={{}} gutterBottom variant="h6" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        $120 night
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default HotelCard;
