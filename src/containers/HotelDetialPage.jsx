import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Grid, Typography, } from '@mui/material'
import { useParams } from "react-router"

const HotelDetialPage = () => {
  const [hotelInfo, setHotelInfos] = useState([]);
  const param = useParams();
  // console.log(param.slug);
  useEffect(() => {
    axios.get(`https://hotels-api-4ltr.onrender.com/api/hotels/${param.slug}`)
      .then((res) => {

        setHotelInfos(res.data);
      })
  }, [param.slug])
  
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Typography variant="h4" gutterBottom>
          {hotelInfo.address}
        </Typography>
        <Grid container justifyContent={"center"}>
          {
            hotelInfo?.images?.map((item) => (
              <Grid key={item.id} item lg={4}>
                <img
                  src={`${item.img}`}
                  style={{
                    width: "95%",
                    height: 300,
                    borderRadius: "5px",
                    margin: 5,
                    boxShadow: "0px 0px 5px 3px grey"
                  }}
                  alt="fhbdgh"

                />
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </>
  )
}

export default HotelDetialPage
