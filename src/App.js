import './App.css';
import { Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Articles from "./pages/Articles"
import SingleArticle from './pages/SingleArticle';
import Contact from "./pages/Contact"
import Events from "./pages/Events"
import Home from "./pages/Home"
import Impressum from "./pages/Impressum"
import Musicians from "./pages/Musicians"
import Wochentrack from "./pages/Wochentrack"
import SendEvent from "./pages/SendEvent"
import History from "./pages/History"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/single-article" element = {<SingleArticle />} />
        <Route path="/wochentrack" element={<Wochentrack />} />
        <Route path="/musicians" element={<Musicians />} />
        <Route path="/history" element = {<History />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/send-event" element ={<SendEvent />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
