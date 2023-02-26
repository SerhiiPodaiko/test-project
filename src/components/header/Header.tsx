import {useNavigate, Link, useLocation} from "react-router-dom"
import {useTranslation} from "react-i18next"
import {useAppSelector, useAppDispatch} from "../../hooks/redux/useRedux"
import {authActions} from "../../store/slices/auth/authSlice"
import {toast} from "react-toastify"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined"
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded"
import LogoutIcon from "@mui/icons-material/Logout"
import Language from "../language/Language"

const Header = ({toggleTheme, theme}: {toggleTheme: () => void, theme: string}) => {
    const {isAuth} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const {t} = useTranslation()

    const logOutUser = () => {
        dispatch(authActions.logOut())
        toast(t("toast.logout"), {
            position: "top-right",
            autoClose: 2000,
            theme: "light"
        })
    }

    const themeView = theme === "dark" ?
        <NightlightOutlinedIcon onClick={toggleTheme} /> :
        <ModeNightRoundedIcon onClick={toggleTheme} />

    return (
        <Box component="header"
             sx={{
                 padding: "20px 0",
                 background: "#1976d3"
             }}
        >
            <Container sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>

                <Link to="/" className="logo">
                    {t("header.users")}
                </Link>
                <Box
                    component="div"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "18px"
                    }}  >

                    {themeView}
                    <Language/>

                    {location?.pathname === "/" && (
                        <>
                            <Link to="news">
                                {t("header.news")}
                            </Link>
                        </>
                    )}

                    {location?.pathname !== "/login" && (
                        <PersonOutlineOutlinedIcon onClick={() => navigate("/profile")}/>
                    )}

                    { isAuth &&
                        <LogoutIcon
                            onClick={logOutUser}
                            titleAccess="Logout"/> }
                </Box>
            </Container>
        </Box>
    )
}

export default Header
