
import { useState } from "react"

const CMS = () => {

    const [ category, setCategory ] = useState(null)

    return(
        <div className="cms">
            <h1>CMS</h1>
            {/* SELECCIONAR INFO */}
            <div class="dropdown">
               <label htmlFor="categories"> Pick a category
                    <select name="categories" id="categories">
                        <option value="musician" id="categories">Musician</option>
                        <option value="band" id="categories">Band</option>
                        <option value="veranstaltungsort" id="categories">Veranstaltungsort</option>
                        <option value="concert" id="categories">Concert</option>
                        <option value="music-business" id="categories">Music Business</option>
                        <option value="team" id="categories">Team</option>
                        <option value="actual-article" id="categories">Actual Article</option>
                        <option value="history-article" id="categories">History Article</option>
                        <option value="subscribers" id="categories" >Subscribers</option>
                        <option value="messages" id="categories" >Messages</option>
                    </select>
               </label>
            </div>
        </div>
    )
}

export default CMS