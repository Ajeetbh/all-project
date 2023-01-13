import './App.css';
import Navbar from "./components/Navbar"
import Home from './components/Home'
import Service from './components/Service'
import About from './components/About'
import Contact from './components/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
