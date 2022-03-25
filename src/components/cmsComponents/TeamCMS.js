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
                        <CardCMS approved = {teamMember.approved} id = { teamMember.id } key = { teamMember.id } fName = {teamMember.fName} lName = {teamMember.lName} mail = {teamMember.mail} image = {teamMember.image} password = {teamMember.password} phone = {teamMember.phone} role = {teamMember.role} socialMedia = {teamMember.socialMedia} website ={teamMember.website} />
                    ))
                }
                <GoTopBtn />

        </div>
    )
}

export default BandsCMS