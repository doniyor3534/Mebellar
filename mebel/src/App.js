import './App.css';
import './Pages/Style.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Pages/All/Navbar';
import Footer from './Pages/All/Footer';
import Home from './Pages/Home';
import Kuxni from './Pages/Kuxni';
import Gostinni from './Pages/Gostinni';
import Spalni from './Pages/Spalni';
import Shkaf from './Pages/Shkaf';
import Detski from './Pages/Detski';
import Header from './Pages/All/Header';
import LikePage from './Pages/LikePage';
import SavatPage from './Pages/SavatPage';
import ProfilePage from './Pages/ProfilePage';
import Scleton from './Pages/All/scleton';
import { useSelector } from 'react-redux';


function App() {
  const {data } = useSelector(
    (state) => state.home
  );
  return (
    <div className="App ">
      {
        data.length < 0?
        <Scleton/>
        :
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/All" element={<Home />} />
          <Route path="/Kuxni" element={<Kuxni />} />
          <Route path="/Mexmonxona" element={<Gostinni />} />
          <Route path="/Devan" element={<Spalni />} />
          <Route path="/Shkaf" element={<Shkaf />} />
          <Route path="/Bolalar" element={<Detski />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/LikePage" element={<LikePage />} />
          <Route path="/SavatPage" element={<SavatPage />} />
        </Routes>
        <Footer />
      </Router>
      }
    </div>
  );
}

export default App;
