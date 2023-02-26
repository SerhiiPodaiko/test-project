import {Route, Routes} from "react-router-dom"
import Layout from "./components/layout/Layout"
import PrivateAuth from "./HOC/PrivateAuth"
import UserList from "./pages/users/UserList"
import News from "./pages/news/News"
import Profile from "./pages/profile/Profile"
import Login from "./pages/auth/Login"
import NotFound from "./pages/404/NotFound"
import {useAppSelector} from "./hooks/redux/useRedux"

const App = () => {
    const {posts} = useAppSelector(state => state.posts)

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<UserList/>}/>
                <Route path="news" element={<News/>}/>
                <Route path="profile" element={
                    <PrivateAuth>
                        <Profile/>
                    </PrivateAuth>
                }/>
                <Route path="login" element={<Login/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}

export default App

