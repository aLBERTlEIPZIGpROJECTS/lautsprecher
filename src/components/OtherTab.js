import OtherCard from "../components/OtherCard"
import useFetch from "../useFetch"

const OtherTab = (props) => {
  const { data, isLoading, error } = useFetch("http://localhost:8000/veranstaltungsorte")
    
    return(
      <div className= "other-tab" >
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
            {
              data &&  data.map((place) => (
                    <OtherCard name = { place.name } address = {place.address} phone = { place.phone } site = { place.site } fb = { place.fb } tw = { place.tw } ig = { place.ig } mail = { place.mail } img = { place.img } key = { place.id }/>
                ))
            }
        </div>
    )
}

export default OtherTab