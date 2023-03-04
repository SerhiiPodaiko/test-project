import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"
import { useAppDispatch } from "../redux/useRedux"
import { authActions } from "../../store/slices/auth/authSlice"

interface LocationState {
  from: {
    pathname: string
  }
}

const useAuthContainer = () => {
  const [userName, setUserName] = useState<string>("")
  const [userPassword, setUserPassword] = useState<string>("")

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const state = location.state as LocationState
  const { from } = state

  const { t } = useTranslation()

  const { REACT_APP_USER_ROLE_ADMIN, REACT_APP_USER_PASSWORD } = process.env

  const onLogin = (event: any) => {
    event.preventDefault()

    if (
      REACT_APP_USER_ROLE_ADMIN === userName &&
      REACT_APP_USER_PASSWORD === userPassword
    ) {
      toast(t("toast.success"), {
        position: "top-center",
        autoClose: 2000,
        theme: "light",
      })

      dispatch(
        authActions.setAuth({
          user: userName,
          password: userPassword,
          isAuth: "success",
        }),
      )

      setTimeout(() => {
        navigate(from?.pathname)
      }, 3000)
    } else {
      toast(t("toast.error"), {
        position: "top-center",
        autoClose: 1500,
      })
    }
  }

  const onKeyHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      onLogin(event)
    }
  }

  return {
    userName,
    userPassword,
    setUserName,
    setUserPassword,
    onLogin,
    onKeyHandler,
  }
}

export default useAuthContainer
