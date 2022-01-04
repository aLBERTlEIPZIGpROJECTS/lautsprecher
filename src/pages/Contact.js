import Button from "../components/Button"
import FormField from "../components/FormField"

const Contact = () => {
    return(
        <div className="contact">
            <h1>Contact</h1>
            <Button /> {/* Bist Du Musiker? Wir hören gerne über dich! */}
            <Button /> {/* Bist du Veranstalter oder arbeitest du in der Musikbranche? */}
            <form action="">
                <FormField /> {/* Vorname */}
                <FormField /> {/* Nachname */}
                <FormField /> {/* Mail */}
                <FormField /> {/* Phone */}
                <FormField /> {/* Message */}
                <FormField /> {/* I want to subscribe */}
                <Button txt = "Send" />
            </form>
        </div>
    )
}

export default Contact