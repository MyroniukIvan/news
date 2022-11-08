import './App.css';
import NavBar from "./components/NavBar/NavBar";
import BottomBar from "./components/BottomBar/BottomBar";
import Statistics from "./components/Statistics/Statistics";
import HeroSection from "./components/HeroSection/HeroSection";
import News from "./components/News/News";
import VideoSection from "./components/VideoSection/VideoSection";
import Categories from "./components/Categories/Categories";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <BottomBar/>
            <Statistics/>
            <HeroSection/>
            <News/>
            <VideoSection/>
            <Categories/>
        </div>
    );
}

export default App;
