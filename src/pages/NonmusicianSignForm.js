const NonmusicianSignForm = () => {
    return(
        <div className="contact">
            <h1>Sign Form for "Non-Musicians"</h1>
            <form action="">
                <label htmlFor="companyName">
                    <input type="text" maxLength={20} required />
                </label>
                <label htmlFor="inhaberFname">
                    Inhaber Vorname
                    <input type="text" maxLength={20} required/>
                </label>
                <label htmlFor="inhaberLname">
                    Inhaber Nachname
                    <input type="text" maxLength={20} />
                </label>
                <label htmlFor="activity">
                    Activity
                    <input type="text" maxLength={50} required/>
                </label>
                <label htmlFor="companyMail">
                    Company Mail
                    <input type="mail" maxLength={20}/>
                </label>
                <label htmlFor="companyPhone">
                    Company Phone
                    <input type="number" maxLength={20}/>
                </label>
                <label htmlFor="companyLinks">
                    Social Media und Website
                    <input type="url" />
                </label>
                <label htmlFor="nonMusicianImage">
                    Dein Bild
                    <input type="image" />
                </label>
                <label htmlFor="message">
                    Erzähl und über Dich / Euch
                    <textarea name="" id="" cols="30" rows="10" maxLength={1000}></textarea>
                </label>
                <label htmlFor="">
                    Yes, I want to subscribe to newsletter
                    <input type="checkbox" />
                </label>
                <button>Senden</button>
            </form>
        </div>
)}

export default NonmusicianSignForm