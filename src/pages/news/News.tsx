import {useTranslation} from "react-i18next"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Spinner from "../../ui/spinner/Spinner"
import NewsItem from "./NewsItem"
import List from "@mui/material/List"
import Collapse from "@mui/material/Collapse"
import {TransitionGroup} from "react-transition-group"
import AlertMessage from "../../ui/alert/Alert"
import useNewsContainer from "../../hooks/news/useNewsContainer"
import Btn from "../../ui/button/Btn"

const News = () => {
    const {loading, error, onLoadMore, postsLoad} = useNewsContainer()
    const {t} = useTranslation()

    return (
        <Box component="div">
            <Typography
                variant="h6"
                component="h1">
                {t("header.news")} {postsLoad.length}
            </Typography>

            <List>
                {error && <AlertMessage error={error} severity="error" />}
                { loading ? <Spinner /> : (
                    <TransitionGroup>
                        {postsLoad?.map(((post: any) => (
                            <Collapse key={post.id}>
                                <NewsItem post={post}/>
                            </Collapse>
                        )))}
                    </TransitionGroup>
                )}
            </List>

            {!loading && !error && (
                    <Box
                        component="div"
                        sx={{textAlign: "center"}}
                    >

                        <Btn type="outlined" onClick={onLoadMore}>
                            {t("button.load")}
                        </Btn>
                    </Box>
                )}
        </Box>
    )
}

export default News
