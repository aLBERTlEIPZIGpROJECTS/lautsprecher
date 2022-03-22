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
                        {/* <option value="band" id="categories" onSelect={setCategory("band")}>Band</option>
                        <option value="veranstaltungsort" id="categories" onSelect={setCategory("veranstaltungsort")}>Veranstaltungsort</option>
                        <option value="concert" id="categories" onSelect={setCategory("concert")}>Concert</option>
                        <option value="music-business" id="categories" onSelect={"musicBusiness"} >Music Business</option>
                        <option value="team" id="categories" onSelect={"team"}>Team</option>
                        <option value="actual-article" id="categories" onSelect={"actualArticle"}>Actual Article</option>
                        <option value="history-article" id="categories" onSelect={"historyArticle"}>History Article</option>
                        <option value="subscribers" id="categories" onSelect={"subscribers"}>Subscribers</option>
                        <option value="messages" id="categories" onSelect={"messages"}>Messages</option> */}
                    </select>
               </label>
            </div>

            {/* SHOW ALL ARTICLE */}

            

            {/* EDITAR LA INFO MOSTRADA */}
        </div>
    )
}

export default CMS