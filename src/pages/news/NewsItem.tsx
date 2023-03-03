import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Btn from "../../ui/button/Btn"
import { NewsType } from "../../store/slices/news/newsType"
import ListItem from "@mui/material/ListItem"
import { useAppDispatch } from "../../hooks/redux/useRedux"
import { fetchDeleteNews } from "../../store/slices/news/newsSlice"

const NewsItem = ({ news }: { news: NewsType }) => {
  const dispatch = useAppDispatch()

  const { t } = useTranslation()

  const deletePost = (id: number) => {
    dispatch(fetchDeleteNews(id))
    toast(`${t("toast.delete")} ${id}`, {
      position: "top-right",
      autoClose: 1000,
      theme: "light",
    })
  }

  return (
    <ListItem>
      <Paper
        sx={{
          padding: "2rem",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: "90%",
            paddingRight: "1.5rem",
          }}
        >
          <Typography variant="h6" component="strong">
            {news.title}
          </Typography>
          <Typography variant="body1" component="h3">
            {news.body.length > 100
              ? news.body.slice(0, 150) + ".."
              : news.body}
          </Typography>
        </Box>

        <Btn type="contained" onClick={() => deletePost(news.id)}>
          {t("button.delete")}
        </Btn>
      </Paper>
    </ListItem>
  )
}

export default NewsItem
