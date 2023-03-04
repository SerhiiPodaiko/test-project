import { useEffect, useLayoutEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../redux/useRedux"
import { useLocation } from "react-router-dom"
import { fetchGetAllNews, newsActions } from "../../store/slices/news/newsSlice"

const useNewsContainer = () => {
  const { news, loading, error } = useAppSelector((state) => state.news)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const dispatch = useAppDispatch()
  const location = useLocation()

  // Load posts
  const onLoadMore = (): void => {
    setCurrentPage((prev) => prev + 1)
  }

  // Set news
  useEffect(() => {
    dispatch(fetchGetAllNews(currentPage))
  }, [currentPage])

  useLayoutEffect(() => {
    const { news } = JSON.parse(localStorage.getItem("persist:root") || "{}")

    dispatch(newsActions.resetNews())
    localStorage.removeItem(news)
  }, [])

  return {
    news,
    loading,
    error,
    onLoadMore,
  }
}

export default useNewsContainer
