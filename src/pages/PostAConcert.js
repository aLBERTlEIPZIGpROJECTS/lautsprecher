const PostAConcert = () => {
    return(
        <div className="write-article">
            <h1>Post Your Concert</h1>
            <form action="">
                <label htmlFor="concertTitle">Concert's Title
                    <input type="text" />
                </label>
                <label htmlFor="bandMusicianName">Band / Musician (if solo concert)
                    <input type="text" />
                </label>
                
                <label htmlFor="place">Where
                    <input type="text" />
                </label>
                <label htmlFor="date">Date
                    <input type="date" />
                </label>
                <label htmlFor="price">Price
                    <input type="number" />
                </label>
                <label htmlFor="body">Band / Musician (if solo concert)
                    <input type="text" />
                </label>
                <label htmlFor="img">
                    <input type="file" />
                </label>
            </form>
        </div>
    )
}

export default PostAConcert