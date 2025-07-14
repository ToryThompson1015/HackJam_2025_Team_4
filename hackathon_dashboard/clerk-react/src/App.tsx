import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import NoPage from './pages/NoPage';
import LoginSignup from './pages/signup';
import Leaderboard from './pages/leaderboard';
import Achievements from './pages/achievements';
import Profiles from './components/profiles';
import Challenges from './pages/challenges';
import SettingsPage from './pages/settings';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/achievements" element={<Achievements/>}/>
        <Route path="/profiles" element={<Profiles/>}/>
        <Route path="/challenges" element={<Challenges/>} />
        <Route path="/settings" element={<SettingsPage />} />
        {/* Add other routes as needed */}
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/signup" element={<LoginSignup />} />
        {/* Add other routes as needed */}
        <Route path="*" element={<NoPage />} />
        

        </Routes>
        </BrowserRouter>
       </div>
  );
}

export default App;
