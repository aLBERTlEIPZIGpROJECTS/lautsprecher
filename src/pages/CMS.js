
import { useState } from "react"
import ActualArticleCMS from "../components/cmsComponents/ActualArticlesCMS"
import BandsCMS from "../components/cmsComponents/BandsCMS"
import ConcertsCMS from "../components/cmsComponents/ConcertsCMS"
import HistoryArticlesCMS from "../components/cmsComponents/HistoryArticlesCMS"
import MessagesCMS from "../components/cmsComponents/MessagesCMS"
import MusicBusinessCMS from "../components/cmsComponents/MusicBusinessCMS"
import MusiciansCMS from "../components/cmsComponents/MusiciansCMS"
import SubscribersCMS from "../components/cmsComponents/SubscribersCMS"
import TeamCMS from "../components/cmsComponents/TeamCMS"
import VeranstaltungsortCMS from "../components/cmsComponents/VeranstaltungsortCMS"

const CMS = () => {

    const [ category, setCategory ] = useState(null)

    const updateCategory = (v) => {
        setCategory(v)
        console.log(category)
    }

    return(
        <div className="cms">
            <h1>CMS</h1>
            {/* SELECCIONAR INFO */}
            <div className="dropdown">
                <h1>{category || 'Hello'}</h1>
               <label htmlFor="categories"> Pick a category
                    <select name="categories" id="categories">
                        <option value="musician" id="categories" onSelect={() => updateCategory("musician")}>Musician</option>
                        <option value="band" id="categories" onSelect={() => setCategory("band")}>Band</option>
                        <option value="veranstaltungsort" id="categories" onSelect={() => setCategory("veranstaltungsort")}>Veranstaltungsort</option>
                        <option value="concert" id="categories" onSelect={() => setCategory("concert")}>Concert</option>
                        <option value="music-business" id="categories" onSelect={() => setCategory("musicibusiness")}>Music Business</option>
                        <option value="team" id="categories" onSelect={() => setCategory("team")}>Team</option>
                        <option value="actual-article" id="categories" onSelect={() => setCategory("actualArticle")}>Actual Article</option>
                        <option value="history-article" id="categories" onSelect={() => setCategory("historyArticle")}>History Article</option>
                        <option value="subscribers" id="categories" onSelect={() => setCategory("subscribers")}>Subscribers</option>
                        <option value="messages" id="categories" onSelect={() => setCategory("messages")}>Messages</option>
                    </select>
               </label>
            </div>
        </div>
    )
}

export default CMS