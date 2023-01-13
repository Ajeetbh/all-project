import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';
import { SignUp } from './components/SignUp';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<h1>Product Listing Components</h1>}/>
        <Route path="/add" element={<h1>Add Components</h1>}/>
        <Route path="/update" element={<h1>Upadte Components</h1>}/>
        <Route path="/logout" element={<h1>Logout Components</h1>}/>
        <Route path="/profile" element={<h1>Profile Components</h1>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
