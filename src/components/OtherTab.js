import { useState } from "react"
import OtherCard from "../components/OtherCard"
import useFetch from "../useFetch"

const OtherTab = (props) => {
    const { data, isLoading, error } = useFetch("http://localhost:8000/veranstaltungsorte")
    const [ searchTerm, setSearchTerm ] = useState ("")
    
    return(
      <div className= "other-tab" >
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
                    <OtherCard name = { place.name } address = {place.address} phone = { place.phone } site = { place.site } fb = { place.fb } tw = { place.tw } ig = { place.ig } mail = { place.mail } img = { place.img } key = { place.id }/>
                ))
            }
        </div>
    )
}

export default OtherTab