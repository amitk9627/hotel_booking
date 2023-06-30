import { useState } from "react";
import { Button, Container, Grid, Typography } from "@mui/material"
import GoogleIcon from '@mui/icons-material/Google';
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";
import { TextField } from '@mui/material';

const LoginPage = () => {
    
    const Navigate = useNavigate();

    const[email , setEmail]=useState("");
    const[password , setPassword]=useState("");
    const handleLogin=()=>{
        console.log(email,password);
    }
    const LoginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(res => {

                const userName = res.user?.displayName;
                Navigate("/home", {
                    state: {
                        userName
                    }
                })
            });
    }
    return (
        <Container style={{background:"rgba(0,0,0,0.2)"}}>

            <Grid container justifyContent="center" alignItems="center" textAlign="center" sx={{ height: "100vh", display: "flex"}}>
                <Grid item lg={12} sx={{bgcolor:"#fff", p:"40px"}}>
                    <Typography variant="h4" gutterBottom>
                        Login
                    </Typography>
                    <Grid item sx={{mb:"20px"}}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            onChange={(e)=>setEmail(e.target.value)}
                            type="email"
                        />
                    </Grid>
                    <Grid item sx={{mb:"20px"}}>
                        <TextField
                            required
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            onChange={(e)=>setPassword(e.target.value)}
                            autoComplete="current-password"
                        />
                    </Grid>

                    <Grid>
                        <Button variant="contained" sx={{width:"95%"}} onClick={handleLogin}>Login</Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container justifyContent="center" alignItems="center" sx={{  display: "flex", }}>
                <Grid item>
                    <Button onClick={LoginWithGoogle} variant="contained" style={{ display: "flex", justifyContent: "center", alignItems: "center", paddig: "2px" }}>
                        <GoogleIcon sx={{ mr: 1 }} />
                        <span>Signin with Google</span>
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default LoginPage
//35 min left