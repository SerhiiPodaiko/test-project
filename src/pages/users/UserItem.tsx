import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import { User } from "../../store/slices/users/userType"

const UserItem = ({ user, viewMode }: { user: User; viewMode: string }) => {
  return (
    <>
      {viewMode === "row" ? (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper
            sx={{
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Typography variant="h5" component="strong">
              {user.name}
            </Typography>
            <Typography
              variant="h6"
              component="span"
              sx={{ marginTop: "1rem" }}
            >
              E-mail: {user.email}
            </Typography>
            <Typography variant="h6" component="span">
              Phone: {user.phone}
            </Typography>
            <Typography variant="h6" component="span">
              Website: {user.website}
            </Typography>
          </Paper>
        </Grid>
      ) : (
        <Grid item xs={12}>
          <Paper
            sx={{
              padding: "1.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              flex: "1 1 auto",
            }}
          >
            <Typography variant="h5" component="strong">
              {user.name}
            </Typography>
            <Typography variant="h6" component="span">
              {user.email}
            </Typography>
            <Typography variant="h6" component="span">
              {user.phone}
            </Typography>
            <Typography variant="h6" component="span">
              {user.website}
            </Typography>
          </Paper>
        </Grid>
      )}
    </>
  )
}

export default UserItem
