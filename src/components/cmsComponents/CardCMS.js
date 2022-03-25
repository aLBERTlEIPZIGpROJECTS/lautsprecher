import CMSField from "./CMSField"

const CardCMS = (props) => {
    return(
        <div className="cms__card">
            <CMSField content = {props.id} />
            <CMSField content = {props.approved} />
            <CMSField content = {props.bandName} />
            <CMSField content = {props.placeName} />
            <CMSField content = {props.businessName} />
            <CMSField content = {props.vorsitzender} />
            <CMSField content = {props.inhaber} />
            <CMSField content = {props.author} />
            <CMSField content = {props.concertTitle} />
            <CMSField content = {props.fName} />
            <CMSField content = {props.lName} />
            <CMSField content = {props.role} />
            <CMSField content = {props.title} />
            <CMSField content = {props.mail} />
            <CMSField content = {props.phone} />
            <CMSField content = {props.musicians} />
            <CMSField content = {props.style} />
            <CMSField content = {props.address} />
            <CMSField content = {props.veranstaltungsort} />
            <CMSField content = {props.date} />
            <CMSField content = {props.duration} />
            <CMSField content = {props.cost} />
            <CMSField content = {props.tickets} />
            <CMSField content = {props.concerts} />
            <CMSField content = {props.website} />
            <CMSField content = {props.socialMedia} />
            <CMSField content = {props.image} />
            <CMSField content = {props.message} />
            <CMSField content = {props.body} />
            <CMSField content = {props.instruments} />
            <CMSField content = {props.tags} />
        </div>
    )
}

export default CardCMS