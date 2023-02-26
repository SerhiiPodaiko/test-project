import Grid from "@mui/material/Grid"
import Spinner from "../../ui/spinner/Spinner"
import AlertMessage from "../../ui/alert/Alert"
import useUsersContainer from "../../hooks/users/useUsersContainer"
import UserItem from "./UserItem"

const UserList = () => {
    const [state, setState] = useState(null)

    const {users, loading, error} = useUsersContainer()

    return (
        <>
            {error && <AlertMessage error={error} severity="error"/>}
            {loading ? <Spinner/> : (
                <Grid container spacing={2}>
                    {users?.map(user => <UserItem key={user.id} user={user}/>)}
                </Grid>
            )}
        </>
    )
}

export default UserList


