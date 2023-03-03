import { ReactNode, MouseEvent } from "react"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

type BtnProps = {
  type: any
  children: ReactNode
  onClick?: () => void
  sx?: any
}

const Btn = ({ children, onClick, type, sx }: BtnProps) => {
  return (
    <Box
      component="div"
      onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
    >
      <Button onClick={onClick} variant={type} sx={sx}>
        {children}
      </Button>
    </Box>
  )
}

export default Btn
