import CMSField from "./CMSField"

const CardCMS = (props) => {


    return(
        <div className="cms__card">
            {props.id && <CMSField content = {props.id} />}
            {props.approved && <CMSField content = {`Approved: ${props.approved}`} />}
            {props.bandName && <CMSField content = {`Band Name: ${props.bandName}`} />}
            {props.placeName && <CMSField content = {`Place Name: ${props.placeName}`} />}
            {props.businessName && <CMSField content = {`Business Name: ${props.businessName}`} />}
            {props.vorsitzender && <CMSField content = {`Vorsitzender/in: ${props.vorsitzender}`} />}
            {props.inhaber && <CMSField content = {`Inhaber/in: ${props.inhaber}`} />}
            {props.author && <CMSField content = {`Author: ${props.author}`} />}
            {props.concertTitle && <CMSField content = {`Concert Title: ${props.concertTitle}`} />}
            {props.fName && <CMSField content = {`First Name: ${props.fName}`} />}
            {props.lName && <CMSField content = {`Last Name: ${props.lName}`} />}
            {props.role && <CMSField content = {`Role: ${props.role}`} />}
            {props.articleTitle && <CMSField content = {`Article Title: ${props.articleTitle}`} />}
            {props.mail && <CMSField content = {`Mail: ${props.mail}`} />}
            {props.phone && <CMSField content = {`Phone: ${props.phone}`} />}
            {props.musicians && <CMSField content = {`Musicians: ${props.musicians}`} />}
            {props.style && <CMSField content = {`Style: ${props.style}`} />}
            {props.address && <CMSField content = {`Address: ${props.address}`} />}
            {props.veranstaltungsort && <CMSField content = {`Veranstaltungsort: ${props.veranstaltungsort}`} />}
            {props.date && <CMSField content = {`Date: ${props.date}`} />}
            {props.duration && <CMSField content = {`duration: ${props.duration}`} />}
            {props.cost && <CMSField content = {`cost : ${props.cost}`} />}
            {props.tickets && <CMSField content = {`Tickets: ${props.tickets}`} />}
            {props.concerts && <CMSField content = {`Concerts: ${props.concerts}`} />}
            {props.website && <CMSField content = {`Website: ${props.website}`} />}
            {props.fb && <CMSField content = {`Fb: ${props.fb}`} />}
            {props.ig && <CMSField content = {`Ig: ${props.ig}`} />}
            {props.tw && <CMSField content = {`Tw: ${props.tw}`} />}
            {props.sc && <CMSField content = {`Sc: ${props.sc}`} />}
            {props.yt && <CMSField content = {`Yt: ${props.yt}`} />}
            {props.in && <CMSField content = {`In: ${props.in}`} />}
            {props.twitch && <CMSField content = {`Twitch ${props.twitch}`} />}
            {props.image && <CMSField content = {`Image: ${props.image}`} />}
            {props.message && <CMSField content = {`Message: ${props.message}`} />}
            {props.body && <CMSField content = {`Body: ${props.body}`} />}
            {props.messageTitle && <CMSField content = {`Message Title: ${props.messageTitle}`} />}
            {props.messageBody && <CMSField content = {`Message Body: ${props.messageBody}`} />}
            {props.instruments && <CMSField content = {`Instruments: ${props.instruments}`} />}
            {props.tags && <CMSField content = {`Tags: ${props.tags}`} />}
        </div>
    )
}

export default CardCMS