const Contact = () => {
    return(
        <div className="contact">
            <h1>Contact</h1>
            <div className="cta-musicians">
                <p>Bist Du Musiker? Wir hören gerne über dich!</p>
                <a href=""><button>Melde Dich gerne hier!</button></a>
            </div>
            <div className="cta-musicians">
                <p>Bist du Veranstalter oder arbeitest du in der Musikbranche?</p>
                <a href=""><button>Melde Dich gerne hier!</button></a>
            </div>
            <form action="">
                <label htmlFor="fname">
                    Vorname
                    <input type="text" maxLength={20} required/>
                </label>
                <label htmlFor="lname">
                    Nachname
                    <input type="text" maxLength={20} required/>
                </label>
                <label htmlFor="mail">
                    Mail
                    <input type="mail" maxLength={20}/>
                </label>
                <label htmlFor="phone">
                    Phone
                    <input type="number" maxLength={20}/>
                </label>
                <label htmlFor="message">
                    Deine Nachricht
                    <textarea name="" id="" cols="30" rows="10" maxLength={1000}></textarea>
                </label>
                <label htmlFor="">
                    Yes, I want to subscribe to newsletter
                    <input type="checkbox" />
                </label>
                <button>Senden</button>
            </form>
        </div>
    )
}

export default Contact