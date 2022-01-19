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
import CommunityInfo from "./pages/CommunityInfo";
import MusicianInfo from "./pages/MusicianInfo";
import BandInfo from "./pages/BandInfo";
import OtherInfo from "./pages/OtherInfo";

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
            <Route path = "/musician/:id" element = {<MusicianInfo />} />
            <Route path = "/band/:id" element = {<BandInfo />} />
            <Route path = "/other/:id" element = {<OtherInfo />} />
            <Route path = "/musicians" element={<Community />} />
            <Route path="/bands" element={<Community />} />
            <Route path="/other" element={<Community />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route exact path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;