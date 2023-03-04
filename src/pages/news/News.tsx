import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Spinner from "../../ui/spinner/Spinner"
import NewsItem from "./NewsItem"
import List from "@mui/material/List"
import Collapse from "@mui/material/Collapse"
import { TransitionGroup } from "react-transition-group"
import AlertMessage from "../../ui/alert/Alert"
import useNewsContainer from "../../hooks/news/useNewsContainer"
import Btn from "../../ui/button/Btn"
import { NewsType } from "../../store/slices/news/newsType"
import { useAppDispatch } from "../../hooks/redux/useRedux"
import { newsActions } from "../../store/slices/news/newsSlice"

const News = () => {
  const { loading, error, onLoadMore, news } = useNewsContainer()
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const { news } = JSON.parse(localStorage.getItem("persist:root") || "{}")

    return () => {
      dispatch(newsActions.resetNews())
      localStorage.removeItem(news)
    }
  }, [])

  return (
    <Box component="div">
      <Typography variant="body1" component="h1">
        {t("header.news")} {news?.length}
      </Typography>

      <List>
        {error && <AlertMessage error={error} severity="error" />}
        {loading ? (
          <Spinner />
        ) : (
          <TransitionGroup>
            {news?.map((news: NewsType) => (
              <Collapse key={news.id}>
                <NewsItem news={news} />
              </Collapse>
            ))}
          </TransitionGroup>
        )}
      </List>

      {!loading && !error && (
        <Box component="div" sx={{ textAlign: "center" }}>
          <Btn type="outlined" onClick={onLoadMore}>
            {t("button.load")}
          </Btn>
        </Box>
      )}
    </Box>
  )
}

export default News
