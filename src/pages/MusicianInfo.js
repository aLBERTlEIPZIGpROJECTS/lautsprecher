import { useParams } from "react-router-dom"
import Button from "../components/Button"
import useFetch from "../useFetch"
import Blob from "../components/Blob"
import phone from "../materials/icons/binoculars-thin.svg"
import mail from "../materials/icons/mailIcon.svg"
import site from "../materials/icons/binoculars-thin.svg"
import twitter from "../materials/icons/twIcon.svg"
import facebook from "../materials/icons/fbIcon.svg"
import instagram from "../materials/icons/igIcon.svg"
import soundcloud from "../materials/icons/arrow-up.svg"


const MusicianInfo = ( props ) => {

    const { id } = useParams()
    const { data, isLoading, error } = useFetch(`http://localhost:8000/musicians/${id}`)

    return(
        <div className="single-musician">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
            <Blob class = "blob__purple blob-high" />

            {
                data && (
                    <article>
                        <img src={ data.img } alt="" className="img__article" />
                        <h2>{ data.fname } { data.lname }</h2>
                        <p>{ data.instrument }</p>
                        <p>{ data.style }</p>
                        <p>{ data.bands }</p>
                        <a href={ `tel:&{ data.phone }`}></a><img src={ phone } alt="phone" className="iconMed" />
                        <a href={ `mailto:&{ data.mail }`}></a><img src={ mail } alt="mail" className="iconMed" />
                        <a href={ data.site }></a><img src={ site } alt="site" className="iconMed" />
                        <a href={ data.facebook }></a><img src={ facebook } alt="facebook" className="iconMed" />
                        <a href={ data.twitter }></a><img src={ twitter } alt="twitter" className="iconMed" />
                        <a href={ data.instagram }></a><img src={ instagram } alt="instagram" className="iconMed" />
                        <a href={ data.soundcloud }></a><img src={ soundcloud } alt="soundcloud" className="iconMed" />
                    </article>
                )
            }
            <Button txt = "Community" link = "/community"/>
        </div>
    )
}

export default MusicianInfo