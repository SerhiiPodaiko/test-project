import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Spinner from "../../ui/spinner/Spinner"
import AlertMessage from "../../ui/alert/Alert"
import useUsersContainer from "../../hooks/users/useUsersContainer"
import UserItem from "./UserItem"

const UserList = () => {
    const {users, loading, error, viewMode, renderViewMode} = useUsersContainer()

    return (
        <Box component="div">
           <Box component="div" sx={{ textAlign: "right" }}>
               {renderViewMode}
           </Box>

            {error && <AlertMessage error={error} severity="error"/>}

            {loading ? <Spinner/> :
                <Grid container spacing={2}>
                    {users?.map(user =>
                        <UserItem
                            key={user.id}
                            viewMode={viewMode}
                            user={user}/>)}
                </Grid>}
        </Box>
    )
}

export default UserList


