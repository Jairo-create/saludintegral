import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About"; 
import Contact from "./pages/Contact";
import './App.css'





function App() {
  return (
    <Router>
      <Navbar />
      <main>
         <Routes>
           <Route path= "/" element={<Home />} />
           <Route path= "/servicios" element={<Services />} />
           <Route path="/nosotros" element={<About />} />
           <Route path="/contacto" element={<Contact/>} />

         </Routes>
      
      </main>
   
    <Footer />
      
    </Router>
  );
}

export default App;
