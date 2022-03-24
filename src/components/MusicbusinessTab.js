import { useState } from "react"
import OtherCard from "./OtherCard"
import useFetch from "../useFetch"

const OtherTab = (props) => {
  const url = "http://localhost:5000/api/musicbusiness"
    const { data, isLoading, error } = useFetch(url)
    const [ searchTerm, setSearchTerm ] = useState ("")
    
    return(
      <div className= {`${ props.class}`} >

            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
            <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
            {
              data &&  data.filter((val) => {
                if(searchTerm === ""){
                  return val
                } else if (val.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                  return
                }
              }).map((place) => (
                    <OtherCard key = { place.id } name = { place.businessName } number = {place.number} PLZ = {place.PLZ} street = {place.street} phone = { place.phone } website = { place.site } fb = { place.fb } tw = { place.tw } ig = { place.ig } sc = { place.sc } yt = { place.yt } twitch = { place.twitch } mail = { place.mail } image = { place.image } />
                ))
            }
        </div>
    )
}

export default OtherTab