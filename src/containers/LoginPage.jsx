import { Button, Container, Grid } from "@mui/material"
import GoogleIcon from '@mui/icons-material/Google';
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";
const LoginPage = () => {
    const Navigate = useNavigate();
    const Login = () => {
        signInWithPopup(auth, provider)
        .then(res => {
          
            const userName=res.user?.displayName
            Navigate("/home",{
                state:{
                    userName
                }
            })
        });
    }
    return (
        <Container>
            <Grid container justifyContent="center" alignItems="center" sx={{ height: "100vh", display: "flex", }}>
                <Grid item>
                    <Button onClick={Login} variant="contained" style={{ display: "flex", justifyContent: "center", alignItems: "center", paddig: "2px" }}>
                        <GoogleIcon sx={{ mr: 1 }} />
                        <span>Signin with Google</span>
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default LoginPage
