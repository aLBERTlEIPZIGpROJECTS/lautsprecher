import Button from "../components/Button"
import FormField from "../components/FormField"

const Contact = () => {
    return(
        <div className="contact">
            <h1>Contact</h1>
            <div className="alt-contact">
                <p>Bist Du Musiker? Wir hören gerne über dich!</p>
                <Button txt ="Melde Dich gerne" linkName = "melde dich gerne"  /> {/* einen unterschiedlichen Text ist erfordelich */}
            </div>
            <div className="alt-contact">
                <p>Bist du Veranstalter oder arbeitest du in der Musikbranche?</p>
                <Button txt ="Melde Dich gerne" linkName = "melde dich gerne"  /> {/* einen unterschiedlichen Text ist erfordelich */}
            </div>

            <form action="">
                <FormField label = "fname" /> 
                <FormField label = "lname"  />
                <FormField label = "mail"  /> 
                <FormField label = "phone"  /> 
                <FormField label = "message"  />
                <FormField label = "I want to subscribe"  />
                <Button txt = "Send"  linkName = "send" />
            </form>
        </div>
    )
}

export default Contact