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

            <Blob className = "blob__lightblue blob-high" />
            <h1>All Bands</h1>
                {
                   data && data.map((musician) => (
                        <CardCMS approved = {musician.approved} id = { musician.id } key = { musician.id } fName = {musician.fName} lName = {musician.lName} mail = {musician.mail} bands = {musician.bands} image ={musician.image} instruments = {musician.instruments} style = {musician.style} website = {musician.website} socialMedia = {musician.socialMedia}/>
                    ))
                }
                <GoTopBtn />

        </div>
    )
}

export default BandsCMS