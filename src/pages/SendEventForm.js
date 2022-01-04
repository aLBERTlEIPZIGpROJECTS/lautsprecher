/* In order to have this Component, you need first a sign up - sign in system - viel Spaß dabei */

import Button from "../components/Button"
import FormField from "../components/FormField"

const SendEventForm = () => {
    return(
        <div className="eventform">
            <h1>Send us your event</h1>
            <Button /> {/* Bist Du Musiker? Wir hören gerne über dich! */}
            <Button /> {/* Bist du Veranstalter oder arbeitest du in der Musikbranche? */}
            <form action="">
                <FormField /> {/* Event Name */}
                <FormField /> {/* Date */}
                <FormField /> {/* Band / Soloist */}
                <FormField /> {/* Cost */}
                <FormField /> {/* Links to Musicians Media / Site */}
                <FormField /> {/* Linkt to tickets */}
                <FormField /> {/* + Info */}
                <FormField /> {/* Event Img */}
                <Button txt = "Send" />
            </form>
        </div>
    )
}

export default SendEventForm