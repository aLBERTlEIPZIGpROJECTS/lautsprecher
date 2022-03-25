import { useState } from "react"
import useFetch from "../../useFetch.js"
import CardCMS from "./CardCMS.js"

const BandsCMS = () => {

    const url = "http://localhost:5000/api/concert"

    const { data, isLoading, error } = useFetch(url)


    return(
        <div className="cms__content">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}

            <h1>All Concerts</h1>
                {
                   data && data.map((concert) => (
                        <CardCMS approved = {concert.approved} id = { concert.id } key = { concert.id } address = {concert.address} concertTitle = {concert.concertTitle} cost = {concert.cost} date = {concert.date} duration={concert.duration} image={concert.image} musicians = {concert.musicians} style = {concert.style} tickets = {concert.tickets} veranstaltungsort = {concert.veranstaltungsort} />
                    ))
                }

        </div>
    )
}

export default BandsCMS