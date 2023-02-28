import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import {User} from "../../store/slices/users/userType"

const UserItem = ({ user, viewMode }: { user: User, viewMode: string }) => {
    return (
        <>
            { viewMode === "row" ?
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper sx={{
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px"
                    }}
                    >
                        <Typography variant="h6" component="strong">
                            {user.name}
                        </Typography>
                        <Typography variant="body2" component="span" sx={{marginTop: "10px"}}>
                            {user.email}
                        </Typography>
                        <Typography variant="body2" component="span">
                            {user.phone}
                        </Typography>
                        <Typography variant="body2" component="span">
                            {user.website}
                        </Typography>
                    </Paper>
                </Grid> :

                <Grid item xs={12}>
                    <Paper sx={{
                        padding: "15px 20px",
                        display: "flex",
                        alignItems: "center",
                        flex: "1 1 auto"
                    }}
                    >
                        <Typography variant="h6" component="strong">
                            {user.name}
                        </Typography>
                        <Typography variant="body2" component="span">
                            {user.email}
                        </Typography>
                        <Typography variant="body2" component="span">
                            {user.phone}
                        </Typography>
                        <Typography variant="body2" component="span">
                            {user.website}
                        </Typography>
                    </Paper>
                </Grid>
            }
        </>
    )
}

export default UserItem
