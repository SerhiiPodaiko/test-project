import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Spinner from "../../ui/spinner/Spinner"
import AlertMessage from "../../ui/alert/Alert"
import useUsersContainer from "../../hooks/users/useUsersContainer"
import UserItem from "./UserItem"

const UserList = () => {
  const { users, loading, error, viewMode, renderViewMode } =
    useUsersContainer()

  return (
    <Box component="div">
      <Container sx={{ textAlign: "right" }}>{renderViewMode}</Container>

      {error && <AlertMessage error={error} severity="error" />}

      {loading ? (
        <Spinner />
      ) : (
        <Container>
          <Grid container spacing={2}>
            {users?.map((user) => (
              <UserItem key={user.id} viewMode={viewMode} user={user} />
            ))}
          </Grid>
        </Container>
      )}
    </Box>
  )
}

export default UserList
