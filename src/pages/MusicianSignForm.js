const MusicianSignForm = () => {
    return(
        <div className="contact">
            <h1>Sign Form for Musicians</h1>
            <form action="">
                <label htmlFor="bandName">
                    <input type="text" maxLength={20} required />
                </label>
                <label htmlFor="fname">
                    Vorname
                    <input type="text" maxLength={20} required/>
                </label>
                <label htmlFor="lname">
                    Nachname
                    <input type="text" maxLength={20} />
                </label>
                <label htmlFor="instrument">
                    Instrument
                    <input type="text" maxLength={50} required/>
                </label>
                <label htmlFor="bandMail">
                    Band Mail
                    <input type="mail" maxLength={20}/>
                </label>
                <label htmlFor="bandLinks">
                    Social Media und Website
                    <input type="url" />
                </label>
                <label htmlFor="bandPhone">
                    Band Phone
                    <input type="number" maxLength={20}/>
                </label>
                <label htmlFor="musiciansImg">
                    Foto
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

export default MusicianSignForm