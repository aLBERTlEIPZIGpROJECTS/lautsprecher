import Button from "../components/Button"
import FormField from "../components/FormField"
import ArrowRight from "../materials/icons/arrow-right.png"

const Contact = () => {
    return(
        <div className="contact">
            <h1>Contact</h1>
            <form action="">
                <FormField label = "fname" /> 
                <FormField label = "lname"  />
                <FormField label = "mail"  /> 
                <FormField label = "phone"  /> 
                <FormField label = "message"  />
                <FormField label = "Bist du Musiker?"  />
                <FormField label = "Bist Du Veranstalter"  />
                <FormField label = "I want to subscribe"  />

                <Button txt = "Send"  linkName = "send" />
            </form>
        </div>
    )
}

export default Contact