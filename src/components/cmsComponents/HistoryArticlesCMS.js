import { useState } from "react"
import useFetch from "../../useFetch.js"
import CardCMS from "./CardCMS.js"

const BandsCMS = (props) => {

    const url = "http://localhost:5000/api/historyarticle"

    const { data, isLoading, error } = useFetch(url)


    return(
        <div className="cms__content">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}

                {
                   data && data.map((article) => (
                        <CardCMS approved = {article.approved} id = { article.id } key = { article.id } articleTitle = {article.articleTitle} author = {article.author} body = {article.body} image = {article.image} tags={article.tags}/>
                    ))
                }

        </div>
    )
}

export default BandsCMS