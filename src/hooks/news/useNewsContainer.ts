import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../redux/useRedux"
import { fetchGetAllNews, newsActions } from "../../store/slices/news/newsSlice"

const useNewsContainer = () => {
  const { news, loading, error } = useAppSelector((state) => state.news)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [fetching, setFetching] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  console.log("NEWS page", news)

  // Load posts
  const onLoadMore = (): void => {
    setCurrentPage((prev) => prev + 1)
  }

  // Set news
  useEffect(() => {
    dispatch(fetchGetAllNews(currentPage))
  }, [currentPage])

  useEffect(() => {
    if (!news.length && currentPage === 1) {
      dispatch(fetchGetAllNews(currentPage))
    }
  }, [])

  return {
    news,
    loading,
    error,
    onLoadMore,
  }
}

export default useNewsContainer
