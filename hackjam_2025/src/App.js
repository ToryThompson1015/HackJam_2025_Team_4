import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';
import NoPage from './pages/NoPage';
import LoginSignup from './pages/LoginSignup';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="*" element={<NoPage />} />

        </Routes>
        </BrowserRouter>
       </div>
  );
}

export default App;