 import { Routes, Route } from "react-router-dom"
 import { useState } from "react"

import './App.css';

/* STATIC / GENERAL ELEMENTS */
import Header from "./components/Header"
import Footer from "./components/Footer"
import LandingPage from "./pages/LandingPage"
import Impressum from "./pages/Impressum"

/* GET INFO */
import ConcertsList from "./pages/ConcertsList.js"
import SingleConcert from "./pages/SingleConcert"
import Community from "./pages/Community"
import SingleMusician from "./pages/SingleMusician";
import SingleBand from "./pages/SingleBand"
import SingleVeranstaltungsort from "./pages/SingleVeranstaltungsort";
import SingleMusicBusiness from "./pages/SingleMusicBusiness"
import ActualArticles from "./pages/ActualArticlesList"
import SingleActualArticle from './pages/SingleArticle'
import HistoryArticles from './pages/HistoryArticlesList'
import HistorySingleArticle from "./pages/HistorySingleArticle"
import About from "./pages/About"
import SingleTeamMember from "./pages/SingleTeamMember"

/* POST INFO */
import Contact from "./pages/Contact"
import PostAConcert from "./pages/PostAConcert";
import SignupMusician from "./pages/SignupMusician";
import SignupVeranstaltungsort from "./pages/SignupVeranstaltungsort";
import SignupMusicbusiness from "./pages/SignupMusicbusiness";
import SignupBand from "./pages/SignupBand";
import WriteArticle from "./pages/PostArticle";

/* MANAGE INFO */
import CMS from "./pages/CMS"



function App() {

  const [ headerClass, setHeaderClass ] = useState("")


  
  return (
    
    <div className="app">
      
        <Header class = { headerClass } />
      
      <main className="body">
        <div className="content">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/impressum" element={<Impressum />} />

            <Route path="/concerts" element={<ConcertsList />} />
            <Route path="/concert/:id" element={<SingleConcert />} />
            <Route path ="/community" element={<Community />} />
            <Route path = "/musicians" element={<Community />} />
            <Route path = "/musician/:id" element = {<SingleMusician />} />
            <Route path = "/bands" element={<Community />} />
            <Route path = "/bands/:id" element={<SingleBand />} />
            <Route path = "/veranstaltungsorte" element={<Community />} />
            <Route path = "/veranstaltungsort/:id" element = {<SingleVeranstaltungsort />} />
            <Route path = "/musicbusiness" element={<Community />} />
            <Route path = "/musicbusiness/:id" element = {<SingleMusicBusiness />} />
            <Route path="/actualarticles" element={<ActualArticles />} />
            <Route path="/actualarticle/:id" element = {<SingleActualArticle />} />
            <Route path="/historyarticles" element = {<HistoryArticles />} />
            <Route path="/historyarticles/:id" element = {<HistorySingleArticle />} />
            <Route path="/about" element={<About />} />
            <Route path="/teammember" element={<SingleTeamMember />} />
            <Route path="/w" element={<Contact />} />
            <Route path="/postaconcert" element={<PostAConcert />} />
            <Route path="/signupmusician" element={<SignupMusician />} />
            <Route path="/signupveranstaltungsort" element={<SignupVeranstaltungsort />} />
            <Route path="/signupmusicbusiness" element={<SignupMusicbusiness />} />
            <Route path="/signupband" element={<SignupBand />} />
            <Route path="/writearticle" element={<WriteArticle />} />
            <Route path="/singlemusicbusiness" element={<SingleMusicBusiness />} />
            <Route exact path="/cms" element={<CMS />} />
            {/* <Route exact path="/test" element={<TestPage />} /> */}
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;