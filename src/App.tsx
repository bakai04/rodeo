import Header from "./components/Header/Header";
import {Routes, Route} from "react-router-dom";
import ChampionsPage from "./pages/ChempionsPage/ChampionsPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import Tournaments from "./pages/TournamentsPage/Tournaments";
import NewsPage from "./pages/NewsPage/NewsPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import MainPage from "./pages/MainPage/MainPage";
import TicketPage from "./pages/TicketPage/TicketPage";
import Footer from "./components/Footer/Footer";
import {useState} from "react";

function App() {
    const [selectedLanguage, setSelectedLanguage] = useState<string | undefined>("RU");

    return (
        <div className="App">
            <Header setSelectedLanguage={setSelectedLanguage} selectedLanguage={selectedLanguage}/>
            <Routes>
                <Route path="/" element={<MainPage selectedLanguage={selectedLanguage}/>}/>
                <Route path="/champions" element={<ChampionsPage selectedLanguage={selectedLanguage}/>}/>
                <Route path="/news" element={<NewsPage selectedLanguage={selectedLanguage} />}/>
                <Route path="/gallery" element={<GalleryPage selectedLanguage={selectedLanguage}/>}/>
                <Route path="/about-us" element={<AboutUsPage selectedLanguage={selectedLanguage}/>}/>
                <Route path="/tournaments" element={<Tournaments selectedLanguage={selectedLanguage}/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App