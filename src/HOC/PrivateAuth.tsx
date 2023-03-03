import { FC } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useAppSelector } from "../hooks/redux/useRedux"

type PrivateAuthProps = {
  children: any
}

const PrivateAuth: FC<PrivateAuthProps> = ({ children }) => {
  const location = useLocation()
  const { isAuth } = useAppSelector((state) => state.auth)

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children
}

export default PrivateAuth
