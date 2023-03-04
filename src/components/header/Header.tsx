import { useNavigate, Link, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useAppSelector, useAppDispatch } from "../../hooks/redux/useRedux"
import { authActions } from "../../store/slices/auth/authSlice"
import { toast } from "react-toastify"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined"
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded"
import { useMediaQuery } from "@mui/material"
import LogoutIcon from "@mui/icons-material/Logout"
import Language from "../language/Language"

const Header = ({
  toggleTheme,
  theme,
}: {
  toggleTheme: () => void
  theme: string
}) => {
  const { isAuth } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const location = useLocation()
  const navigate = useNavigate()

  const { t } = useTranslation()

  const logOutUser = () => {
    dispatch(authActions.logOut())
    toast(t("toast.logout"), {
      position: "top-right",
      autoClose: 2000,
      theme: "light",
    })
    navigate("/")
  }

  const themeView =
    theme === "dark" ? (
      <NightlightOutlinedIcon fontSize="large" onClick={toggleTheme} />
    ) : (
      <ModeNightRoundedIcon fontSize="large" onClick={toggleTheme} />
    )

  const query = useMediaQuery("(max-width: 500px)")

  return (
    <Box
      component="header"
      sx={{
        padding: "2rem 0",
        background: "#1976d3",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: `${query && "column"}`,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to="/" className="logo">
          {t("header.users")}
        </Link>
        <Box
          component="div"
          sx={{
            width: `${query && "100%"}`,
            marginTop: `${query && "1.5rem"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: `${query && "space-between"}`,
            gap: "1rem",
            fontSize: "1.8rem",
          }}
        >
          {themeView}
          <Language />

          {location?.pathname !== "/login" && (
            <>
              <Link to="news">{t("header.news")}</Link>
            </>
          )}

          {location?.pathname !== "/login" && (
            <PersonOutlineOutlinedIcon
              fontSize="large"
              onClick={() => navigate("/profile")}
            />
          )}

          {isAuth && (
            <LogoutIcon
              fontSize="large"
              onClick={logOutUser}
              titleAccess="Logout"
            />
          )}
        </Box>
      </Container>
    </Box>
  )
}

export default Header
