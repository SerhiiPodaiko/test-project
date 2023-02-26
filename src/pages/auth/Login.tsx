import {ChangeEvent} from "react"
import {useTranslation} from "react-i18next"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import {ReactComponent as LoginBg} from "../../assets/authentication.svg"
import useAuthContainer from "../../hooks/auth/useAuthContainer"
import Btn from "../../ui/button/Btn"

const Login = () => {
    const {userName, userPassword,
        setUserName, setUserPassword, onLogin} = useAuthContainer()

    const {t} = useTranslation()

    return (
        <Box
            component="div"
            sx={{
                padding: "50px 0",
                display: "flex",
                width: "100%",
                justifyContent: "center",
                position: "relative"
            }}>
            <Box component="div" sx={{
                position: "absolute",
                maxWidth: "500px",
                width: "100%",
                height: "auto"
            }}>
                <LoginBg/>
            </Box>
            <Box
                component="form"
                sx={{
                    maxWidth: "400px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "25px" }}
                noValidate
                autoComplete="off">

                <TextField
                    value={userName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
                    id="standard-basic"
                    label={t("auth.username")}
                    variant="standard"
                />

                <TextField
                    value={userPassword}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUserPassword(e.target.value)}
                    id="standard-basic"
                    label={t("auth.password")}
                    variant="standard"
                />

                <Btn type="contained" onClick={onLogin} sx={{ alignSelf: "start" }}>
                    {t("button.login")}
                </Btn>
            </Box>
        </Box>
    )
}

export default Login

