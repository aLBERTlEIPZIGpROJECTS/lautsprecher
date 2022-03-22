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
                    <OtherCard key = { place.id } name = { place.businessName } address = {place.address} phone = { place.phone } site = { place.site } fb = { place.fb } tw = { place.tw } ig = { place.ig } mail = { place.mail } img = { place.image } />
                ))
            }
        </div>
    )
}

export default OtherTab