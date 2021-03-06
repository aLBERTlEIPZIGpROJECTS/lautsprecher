import { useState } from "react"
import useFetch from "../../useFetch.js"
import CardCMS from "./CardCMS.js"



const MessagesCMS = (props) => {

    const url = "http://localhost:5000/api/messages"

    const { data, isLoading, error } = useFetch(url)


    return(
        <div className="cms__content">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}

                {
                   data && data.map((message) => (
                        <CardCMS approved = {message.approved} messageTitle = { message.messageTitle } id = { message.id } key = { message.id } fName = {message.fName} lName = {message.lName} messageBody = {message.messageBody} mail = {message.mail} phone = {message.phone} />
                    ))
                }

        </div>
    )
}

export default MessagesCMS