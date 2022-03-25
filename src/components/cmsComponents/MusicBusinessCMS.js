import { useState } from "react"
import useFetch from "../../useFetch.js"
import CardCMS from "./CardCMS.js"

const BandsCMS = () => {

    const url = "http://localhost:5000/api/teamMember"

    const { data, isLoading, error } = useFetch(url)


    return(
        <div className="cms__content">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}

            <Blob className = "blob__lightblue blob-high" />
            <h1>All Bands</h1>
                {
                   data && data.map((teamMember) => (
                        <CardCMS approved = {teamMember.approved} id = { teamMember.id } key = { teamMember.id } address = {teamMember.address} businessName = {teamMember.businessName} inhaber={businessName.inhaber} mail = {teamMember.mail} image = {teamMember.image} phone = {teamMember.phone} socialMedia = {teamMember.socialMedia} website ={teamMember.website} />
                    ))
                }
                <GoTopBtn />

        </div>
    )
}

export default BandsCMS