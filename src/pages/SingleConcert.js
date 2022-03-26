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


const ConcertInfo = ( props ) => {

    const { id } = useParams()
    const { data, isLoading, error } = useFetch(`http://localhost:5000/concert/${id}`)

    return(
        <div className="single-concert">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
            <Blob class = "blob__purple blob-high" />

            {
                data && (
                    <article>
                        <img src={ data.img } alt="" className="img__article" />
                        <h2 className="community-info__title">{ data.title }</h2>
                        <div className="community-info__txt-container">
                            <p className="community-info__txt">{ data.musician }</p>
                            <p className="community-info__txt">{ data.date }</p>
                            <p className="community-info__txt">{ data.venue }</p>
                            <p className="community-info__txt">{ data.cost } euro</p>
                        </div>
                        <div className="community-info__links">
                            { data.phone && <> <a href={ `tel:&{ data.phone }`}><img src={ phone } alt="phone" className="iconMed" /></a> </>}
                            { data.mail && <><a href={ `mailto:&{ data.mail }`}><img src={ mail } alt="mail" className="iconMed" /></a></>}
                            { data.site && <><a href={ data.site }><img src={ site } alt="site" className="iconMed" /></a> </>}
                            { data.facebook && <><a href={ data.facebook }><img src={ facebook } alt="facebook" className="iconMed" /></a></>}
                            { data.twitter && <><a href={ data.twitter }><img src={ twitter } alt="twitter" className="iconMed" /></a></>}
                            { data.instagram && <><a href={ data.instagram }><img src={ instagram } alt="instagram" className="iconMed" /></a></>}
                            { data.soundcloud && <><a href={ data.soundcloud }><img src={ soundcloud } alt="soundcloud" className="iconMed" /></a></>}
                        </div>
                    </article>
                )
            }
                        <div className="community-info__txt-container">

            <Button txt = "Community" link = "/community" className= "community-info__btn button__orange"/>
            </div>
        </div>
    )
}

export default ConcertInfo