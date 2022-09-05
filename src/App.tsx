import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from './components/items/Navbar';
import LaunchesInfo from './components/pages/LaunchesInfo';
import Footer from './components/items/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path='/launch/:id' element={<LaunchesInfo/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
