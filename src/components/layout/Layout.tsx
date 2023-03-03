import { Outlet } from "react-router-dom"
import Box from "@mui/material/Box"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import useTheme from "../../hooks/theme/useTheme"

const Layout = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Box className={`app ${theme}`}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Box component="main" className="app-content">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
