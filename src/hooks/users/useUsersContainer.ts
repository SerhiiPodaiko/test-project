import {useEffect} from "react"
import {useAppDispatch, useAppSelector} from "../redux/useRedux"
import {fetchGetAllUsers} from "../../store/slices/users/usersSlice"


const useUsersContainer = () => {
    const {users, loading, error} = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchGetAllUsers())
    }, [])

    return {
        users,
        loading,
        error
    }
}

export default useUsersContainer
