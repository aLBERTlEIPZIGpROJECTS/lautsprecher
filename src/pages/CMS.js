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

    const [ category, setCategory ] = useState(undefined);

    const updateCategory = (v) => {
        setCategory(v)
    }
    return(
        <div className="cms">
            <h1>CMS</h1>
                <h2>{category}</h2>

            <div className="cms__select-category">
                <button onClick={() => updateCategory("Musicians")} className = "cms__select-option">Musicians</button>
                <button onClick={() => updateCategory("Bands")} className = "cms__select-option">Bands</button>
                <button onClick={() => updateCategory("Veranstaltungsorte")} className = "cms__select-option">Veranstaltungsorte</button>
                <button onClick={() => updateCategory("Concerts")} className = "cms__select-option">Concerts</button>
                <button onClick={() => updateCategory("Music Business")} className = "cms__select-option">Music Business</button>
                <button onClick={() => updateCategory("Team Members")} className = "cms__select-option">Team Members</button>
                <button onClick={() => updateCategory("Actual Articles")} className = "cms__select-option">Actual Articles</button>
                <button onClick={() => updateCategory("History Articles")} className = "cms__select-option">History Articles</button>
                <button onClick={() => updateCategory("Subscribers")} className = "cms__select-option">Subscribers</button>
                <button onClick={() => updateCategory("Messages")} className = "cms__select-option">Messages</button>
            </div>

            <div className="cms__content">
                {category === "Musicians" && <MusiciansCMS />}
                {category === "Bands" && <BandsCMS />}
                {category === "Veranstaltungsort" && <VeranstaltungsortCMS />}
                {category === "Concerts" && <ConcertsCMS />}
                {category === "Music Business" && <MusicBusinessCMS />}
                {category === "Team Members" && <TeamCMS />}
                {category === "Actual Articles" && <ActualArticleCMS />}
                {category === "History Articles" && <HistoryArticlesCMS />}
                {category === "Subscribers" && <SubscribersCMS />}
                {category === "Messages" && <MessagesCMS />}
            </div>


        </div>
    )
}

export default CMS