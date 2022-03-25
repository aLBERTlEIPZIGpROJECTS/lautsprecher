import { useState } from "react"
import useFetch from "../../useFetch.js"
import CardCMS from "./CardCMS.js"



const MessagesCMS = () => {

    const url = "http://localhost:5000/api/historyarticle"

    const { data, isLoading, error } = useFetch(url)


    return(
        <div className="cms__content">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}

            <Blob className = "blob__lightblue blob-high" />
            <h1>All Messages</h1>
                {
                   data && data.map((message) => (
                        <CardCMS approved = {message.approved} title = { message.title } id = { message.id } key = { message.id } fName = {message.fName} lName = {message.lName} message = {message.message} mail = {message.mail} phone = {message.phone} />
                    ))
                }
                <GoTopBtn />

        </div>
    )
}

export default MessagesCMS