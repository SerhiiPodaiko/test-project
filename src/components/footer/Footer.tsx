import {useTranslation} from "react-i18next"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const Footer = () => {
    const {t} = useTranslation()

    return (
        <Box component="footer" sx={{
            fontSize: "18px",
            color: "#fff",
            textAlign: "center",
            padding: "20px",
            background: "#1976d3"
        }}>
            <Typography variant="body1" component="span">
                {t("footer.copy")}
            </Typography>
        </Box>
    )
}

export default Footer
