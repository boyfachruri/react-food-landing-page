import './App.css';
import About from './Components/About';
// import Contact from './Components/Contact';
// import Footer from './Components/Footer';
import Home from './Components/Home';
import Layout from './Components/Layout';
import Testimonial from './Components/Testimonial';
// import Work from './Components/Work';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="about" element={<About /> } />
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="product" element={<Testimonial />} />
          {/* <Route path="work" element={<Work />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
