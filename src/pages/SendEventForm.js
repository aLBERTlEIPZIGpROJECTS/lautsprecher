const SendEventForm = () => {
    return(
        <div className="eventform">
            <h1>Send us your event</h1>
            <div className="cta-musicians">
                <p>Bist Du Musiker? Wir hören gerne über dich!</p>
                <a href=""><button>Melde Dich gerne hier!</button></a>
            </div>
            <div className="cta-musicians">
                <p>Bist du Veranstalter oder arbeitest du in der Musikbranche?</p>
                <a href=""><button>Melde Dich gerne hier!</button></a>
            </div>
            <form action="">
               <label htmlFor="eventName">
                   Event Name
                   <input type="text" required maxLength={50}/>
               </label>
               <label htmlFor="date">
                   Date
                    <input type="date" required maxLength={50} />
               </label>
               <label htmlFor="musicians">
                   Band / Soloist
                   <input type="text" required maxLength={50} />
               </label>
               <label htmlFor="musiciansLinks">
                   Links to Musicians Media / Site
                   <input type="url" required maxLength={50} />
               </label>
               <label htmlFor="cost">
                   Entry Cost
                   <input type="number" required maxLength={50} />
               </label>
               <label htmlFor="eventLink">
                   Link to the Event
                   <input type="url" required maxLength={50} />
               </label>
               <label htmlFor="ticketLink">
                   Link to tickets
                   <input type="url" maxLength={50} />
               </label>
               <label htmlFor="otherInfo">
                   <textarea name="otherInfo" id="otherInfo" cols="30" rows="10" maxLength={1000}></textarea>
               </label>
               <label htmlFor="eventImage">
                   <input type="image" />
               </label>
                <button>Senden</button>
            </form>
        </div>
    )
}

export default SendEventForm