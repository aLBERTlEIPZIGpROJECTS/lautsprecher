import { useState } from "react"
import useFetch from "../../useFetch.js"
import CardCMS from "./CardCMS.js"

const BandsCMS = () => {

    const url = "http://localhost:5000/api/subscriber"

    const { data, isLoading, error } = useFetch(url)


    return(
        <div className="cms__content">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}

            <Blob className = "blob__lightblue blob-high" />
            <h1>All Bands</h1>
                {
                   data && data.map((subscriber) => (
                        <CardCMS approved = {subscriber.approved} id = { subscriber.id } key = { subscriber.id } fName = {subscriber.fName} lName = {subscriber.lName} mail = {subscriber.mail} />
                    ))
                }
                <GoTopBtn />

        </div>
    )
}

export default BandsCMS