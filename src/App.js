import { Routes, Route } from "react-router-dom"
import './App.css';
import About from "./pages/About"
import Articles from "./pages/Articles"
import SingleArticle from './pages/SingleArticle';
import Contact from "./pages/Contact"
import Events from "./pages/Events"
import LandingPage from "./pages/LandingPage"
import Impressum from "./pages/Impressum"
import Musicians from "./pages/Musicians"
import MusicianSignForm from "./pages/MusicianSignForm"
import NonMusicianSignForm from "./pages/NonMusicianSignForm"
import SendEventForm from './pages/SendEventForm';
import HistoryArticles from './pages/HistoryArticles';
import HistorySingleArticle from "./pages/HistorySingleArticle"
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {
  return (
    
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/single-article" element = {<SingleArticle />} />
          <Route path="/musicians" element={<Musicians />} />
          <Route path="/history-articles" element = {<HistoryArticles />} />
          <Route path="/history-single-article" element = {<HistorySingleArticle />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/musician-sign-form" element={<MusicianSignForm />} />
          <Route path="/non-musician-sign-form" element={<NonMusicianSignForm />} />
          <Route path="/send-event" element ={<SendEventForm />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
