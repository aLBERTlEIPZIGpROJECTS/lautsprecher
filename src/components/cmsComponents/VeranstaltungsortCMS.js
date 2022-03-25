import { useState } from "react"
import useFetch from "../../useFetch.js"
import CardCMS from "./CardCMS.js"

const BandsCMS = () => {

    const url = "http://localhost:5000/api/place"

    const { data, isLoading, error } = useFetch(url)


    return(
        <div className="cms__content">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}

            <Blob className = "blob__lightblue blob-high" />
            <h1>All Bands</h1>
                {
                   data && data.map((place) => (
                        <CardCMS approved = {place.approved} concerts = { place.concerts } id = { place.id } key = { place.id } image = {place.image} inhaber = {place.inhaber} mail = {place.mail} phone={place.phone} placeName={place.placeName} socialMedia = {place.socialMedia} website = {place.website} />
                    ))
                }
                <GoTopBtn />

        </div>
    )
}

export default BandsCMS