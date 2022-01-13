import FirstImg from "../materials/img/articles-history/firstImage.jpg"

const SingleArticle = () => {
    return(
        <div className="single-article">
            <h1>Single Article Tittel</h1>
            <div className="article__infos">
                <p className="article__txt">Author</p>
                <p className="article__txt"> - </p>
                <p className="article__txt">Date</p>
            </div>
            <img src={ FirstImg } alt="" className="img__article" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quas provident sequi itaque amet dolores vel soluta doloremque distinctio. Repellendus saepe culpa eius voluptatum optio sint perferendis dicta ab cupiditate animi, quaerat dolorum similique dolore exercitationem iste, veritatis aliquid nesciunt quia qui! In voluptas mollitia, unde incidunt modi laborum, quasi reprehenderit expedita magnam aliquid odit deserunt perspiciatis eveniet ullam, doloribus doloremque. Earum maiores obcaecati nihil dolor et, aperiam mollitia minima amet unde recusandae dolorem. Odio facere cum autem consectetur tempora facilis delectus voluptatibus aperiam, vitae sequi eos et in quisquam illum harum blanditiis! Dolore, nam quia molestiae labore quod quis?</p>
        </div>
    )
}

export default SingleArticle