import { useState } from "react"

import BandCard from "../components/BandCard"
import useFetch from "../useFetch"

const BandsTab = ( props ) => {

    const url = "http://localhost:5000/api/band"
    const { data, isLoading, error } = useFetch(url)
    const [ searchTerm, setSearchTerm ] = useState("")

    return(

      <div className= "community-tab">
         { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
            <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>

            {
              data && data.filter((val) => {
                if(searchTerm === "") {
                  return val
                } else if (val.bandName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                  return val
                }
              }).map((musician) => (
                    <BandCard bandName = { musician.bandName } style = { musician.style} mail = { musician.mail } phone = { musician.phone } site = { musician.site } member = { musician.member } infos = { musician.infos } img = { musician.img } key = { musician.id } id = { musician.id }/>
                ))
            }
        </div>
    )
}

export default BandsTab