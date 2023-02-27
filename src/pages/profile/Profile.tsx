import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import {useAppSelector} from "../../hooks/redux/useRedux"
import {useTranslation} from "react-i18next"
import {ReactComponent as ProfileBg} from "../../assets/profile.svg"

const Profile = () => {
    const {user, password} = useAppSelector(state => state.auth)

    const {t} = useTranslation()

    return (
        <Box
            component="div"
            sx={{width: "100%"}}>

            <Container sx={{
                display: "flex",
                alignItems: "start",
                position: "relative"
            }}>
                <Paper sx={ {
                    borderRadius: "10px",
                    padding: "15px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    fontSize: "18px",
                    color: "#333"
                }}>
                    <Box component="span">
                        {t("profile.name")} : {String(user)}
                    </Box>
                    <Box component="span">
                        {t("profile.password")} : {String(password)}
                    </Box>
                </Paper>

                <Box component="div" sx={{
                    maxWidth: "500px",
                    width: "100%",
                    height: "auto"
                }}>
                    <ProfileBg/>
                </Box>

            </Container>
        </Box>
    )
}

export default Profile

