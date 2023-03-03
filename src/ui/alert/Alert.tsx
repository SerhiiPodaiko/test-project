import { FC, ReactNode } from "react"
import Box from "@mui/material/Box"
import Alert from "@mui/material/Alert"

interface AlertProps {
  error: string | null
  severity: any
  icon?: ReactNode
  variant?: string
  color?: string
}

const AlertMessage: FC<AlertProps> = ({ severity, error }) => {
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
      }}
    >
      <Alert severity={severity} sx={{ maxWidth: "30rem" }}>
        {error}
      </Alert>
    </Box>
  )
}

export default AlertMessage
