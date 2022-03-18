const WriteArticle = () => {
    return(
        <div className="write-article">
            <h1>Write an Article</h1>
            <form action="">
                <label htmlFor="title">Title
                    <input type="text" />
                </label>
                <label htmlFor="body">Body
                    <textarea name="body" id="body" cols="30" rows="10"></textarea>
                </label>
                <label htmlFor="img">
                    <input type="file" />
                </label>
                <label htmlFor="actualArticle">Actual Article
                    <input type="radio" id = "actual" checked />
                </label>
                <label htmlFor="historyArticle">History Article
                    <input type="radio" id = "history" />
                </label>
            </form>
        </div>
    )
}

export default WriteArticle