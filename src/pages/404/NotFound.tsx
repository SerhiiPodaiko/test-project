import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import NotFoundImg from "../../assets/404.png"

const NotFound = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const clear = setTimeout(() => navigate("/"), 5000)

        return () => clearTimeout(clear)
    }, [])

    return (
        <Box sx={{
            padding: "100px 15px",
            textAlign: "center",
            position: "relative"
        }}>
            <Button variant="outlined" size="medium"
                        sx={{ position: "absolute", top: "5px", left: "30px" }}
                    onClick={() => navigate("/")} >
                Back to home
            </Button>
            <Box component="img" sx={{maxWidth: 500, width: "100%", height: "auto"}}
                src={NotFoundImg}
                alt="not-found"/>
        </Box>
    )
}

export default NotFound
