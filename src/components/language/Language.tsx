import Box from "@mui/material/Box"
import {useTranslation} from "react-i18next"

const Language = () => {
    const {i18n} = useTranslation()

    const changeLanguage = (e: any) => {
        i18n.changeLanguage(e.target.value)
    }

    const styleSelect = {
        marginRight: "50px",
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #fff",
        color: "#fff",
        outline: "none",
        background: "transparent",
        "& > option": {
            background: "#1976d3"
        }
    }

    return (
        <Box
            component="select"
            onChange={changeLanguage}
            defaultValue={JSON.stringify(localStorage.getItem("i18nextLng"))}
            sx={styleSelect}>

            <Box component="option" defaultValue="en">
                EN
            </Box>
            <Box component="option" defaultValue="UK">
                UK
            </Box>
        </Box>
    )
}

export default Language
