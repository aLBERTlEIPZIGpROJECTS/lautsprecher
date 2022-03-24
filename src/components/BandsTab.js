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
              }).map((band) => (
                    <BandCard bandName = { band.bandName } concert={band.concerts} style = { band.style} mail = { band.mail } phone = { band.phone } website = { band.website } musicians = { band.musicians } image = { band.image } key = { band.id } id = { band.id } fb={band.fb} ig={band.ig} tw={band.tw} sc={band.sc} yt={band.yt} in={band.in} twitch={band.twitch} vorsitzender={band.vorsitzender}  />
                ))
            }
        </div>
    )
}

export default BandsTab