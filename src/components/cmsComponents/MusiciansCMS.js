import { useState } from "react"
import useFetch from "../../useFetch.js"
import CardCMS from "./CardCMS.js"

const BandsCMS = () => {

    const url = "http://localhost:5000/api/musician"

    const { data, isLoading, error } = useFetch(url)


    return(
        <div className="cms__content">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}

            <h1>All Musicians</h1>
                {
                   data && data.map((musician) => (
                       <CardCMS id = {musician.id} 
                       fName = {musician.fName} lName = {musician.lName} mail = {musician.mail} image ={musician.image} style = {musician.style} website = {musician.website}  bands = {musician.bands} instruments = {musician.instruments} fb = {musician.fb} ig = {musician.ig} tw = {musician.tw} sc = {musician.sc} yt = {musician.yt} in = {musician.in} twitch = {musician.twitch} />
                       
                    ))
                }

        </div>
    )
}

export default BandsCMS