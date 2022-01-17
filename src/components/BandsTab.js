import { useState, useEffect } from "react"
import BandCard from "../components/BandCard"
import Blob from "../components/Blob"
import useFetch from "../useFetch"

const BandsTab = ( props ) => {

  const { data, isLoading, error } = useFetch("http://localhost:8000/bands")
    

    return(
      <div className= "community-tab">
         { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
            {
              data &&  data.map((musician) => (
                    <BandCard bandName = { musician.bandName } style = { musician.style} mail = { musician.mail } phone = { musician.phone } site = { musician.site } member = { musician.member } infos = { musician.infos } img = { musician.img } key = { musician.id }/>
                ))
            }
        </div>
    )
}

export default BandsTab