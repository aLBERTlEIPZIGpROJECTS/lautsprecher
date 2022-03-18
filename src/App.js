 import { Routes, Route } from "react-router-dom"
 import { useState } from "react"

import './App.css';

import About from "./pages/About"
import Articles from "./pages/Articles"
import SingleArticle from './pages/SingleArticle'
import Contact from "./pages/Contact"
import Events from "./pages/Events"
import LandingPage from "./pages/LandingPage"
import Impressum from "./pages/Impressum"
import Community from "./pages/Community"
import HistoryArticles from './pages/HistoryArticles'
import HistorySingleArticle from "./pages/HistorySingleArticle"
import Header from "./components/Header"
import Footer from "./components/Footer"
import EventInfo from "./pages/EventInfo";
import MusicianInfo from "./pages/MusicianInfo";
import BandInfo from "./pages/BandInfo";
import OtherInfo from "./pages/OtherInfo";
import WriteArticle from "./pages/WriteArticle";
import PostAConcert from "./pages/PostAConcert";
import SignupMusician from "./pages/SignupMusician";
import SignupVeranstaltungsort from "./pages/SignupVeranstaltungsort";
import SignupMusicbusiness from "./pages/SignupMusicbusiness";
import SignupBand from "./pages/SignupBand";
import SignupTeamMember from "./pages/SignupTeamMember";
/* import CMS from "./pages/CMS" */

function App() {

  const [ headerClass, setHeaderClass ] = useState("")


  
  return (
    
    <div className="app">
      
        <Header class = { headerClass } />
      
      <main className="body">
        <div className="content">
          <Routes>
            <Route path="/events" element={<Events />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/history-articles" element = {<HistoryArticles />} />
            <Route path="/single-article/:id" element = {<SingleArticle />} />
            <Route path="/history-single-article/:id" element = {<HistorySingleArticle />} />
            <Route path ="/community" element={<Community />} />
            <Route path = "/musicians" element={<Community />} />
            <Route path = "/bands" element={<Community />} />
            <Route path = "/other" element={<Community />} />
            <Route path = "/musician/:id" element = {<MusicianInfo />} />
            <Route path = "/band/:id" element = {<BandInfo />} />
            <Route path = "/other/:id" element = {<OtherInfo />} />
            <Route path = "/event/:id" element = {<EventInfo />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route exact path="/signupmusician" element={<SignupMusician />} />
            <Route exact path="/signupmusicbusiness" element={<SignupMusicbusiness />} />
            <Route exact path="/signupveranstaltungsort" element={<SignupVeranstaltungsort />} />
            <Route exact path="/signupband" element={<SignupBand />} />
            <Route exact path="/signupteammember" element={<SignupTeamMember />} />
            <Route exact path="/writearticle" element={<WriteArticle />} />
            <Route exact path="/postaconcert" element={<PostAConcert />} />
            {/* <Route exact path="/cms" element={<CMS />} /> */}
            <Route exact path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;