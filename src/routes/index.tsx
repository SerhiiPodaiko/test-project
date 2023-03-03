import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import Layout from "../components/layout/Layout"
import UserList from "../pages/users/UserList"
import News from "../pages/news/News"
import PrivateAuth from "../HOC/PrivateAuth"
import Profile from "../pages/profile/Profile"
import Login from "../pages/auth/Login"
import NotFound from "../pages/404/NotFound"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<UserList />} />
      <Route path="news" element={<News />} />
      <Route
        path="profile"
        element={
          <PrivateAuth>
            <Profile />
          </PrivateAuth>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
)
