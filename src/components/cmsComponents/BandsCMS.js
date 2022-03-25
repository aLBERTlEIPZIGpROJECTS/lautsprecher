import { useState } from "react"
import useFetch from "../../useFetch.js"
import CardCMS from "./CardCMS.js"

const BandsCMS = () => {

    const url = "http://localhost:5000/api/band"

    const { data, isLoading, error } = useFetch(url)


    return(
        <div className="cms__content">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}

            <Blob className = "blob__lightblue blob-high" />
            <h1>All Bands</h1>
                {
                   data && data.map((band) => (
                        <CardCMS approved = {band.approved} bandName = { band.bandName } id = { band.id } key = { band.id } concerts = {band.concerts} image = {band.image} mail = {band.mail} musicians = {band.musicians} socialMedia = {band.socialMedia} style = {band.style} vorsitzender = {band.vorsitzender} website = {band.website} />
                    ))
                }
                <GoTopBtn />

        </div>
    )
}

export default BandsCMS