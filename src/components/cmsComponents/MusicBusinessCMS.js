import { useState } from "react"
import useFetch from "../../useFetch.js"
import CardCMS from "./CardCMS.js"

const BandsCMS = () => {

    const url = "http://localhost:5000/api/musicbusiness"

    const { data, isLoading, error } = useFetch(url)


    return(
        <div className="cms__content">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}

            <h1>All Music Business</h1>
                {
                   data && data.map((business) => (
                        <CardCMS approved = {business.approved} id = { business.id } key = { business.id } address = {business.address} businessName = {business.businessName} inhaber={business.inhaber} mail = {business.mail} image = {business.image} phone = {business.phone} fb = {business.fb} ig = {business.ig} tw = {business.tw} sc = {business.sc} yt = {business.yt} in = {business.in} twitch = {business.twitch} website ={business.website} />
                    ))
                }

        </div>
    )
}

export default BandsCMS