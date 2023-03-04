import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const Footer = () => {
  const { t } = useTranslation()

  return (
    <Box
      component="footer"
      sx={{
        color: "#fff",
        textAlign: "center",
        padding: "2rem",
        background: "#1976d3",
      }}
    >
      <Typography variant="h5" component="span">
        {t("footer.copy")}
      </Typography>
    </Box>
  )
}

export default Footer
