 import { Routes, Route } from "react-router-dom"
 import { useState } from "react"

import './App.css';

import About from "./pages/About"
import Articles from "./pages/ActualArticlesList"
import SingleArticle from './pages/SingleArticle'
import Contact from "./pages/Contact"
import Events from "./pages/ConcertsList.js"
import LandingPage from "./pages/LandingPage"
import Impressum from "./pages/Impressum"
import Community from "./pages/Community"
import HistoryArticles from './pages/HistoryArticlesList'
import HistorySingleArticle from "./pages/HistorySingleArticle"
import Header from "./components/Header"
import Footer from "./components/Footer"
import EventInfo from "./pages/SingleConcert";
import MusicianInfo from "./pages/SingleMusician";
import BandInfo from "./pages/SingleBand";
import OtherInfo from "./pages/OtherInfo";
import WriteArticle from "./pages/PostArticle";
import PostAConcert from "./pages/PostAConcert";
import SignupMusician from "./pages/SignupMusician";
import SignupVeranstaltungsort from "./pages/SignupVeranstaltungsort";
import SignupMusicbusiness from "./pages/SignupMusicbusiness";
import SignupBand from "./pages/SignupBand";
import SignupTeamMember from "./pages/SignupTeamMember";
import SingleMusicBusiness from "./pages/SingleMusicBusiness"
import SingleMusicVeranstaltungsort from "./pages/SingleVeranstaltungsort";
import TestPage from "./pages/TestPage";
import CMS from "./pages/CMS"

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
            <Route path="/signupmusician" element={<SignupMusician />} />
            <Route path="/signupmusicbusiness" element={<SignupMusicbusiness />} />
            <Route path="/signupveranstaltungsort" element={<SignupVeranstaltungsort />} />
            <Route path="/signupband" element={<SignupBand />} />
            <Route path="/signupteammember" element={<SignupTeamMember />} />
            <Route path="/writearticle" element={<WriteArticle />} />
            <Route path="/postaconcert" element={<PostAConcert />} />
            <Route path="/singlemusicbusiness" element={<SingleMusicBusiness />} />
            <Route path="/singleveranstaltungsort" element={<SingleMusicVeranstaltungsort />} />
            <Route exact path="/cms" element={<CMS />} />
            <Route exact path="/test" element={<TestPage />} />
            <Route exact path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;