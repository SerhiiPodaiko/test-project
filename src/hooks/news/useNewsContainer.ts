import {useEffect, useState} from "react"
import {useAppDispatch, useAppSelector} from "../redux/useRedux"
import {fetchGetAllPosts} from "../../store/slices/posts/postsSlice"

const useNewsContainer = () => {
    const {posts, loading, error} = useAppSelector(state => state.posts)
    const [currentPage, setCurrentPage] = useState<number>(5)

    const dispatch = useAppDispatch()

    const postsLoad = posts.slice(0, currentPage)

    // Load posts
    const onLoadMore = () => {
        setCurrentPage(prev => prev + 5)

        return postsLoad.slice(0, currentPage)
    }

    // Set posts
    useEffect(() => {
        dispatch(fetchGetAllPosts())
    }, [])

    return {
        loading,
        error,
        onLoadMore,
        postsLoad
    }
}

export default useNewsContainer
