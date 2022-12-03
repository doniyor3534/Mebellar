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


function App() {
  return (
    <div className="App">
         <Router>
            <Header/>
            <Navbar/>
               <Routes>
                   <Route path='/' element={<Home/>} />
                   <Route path='/kuxni' element={<Kuxni/>} />
                   <Route path='/gostinni' element={<Gostinni/>} />
                   <Route path='/spalni' element={<Spalni/>} />
                   <Route path='/shkaf' element={<Shkaf/>} />
                   <Route path='/detski' element={<Detski/>} />
               </Routes>
            <Footer/>
         </Router>
    </div>
  );
}

export default App;
