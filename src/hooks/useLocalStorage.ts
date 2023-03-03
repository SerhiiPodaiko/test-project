const useLocalStorage = () => {
  const persistRoot = "persist:root"

  const getNews = () => {
    const { news } = JSON.parse(localStorage.getItem(persistRoot) || "{}")

    return news
  }

  const setNews = (news: any) => {
    const root = JSON.parse(localStorage.getItem(persistRoot) || "{}")
    root.news = news
    localStorage.setItem("persist:root.news", JSON.stringify(root))
  }

  const getPage = () => JSON.parse(localStorage.getItem("page") || "1")

  const setPage = (page: any) =>
    localStorage.setItem("page", JSON.stringify(page))

  // const getNewsCount = () => JSON.parse(localStorage.getItem("newsCount") || "1")
  //
  // const setNewsCount = (newsCount: any) => localStorage.setItem("newsCount", JSON.stringify(newsCount))

  return {
    getNews,
    setNews,
    getPage,
    setPage,
  }
}

export default useLocalStorage
