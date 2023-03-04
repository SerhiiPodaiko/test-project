import { ChangeEvent, useState, useRef, useEffect } from "react"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"
import FormControl from "@mui/material/FormControl"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import { ReactComponent as LoginBg } from "../../assets/authentication.svg"
import useAuthContainer from "../../hooks/auth/useAuthContainer"
import Btn from "../../ui/button/Btn"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined"
import { useAppSelector } from "../../hooks/redux/useRedux"

const Login = () => {
  const [viewPassword, setViewPassword] = useState<boolean>(false)
  const {
    userName,
    userPassword,
    setUserName,
    setUserPassword,
    onLogin,
    onKeyHandler,
  } = useAuthContainer()

  const { isAuth } = useAppSelector((state) => state.auth)
  const userNameRef = useRef<HTMLInputElement | null>(null)
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

  useEffect(() => userNameRef.current?.focus(), [])

  return (
    <Box
      component="div"
      sx={{
        padding: "5rem 0",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
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
      <FormControl
        component="form"
        sx={{
          maxWidth: "40rem",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
        }}
        autoComplete="off"
      >
        <TextField
          onKeyDown={onKeyHandler}
          autoComplete="off"
          inputRef={userNameRef}
          value={userName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserName(e.target.value)
          }
          label={t("auth.username")}
          variant="standard"
        />

        <TextField
          onKeyDown={onKeyHandler}
          autoComplete="off"
          type={viewPassword ? "text" : "password"}
          value={userPassword}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserPassword(e.target.value)
          }
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

        <Btn
          disabled={!!isAuth}
          type="contained"
          onClick={onLogin}
          sx={{ alignSelf: "start" }}
        >
          {t("button.login")}
        </Btn>
      </FormControl>
    </Box>
  )
}

export default Login
