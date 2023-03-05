import Box from "@mui/material/Box"
import { useTranslation } from "react-i18next"
import { useMediaQuery } from "@mui/material"

const Language = () => {
  const { i18n } = useTranslation()
  const query = useMediaQuery("(max-width: 500px)")

  const changeLanguage = (e: any) => {
    i18n.changeLanguage(e.target.value)
  }

  const styleSelect = {
    marginRight: `${query ? "0" : "3rem"}`,
    padding: "1rem",
    borderRadius: "0.6rem",
    border: "0.1rem solid #fff",
    color: "#fff",
    outline: "none",
    background: "transparent",
    "& > option": {
      background: "#1976d3",
    },
  }

  return (
    <Box
      component="select"
      onChange={changeLanguage}
      defaultValue={localStorage.getItem("i18nextLng") || ""}
      sx={styleSelect}
    >
      <Box component="option" defaultValue="en">
        EN
      </Box>
      <Box component="option" defaultValue="uk">
        UK
      </Box>
    </Box>
  )
}

export default Language
