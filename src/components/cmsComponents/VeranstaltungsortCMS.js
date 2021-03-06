import { useState } from "react"
import useFetch from "../../useFetch.js"
import CardCMS from "./CardCMS.js"

const BandsCMS = (props) => {

    const url = "http://localhost:5000/api/place"

    const { data, isLoading, error } = useFetch(url)

    return(
        <div className="cms__content">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
                {
                   data && data.map((place) => (
                        <CardCMS approved = {place.approved} concerts = { place.concerts } id = { place.id } key = { place.id } image = {place.image} inhaber = {place.inhaber} mail = {place.mail} phone={place.phone} placeName={place.placeName} fb = {place.fb} ig = {place.ig} tw = {place.tw} sc = {place.sc} yt = {place.yt} in = {place.in} twitch = {place.twitch} website = {place.website} />
                    ))
                }

        </div>
    )
}

export default BandsCMS