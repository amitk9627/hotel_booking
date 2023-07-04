import { useState } from "react";
import { Button, Container, Grid, Typography } from "@mui/material"
import GoogleIcon from '@mui/icons-material/Google';
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";
import { TextField } from '@mui/material';

const LoginPage = () => {

    const Navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("")

    // sign with google
    const LoginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(res => {

                const userName = res.user?.displayName;
                Navigate("/home", {
                    state: {
                        userName
                    }
                })
            }).catch((e) => {
                console.log("error", e)
            })
    }

    // button login
    const handleLogin = () => {
        Navigate("/home");
        let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
        let pass = password.length >= 8;
        if (regex.test(email) && pass) {
            Navigate("/home");
        } else {
            setMsg("Something Wrong")
        }
    }
    return (
        <Container style={{ background: "rgba(0,0,0,0.2)" }}>

            <Grid container justifyContent="center" alignItems="center" textAlign="center" sx={{ height: "100vh", display: "flex" }}>

                <Grid item lg={6} sx={{ bgcolor: "#fff", p: "40px" }}>

                    <Typography variant="h4" gutterBottom>
                        Login
                    </Typography>
                    <Typography variant="h5" color={"red"}>
                        {msg}
                    </Typography>
                    <Grid item sx={{ mb: "20px" }}>
                        <TextField
                            style={{ minWidth: "70%" }}
                            required
                            id="outlined-required"
                            label="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                        />
                    </Grid>
                    <Grid item sx={{ mb: "20px" }}>
                        <TextField
                            style={{ minWidth: "70%" }}
                            required
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                        />
                    </Grid>

                    <Grid>
                        <Button variant="contained" sx={{ width: "70%", p: "10px", fontSize: "1.2rem", mb: "20px" }} onClick={handleLogin} >
                            Login
                        </Button>
                    </Grid>

                    <Grid sx={{ pt: "10px" }}>
                        <Button onClick={LoginWithGoogle} sx={{ width: "70%", p: "5px", fontSize: ".7rem" }}>
                            <GoogleIcon sx={{ mr: 1 }} />
                            <span>Signin with Google</span>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>


        </Container>
    )
}

export default LoginPage
