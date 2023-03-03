import { ChangeEvent, useState } from "react"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import { ReactComponent as LoginBg } from "../../assets/authentication.svg"
import useAuthContainer from "../../hooks/auth/useAuthContainer"
import Btn from "../../ui/button/Btn"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined"

const Login = () => {
  const [viewPassword, setViewPassword] = useState<boolean>(false)
  const { userName, userPassword, setUserName, setUserPassword, onLogin } =
    useAuthContainer()

  const { t } = useTranslation()

  const renderIconPassword = viewPassword ? (
    <VisibilityOutlinedIcon
      fontSize="large"
      onClick={() => setViewPassword(false)}
    />
  ) : (
    <VisibilityOffOutlinedIcon
      fontSize="large"
      onClick={() => setViewPassword(true)}
    />
  )

  return (
    <Box
      component="div"
      sx={{
        padding: "5rem 0",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box
        component="div"
        sx={{
          position: "absolute",
          maxWidth: "50rem",
          width: "100%",
          height: "auto",
        }}
      >
        <LoginBg />
      </Box>
      <Box
        component="form"
        sx={{
          maxWidth: "40rem",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={userName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserName(e.target.value)
          }
          id="standard-basic"
          label={t("auth.username")}
          variant="standard"
        />

        <TextField
          type={viewPassword ? "text" : "password"}
          value={userPassword}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserPassword(e.target.value)
          }
          id="standard-basic"
          label={t("auth.password")}
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                {renderIconPassword}
              </InputAdornment>
            ),
          }}
        />

        <Btn type="contained" onClick={onLogin} sx={{ alignSelf: "start" }}>
          {t("button.login")}
        </Btn>
      </Box>
    </Box>
  )
}

export default Login
