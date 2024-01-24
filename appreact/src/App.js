import './App.css';
import Navbar1 from './components/Navbar1';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar1 />
        <Home/>
        <Menu/>
        <About/>
        <Contact/>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;


