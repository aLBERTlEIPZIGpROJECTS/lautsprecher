import { useState } from "react"
import useFetch from "../../useFetch.js"
import CardCMS from "./CardCMS.js"

const BandsCMS = () => {

    const url = "http://localhost:5000/api/team"

    const { data, isLoading, error } = useFetch(url)


    return(
        <div className="cms__content">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}

                {
                   data && data.map((teamMember) => (
                        <CardCMS approved = {teamMember.approved} id = { teamMember.id } key = { teamMember.id } fName = {teamMember.fName} lName = {teamMember.lName} mail = {teamMember.mail} image = {teamMember.image} password = {teamMember.password} phone = {teamMember.phone} role = {teamMember.role} fb = {teamMember.fb} ig = {teamMember.ig} tw = {teamMember.tw} sc = {teamMember.sc} yt = {teamMember.yt} in = {teamMember.in} twitch = {teamMember.twitch} website ={teamMember.website} />
                    ))
                }

        </div>
    )
}

export default BandsCMS