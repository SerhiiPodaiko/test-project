import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../redux/useRedux"
import { fetchGetAllUsers } from "../../store/slices/users/usersSlice"
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined"
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined"

const getInitialViewMode = () => {
  return localStorage.getItem("viewMode") || "row"
}

const useUsersContainer = () => {
  const [viewMode, setViewMode] = useState<string>(getInitialViewMode)
  const { users, loading, error } = useAppSelector((state) => state.users)
  const dispatch = useAppDispatch()

  const renderViewMode =
    viewMode === "row" ? (
      <FormatListBulletedOutlinedIcon
        fontSize="large"
        onClick={() => setViewMode("table")}
      />
    ) : (
      <GridViewOutlinedIcon
        fontSize="large"
        onClick={() => setViewMode("row")}
      />
    )

  useEffect(() => {
    dispatch(fetchGetAllUsers())
  }, [])

  useEffect(() => {
    localStorage.setItem("viewMode", viewMode)
  }, [viewMode])

  return {
    users,
    loading,
    error,
    viewMode,
    renderViewMode,
  }
}

export default useUsersContainer
