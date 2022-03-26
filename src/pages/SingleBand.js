import { useParams } from "react-router-dom"
import useFetch from "../useFetch"

import Button from "../components/Button"
import Blob from "../components/Blob"
import mail from "../materials/icons/mailIcon.svg"
import site from "../materials/icons/binoculars-thin.svg"
import twitter from "../materials/icons/twIcon.svg"
import facebook from "../materials/icons/fbIcon.svg"
import instagram from "../materials/icons/igIcon.svg"
import soundcloud from "../materials/icons/arrow-up.svg"


const BandInfo = ( props ) => {

    const { id } = useParams()
    const url = `http://localhost:5000/api/band/${id}`
    const { data, isLoading, error } = useFetch(url)

    return(
        <div className="single-musician">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
            <Blob class = "blob__purple blob-high" />

            {
                data && (
                    <article>
                        <img src={ data.image } alt="" className="img__article" />
                        <h2 className="community-info__title">{ data.bandName } </h2>
                        <p>{data.mail}</p>
                        <p>{data.style}</p>
                        <p>{data.website}</p>
                        
                        <p className="community-info__txt">{ data.style }</p>
    {/*                     <p className="community-info__txt">{ data.member }</p> */}
                        
{/*                         <div className="community-info__links">
                            <a href={ `mailto:&{ data.mail }`}></a><img src={ mail } alt="mail" className="iconMed" />
                            <a href={ data.site }></a><img src={ site } alt="site" className="iconMed" />
                            <a href={ data.facebook }></a><img src={ facebook } alt="facebook" className="iconMed" />
                            <a href={ data.twitter }></a><img src={ twitter } alt="twitter" className="iconMed" />
                            <a href={ data.instagram }></a><img src={ instagram } alt="instagram" className="iconMed" />
                            <a href={ data.soundcloud }></a><img src={ soundcloud } alt="soundcloud" className="iconMed" />
                        </div> */}
                    </article>
                )
            }
            <Button txt = "Community" link = "/community" className= "community-info__btn"/>
        </div>
    )
}

export default BandInfo