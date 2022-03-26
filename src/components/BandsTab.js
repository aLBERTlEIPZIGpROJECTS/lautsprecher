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
                    <BandCard bandName = { band.bandName } concerts = {band.concerts} image = { band.image } mail = { band.mail } musicians = { band.musicians } socialMedia = {band.socialMedia}  style = { band.style} website = { band.website }  key = { band.id } id = { band.id } />
                ))
            }
        </div>
    )
}

export default BandsTab