import ArticleCard from "../components/ArticleCard"

const HistoryArticles = () => {
    return(
        <div className="articles__container">
            <h1>Alle History Article</h1>
            <div className="articles__cards">
                <ArticleCard title = "First Article" body = "lorem ipsum tralara tralari"/>
                <ArticleCard title = "Second Article" body = "lorem ipsum tralara tralari"/>
                <ArticleCard title = "Third Article" body = "lorem ipsum tralara tralari"/>
                <ArticleCard title = "Fourth Article" body = "lorem ipsum tralara tralari"/>
                <ArticleCard title = "Fifth Article" body = "lorem ipsum tralara tralari"/>
                <ArticleCard title = " Article" body = "lorem ipsum tralara tralari"/>
                <ArticleCard title = " Article" body = "lorem ipsum tralara tralari"/>
        </div>
    </div>
    )
}

export default HistoryArticles