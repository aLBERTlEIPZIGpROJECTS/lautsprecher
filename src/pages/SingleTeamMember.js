import { useParams } from "react-router-dom"
import useFetch from "../useFetch"

import Button from "../components/Button"
import Blob from "../components/Blob"
import phone from "../materials/icons/binoculars-thin.svg"
import mail from "../materials/icons/mailIcon.svg"
import site from "../materials/icons/binoculars-thin.svg"
import twitter from "../materials/icons/twIcon.svg"
import facebook from "../materials/icons/fbIcon.svg"
import instagram from "../materials/icons/igIcon.svg"
import soundcloud from "../materials/icons/arrow-up.svg"


const TeamMemberInfo = ( props ) => {

    const { id } = useParams()
    const url = `http://localhost:5000/api/team/${id}`
    const { data, isLoading, error } = useFetch(url)

    return(
        <div className="single-teammember">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
            <Blob class = "blob__purple blob-high" />

            {data && (
                <h1>Hello</h1>
            )}
           {/*  {
                data && (
                    <article>
                        <img src={ data.image } alt="" className="member__img" />
                        <h2 className="community-info__title">{ data.fName } { data.lName }</h2>
                        <p className="community-info__txt">{ data.position }</p>
                        <p className="community-info__txt">{ data.style }</p>
                        <p className="community-info__txt">{ data.bands }</p>
                        <p className="community-info__txt">{ data.mail }</p>
                        
                    </article>
                )
            } */}
            <Button txt = "Community" link = "/community" className= "community-info__btn"/>
        </div>
    )
}

export default TeamMemberInfo